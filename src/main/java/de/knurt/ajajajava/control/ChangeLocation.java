/*
 * Copyright 2009-2010 by KNURT Systeme (http://www.knurt.de)
 *
 * http://www.gnu.org/licenses/gpl-3.0.html GPLv3
 * This file is part of ajajajava.
 *
 * ajajajava is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ajajajava is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ajajajava.  If not, see <http://www.gnu.org/licenses/gpl-3.0.html>.
 */
package de.knurt.ajajajava.control;

import java.io.*;
import java.lang.reflect.Method;
import java.util.ArrayList;

import javax.servlet.*;
import javax.servlet.http.*;
import de.knurt.ajajajava.control.reflect.ReflectionTool;

import de.knurt.ajajajava.model.Location;
import de.knurt.ajajajava.model.LocationPart;
import de.knurt.ajajajava.config.Config;
import de.knurt.ajajajava.model.manager.LocationManager;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import static java.io.File.separator;

/**
 * This is the main Servlet, that is requested for every location part. It responses with the output of a jsp file as configured.
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
public class ChangeLocation extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext());

        // get config objects
        Config config = (Config) context.getBean("config");
        LocationPart locationPart = (LocationPart) context.getBean(request.getParameter("locationPart"));

        // set content type
        if (locationPart.getPartName().equals("javascript")) {
            response.setContentType("text/javascript;charset=" + Config.CHARSET);
        } else {
            response.setContentType("text/html;charset=" + Config.CHARSET);
        }

        Location location = this.getLocation(request, context);

        this.invokeAllAnnotatedMethods(location, request, context);

        RequestDispatcher dispatcher = this.getDispatcher(request, config, location, locationPart);
        dispatcher.include(request, response);
    }

    private void invokeAllAnnotatedMethods(Location location, HttpServletRequest request, WebApplicationContext context) {
        this.invokeAnnotedMethods(location, de.knurt.ajajajava.control.reflect.RequestMe.class, request, context);
    }

    private void invokeAnnotedMethods(Location location, Class annotationClass, HttpServletRequest request, WebApplicationContext context) {
        ArrayList<String> lrhs = location.getLocationRequestHandler();
        if (lrhs != null) {
            for (String className : lrhs) {
                ArrayList<Method> methods = ReflectionTool.getMethodsWithAnnotation(
                        className,
                        annotationClass);
                for (Method method : methods) {
                    Object arglist[] = new Object[2];
                    arglist[0] = request;
                    arglist[1] = context;
                    ReflectionTool.invoke(className, method, arglist);
                }
            }
        }
    }

    /**
     * Returns the path to the file (included) of the actual LocationPart.
     * @param config a org.ajajajava.model.Config instance as defined in the application context
     * @param location The actual Location
     * @param locationPart The part of the actual location requested here
     * @see org.ajajajava.model.Location
     * @return the path to the file (included) of the actual LocationPart.
     */
    private RequestDispatcher getDispatcher(HttpServletRequest request, Config config, Location location, LocationPart locationPart) {
        String path = config.getPath2pages() + separator + location.getLocationName() + Config.LOCATION_SEPARATOR + locationPart.getPartName() + "." + locationPart.getSuffix();
        RequestDispatcher result = request.getRequestDispatcher(path);

        if (result == null) { // no content set for location and location part
            result = request.getRequestDispatcher(EMPTY_LOCATION_CONTENT_FILE);
        }
        return result;
    }
    private final static String EMPTY_LOCATION_CONTENT_FILE = "./WEB-INF/empty.html";

    private Location getLocation(HttpServletRequest request, WebApplicationContext context) {
        /* get the result for the given URI#locationName and
         * set home-result, if the locationName is not defined. */
        Location result;
        String locationName = request.getParameter("hashID");
        if (locationName != null && context.containsBean(locationName)) {
            result = (Location) context.getBean(locationName);
        } else {
            LocationManager lc = (LocationManager) context.getBean("locationManager");
            result = lc.getDefaultLocation();
        }
        return result;
    }

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
