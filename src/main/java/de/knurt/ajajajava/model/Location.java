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
package de.knurt.ajajajava.model;

import java.util.ArrayList;

/**
 * POJO for a Location
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
public class Location {

    private String locationName;
    private boolean authPage = false;
    private boolean storable = true;
    private boolean standAlone = false;
    private ArrayList<LocationPart> locationParts;
    private ArrayList<String> locationRequestHandler;

    public void setLocationRequestHandler(ArrayList<String> locationRequestHandler) {
        this.locationRequestHandler = locationRequestHandler;
    }

    public ArrayList<String> getLocationRequestHandler() {
        return locationRequestHandler;
    }

    /**
     * Creates the start-Location
     */
    public Location() {
    }

    /**
     * return true, if the page needs authentification
     * @return true, if the page needs authentication
     */
    public boolean isAuthPage() {
        return authPage;
    }

    public boolean isStandAlone() {
        return standAlone;
    }

    public boolean isStorable() {
        return storable;
    }

    public void setStandAlone(boolean standAlone) {
        this.standAlone = standAlone;
    }

    public void setStorable(boolean storable) {
        this.storable = storable;
    }

    /**
     * return the <CODE>locationName</CODE>
     * @return  the <CODE>locationName</CODE>
     */
    public String getLocationName() {
        return locationName;
    }

    @Override
    public String toString() {
        return this.locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public void setAuthPage(boolean authPage) {
        this.authPage = authPage;
    }

    public ArrayList<LocationPart> getLocationParts() {
        return locationParts;
    }

    public void setLocationParts(ArrayList<LocationPart> locationParts) {
        this.locationParts = locationParts;
    }
}
