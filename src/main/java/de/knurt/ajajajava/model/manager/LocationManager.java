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
package de.knurt.ajajajava.model.manager;

import java.io.Serializable;
import java.util.ArrayList;
import de.knurt.ajajajava.model.Location;

/**
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
public class LocationManager implements Serializable {

    private ArrayList<Location> locations;
    private Location defaultLocation;

    public void setLocations(ArrayList<Location> locations) {
        this.locations = locations;
    }

    public ArrayList getLocations() {
        return locations;
    }

    public Location getDefaultLocation() {
        return defaultLocation;
    }

    public void setDefaultLocation(Location defaultLocation) {
        this.defaultLocation = defaultLocation;
    }
}
