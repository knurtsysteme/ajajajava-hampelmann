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
package de.knurt.ajajajava.config;

/**
 * Bean for the configuration. By now, nothing but pathes and dir names
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
public final class Config {

    private final String path2pages;

    /**
     * construct a ajajajava configuration.
     * @param path2pages full(!) path to webpages.
     */
    public Config(String path2pages) {
        this.path2pages = path2pages;
    }

    /**
     * return the full path to webpages.
     * @return the full path to webpages
     */
    public String getPath2pages() {
        return path2pages;
    }

    /**
     * charset used globaly.
     * no reason to use anything but UTF-8
     */
    public final static String CHARSET = "UTF-8";

    /**
     * there is one file for each location and location part.
     * the file must be [location name]LOCATION_SEPARATOR[location part name]
     */
    public final static String LOCATION_SEPARATOR = "_";


}
