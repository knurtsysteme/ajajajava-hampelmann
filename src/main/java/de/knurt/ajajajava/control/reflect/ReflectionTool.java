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
package de.knurt.ajajajava.control.reflect;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;

/**
 * This handles reflections. All Exception, that could be
 * thrown are catched, the return value is always null then.
 *
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 02/23/07
 * @version 1.00-SNAPSHOT
 */
public class ReflectionTool {

    public static Object getInstance(String className) {
        Object result = null;
        try {
            Constructor constructor = Class.forName(className).getConstructor(new Class[0]);
            result = constructor.newInstance(new Object[0]);
        } catch (IllegalArgumentException ex) {
            ex.printStackTrace();
        } catch (IllegalAccessException ex) {
            ex.printStackTrace();
        } catch (InstantiationException ex) {
            ex.printStackTrace();
        } catch (InvocationTargetException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        } catch (SecurityException ex) {
            ex.printStackTrace();
        } catch (NoSuchMethodException ex) {
            ex.printStackTrace();
        }
        return result;
    }

    public static ArrayList<Method> getMethodsWithAnnotation(String className, Class annotationClass) {
        ArrayList<Method> result = new ArrayList<Method>();
        Method[] methods = getAllMethods(className);
        for (Method method : methods) {
            if (method.isAnnotationPresent(annotationClass)) {
                result.add(method);
            }
        }
        return result;
    }

    public static Method[] getAllMethods(String className) {
        Method[] result = null;
        try {
            result = Class.forName(className).getDeclaredMethods();
        } catch (SecurityException ex) {
            ex.printStackTrace();
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }
        return result;
    }

    public static void invoke(String className, Method method, Object[] arglist) {
        try {
            method.invoke(
                    ReflectionTool.getInstance(className),
                    arglist);
        } catch (IllegalArgumentException ex) {
            ex.printStackTrace();
            // TODO log das
        } catch (IllegalAccessException ex) {
            ex.printStackTrace();
            // TODO log das
        } catch (InvocationTargetException ex) {
            ex.printStackTrace();
            // TODO log das
        }
    }
}
