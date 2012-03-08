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
/*
 * ChangeLocation.java
 *
 * Created on 9. Januar 2007, 15:43
 * Überlegung, wie ich diese statische Geschichte dynamisch bekomme:
 * 1. Wie bekomme ich z.B. die aus der Datenbank ausgelegenen Tags als DropDown in research.html?
 * Das natürlich möglichst ohne irgendwelche Stringkonvertierungen.
 *
 * Guck mal an, wie es in SpringTestwiese_3 funktionieren würde und ob Du das so hinbekommst, dass
 * nur JSON übertragen wird. Wenn nicht -> weitere Literatur!
 *
 * Ein anderer (recht unbefriedener) Ansatz ist, das Verhalten durch das zurückgelieferte JavaScript
 * und einer weiteren Anfrage zu regeln. Damit müsste man eine rekursive Struktur in Betracht ziehen:
 *
 * client -> server generiert (json) -> client empfängt (json.javascript)
 *  client json.javascript ajax -> server generiert json usw. ...
 *
 * Am schönsten wäre sowas wie:
 * String bar = "foo";
 * String seite = hokuspokus.getOutputOfJsp("research.jsp");
 * json.put(seite);
 * out.println(json);
 * out.close();
 *
 * Wobei research.jsp eine Stelle <c:out value="${bar}"/> beinhaltet und die Seite dementsprechend "foo".
 *
 * Dann müsste zwar ein select her (gleich welcher art), aber ohne gehts wohl sowieso nicht?!
 */
package de.knurt.ajajajava.control;

import java.io.*;
import java.util.ArrayList;

import javax.servlet.*;
import javax.servlet.http.*;

import de.knurt.ajajajava.model.Location;
import de.knurt.ajajajava.model.LocationPart;
import de.knurt.ajajajava.model.manager.LocationManager;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * This is to request the basic configuration of the ajajajava Project.
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
public class GetLocations_JSON extends HttpServlet {

    /** Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json;charset=UTF-8");

        PrintWriter out = response.getWriter();
        out.println(this.getConfiguration());
    }

    private String getConfiguration() {
        WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext());
        LocationManager lc = (LocationManager) context.getBean("locationManager");
        JSONObject jo = new JSONObject();

        // JSON locations
        ArrayList<Location> locations = lc.getLocations();
        try {
            jo.put("locations", locations);
        } catch (JSONException ex) {
            ex.printStackTrace();
        }

        // JSON default location
        try {
            jo.put("defaultLocation", lc.getDefaultLocation());
        } catch (JSONException ex) {
            ex.printStackTrace();
        }

        // JSON describtion of each location
        ArrayList<LocationPart> locationParts;
        JSONObject joLocation;
        for (Location loc : locations) {
            locationParts = loc.getLocationParts();
            joLocation = new JSONObject();
            try {
                joLocation.put("parts", locationParts);
                joLocation.put("authPage", loc.isAuthPage());
                joLocation.put("standAlone", loc.isStandAlone());
                joLocation.put("storable", loc.isStorable());
                jo.put(loc.toString(), joLocation);
            } catch (JSONException ex) {
                ex.printStackTrace();
            }
        }
        return jo.toString();
    }

    /** Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
