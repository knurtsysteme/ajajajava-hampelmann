/*
 * Copyright 2009-2010 by KNURT Systeme (http://www.knurt.de)
 *
 * http://www.gnu.org/licenses/gpl-3.0.html GPLv3
 * This file is part of Ajajajava.
 *
 * Ajajajava is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Ajajajava is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Ajajajava.  If not, see http://www.gnu.org/licenses/gpl-3.0.html.
 */
/**
 * @author: Daniel Oltmanns &lt;danieloltmanns@knurt.de&gt;<br />
 * @since: 1 01/26/07<br />
 * @version: 2 01/31/07<br />
 * @homepage: http://www.knurt.de<br />
 * @homepage: http://www.tfh-berlin.de<br />
 * @need: Prototype: prototype.js (http://www.prototypejs.org)<br />
 * @need: Really Simple History (RSH): dhtmlHistory.js (http://codinginparadise.org/projects/dhtml_history/README.html)
 * <p />
 * This is the clientside part of the Framework Ajajajava.
 * <p />
 * Ajajajava works together with a special serverside architecture and does all the basic work for you to reach high performance with you wegpage.
 * <p />
 * Ajajajava uses Prototype's Ajax for this purpose and RSH's history. Add this file to your webpage as you know it:<br />
 * <code>&lt;script type="text/javascript" src="[path to Ajajajava.js]/Ajajajava.js" /&gt;</code>
 * <p />
 * <b>Use 1 (Basic):</b><br />
 * Basicly Ajajajava needs just this line of code in your one and only main HTML, JSP or whatever File, that stands for your one and only Webpage.
 * (please see our philosophy of a modern internet presence at: http://www.TODO.org).<br />
 * <code>
 * &lt;script type="text/javascript"&gt;<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;window.onload = function()<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ajajajava.initialize();<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;}
 * &lt;/script&gt;
 * </code>
 * <p />
 * Ajajajava takes your location parts into the matching &lt;div&gt;-Blocks as
 * you've defined in your Spring-Application-Context (TODO Name der Datei angeben).<br />
 * Your webpage uses the full functionality of Ajajajava then already.
 * <p />
 * <b>Use 2 (Options):</b><br />
 * In most Webpages you probably like to implement more clientside code then just
 * using technologies, that pimp up the performance.<br />
 * Ajajajava has following options to add more functionality to your webpage. Every option is
 * a function:
 * <p />
 * <table>
 * 	<tr>
 * 		<td><code>onHistoryChange</code></td>
 * 		<td>
 * 			Function called every time the history changes<br />
 * 			The function gets two parameters:<br />
 * 			@param newLocation - id of the new location
 * 		</td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>onLocationShownFirstTime</code></td>
 * 		<td>Function called after a location has been loaded from server and is shown on the page the first time</td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>beforeAjaxRequest</code></td>
 * 		<td>If Ajajajava sends a request to a server, here you can define a function that is called before (e.g. show a loading symbol)</td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestJavascriptOnFailure</code></td>
 * 		<td>
 *                   If Ajajajava tries to get a javascript from server and it fails (@see prototype.js Ajax.Request#onFailure)<br />
 *                   @param r the request object
 *              </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestJavascriptOnSuccess</code></td>
 * 		<td>If Ajajajava tries to get a javascript from server and it succeeds (@see prototype.js Ajax.Request#onSuccess)<br />
 *                   @param r the request object
 *              </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestJavascriptOnComplete</code></td>
 * 		<td>If Ajajajava tries to get a javascript from server and it is complete (@see prototype.js Ajax.Request#onComplete)<br />
 *                   @param r the request object
 *              </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>onLocationPartShown</code></td>
 * 		<td>After a location part is shown, this option is called</td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>onLocationShown</code></td>
 * 		<td>After a location is shown, this option is called. It retrieves this params:
 * 			@param locationPartName name of the location part as defined on server
 * 			@param content the content of the location part as given back from server
 * </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestContentOnComplete</code></td>
 * 		<td>If Ajajajava tries to get a location part from server and it is complete (@see prototype.js Ajax.Request#onFailure)<br />
 *                   @param r the request object
 *              </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestContentOnFailure</code></td>
 * 		<td>If Ajajajava tries to get a location part from server and it fails (@see prototype.js Ajax.Request#onFailure)<br />
 *                   @param r the request object
 *              </td>
 * 	</tr>
 * 	<tr>
 * 		<td><code>ajaxRequestContentOnSuccess</code></td>
 * 		<td>
 *                  If Ajajajava tries to get a location part from server and it succeeds (@see prototype.js Ajax.Request#onFailure)<br />
 *                  @param r the request object
 *              </td>
 * 	</tr>
 * </table>
 * <p />
 * Set as many options you want on initializing Ajajajajava:
 * <p />
 * <code>
 * Ajajajava.initialize<br />
 * (<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onHistoryChange : function(newLocation)<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("onHistoryChange: " + newLocation);<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLocationShownFirstTime : function()<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("onLocationShownFirstTime");<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beforeAjaxRequest : function()<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("beforeAjaxRequest");<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ajaxRequestJavascriptOnComplete : function(r)<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("ajaxRequestJavascriptOnComplete: " + r.responseText);<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLocationPartShown : function(locationPartName, content)<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("onLocationPartShown: " + locationPartName + " - " content);<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLocationChange : function()<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("onLocationChange");<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onLocationShown : function()<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("onLocationShown");<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
 * &nbsp;&nbsp;&nbsp;&nbsp;}<br />
 * );
 * </code>
 * <p />
 * Anyway, if you want to change any of the option at a later point, you can do that by overriding the function at:<br />
 * <code>Ajajajava.Option.function</code> (e.g. <code>Ajajajava.Option.onLocationShown</code>)
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
 * OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

if(typeof Class == 'undefined')
    throw("Ajajajava.js requires prototype.js");

if(dhtmlHistory == 'undefined')
    throw("Ajajajava.js requires dhtmlHistory.js");

// TODO Event.observe(window, 'load', Ajajajava.initialize);
// FIXME eval js-files is out of order

/**
 * The  Ajajajava-Literal to include on every Ajajajava based project Framework.
 * @author <a href="mailto:Daniel Oltmanns %3Cdanieloltmanns@knurt.de%3E">Daniel Oltmanns</a>
 * @since 0.01 01/29/07
 * @version 1.00-SNAPSHOT
 */
var Ajajajava =
{
    /**
     * <a name="Ajajajava.initialize" class="docAnchor">Ajajajava.initialize</a>
     * <p />
     * Initializes all options and ask for the first location as it is given in the uri.<br />
     * @see <a href="#Ajajajava.Location.initialize">Ajajajava.Location.initialize</a><br />
     * @see <a href="#Ajajajava.Option">Ajajajava.Option</a><br />
     */
    initialize : function(options)
    {
        if(options != null)
        {
            if(options.onHistoryChange != null)
            {
                Ajajajava.Option.onHistoryChange = options.onHistoryChange;
            }
            if(options.onLocationShownFirstTime != null)
            {
                Ajajajava.Option.onLocationShownFirstTime = options.onLocationShownFirstTime;
            }
            if(options.beforeAjaxRequest != null)
            {
                Ajajajava.Option.beforeAjaxRequest = options.beforeAjaxRequest;
            }
            if(options.ajaxRequestJavascriptOnComplete != null)
            {
                Ajajajava.Option.ajaxRequestJavascriptOnComplete = options.ajaxRequestJavascriptOnComplete;
            }
            if(options.ajaxRequestJavascriptOnSuccess != null)
            {
                Ajajajava.Option.ajaxRequestJavascriptOnSuccess = options.ajaxRequestJavascriptOnSuccess;
            }
            if(options.ajaxRequestJavascriptOnFailure != null)
            {
                Ajajajava.Option.ajaxRequestJavascriptOnFailure = options.ajaxRequestJavascriptOnFailure;
            }
            if(options.onLocationPartShown != null)
            {
                Ajajajava.Option.onLocationPartShown = options.onLocationPartShown;
            }
            if(options.onLocationShown != null)
            {
                Ajajajava.Option.onLocationShown = options.onLocationShown;
            }
            if(options.ajaxRequestContentOnComplete != null)
            {
                Ajajajava.Option.ajaxRequestContentOnComplete = options.ajaxRequestContentOnComplete;
            }
            if(options.ajaxRequestContentOnFailure != null)
            {
                Ajajajava.Option.ajaxRequestContentOnFailure = options.ajaxRequestContentOnFailure;
            }
            if(options.ajaxRequestContentOnSuccess != null)
            {
                Ajajajava.Option.ajaxRequestContentOnSuccess = options.ajaxRequestContentOnSuccess;
            }
        }
        Ajajajava.Location.initialize();
    },
    /**
     * <a name="Ajajajava.Option" class="docAnchor">Ajajajava.Option</a>
     * <p />
     * All Option, you can set on initialize or later can be found here.
     */
    Option :
    {
        /**
         * <a name="Ajajajava.Option.onHistoryChange" class="docAnchor">Ajajajava.Option.onHistoryChange</a>
         * <p />
         * Function called, if history changes.
         */
        onHistoryChange : '',
        /**
         * <a name="Ajajajava.Option.onLocationShownFirstTime" class="docAnchor">Ajajajava.Option.onLocationShownFirstTime</a>
         * <p />
         * Function called, if the location is shown the first time (requested from server)
         */
        onLocationShownFirstTime : '',
        /**
         * <a name="Ajajajava.Option.beforeAjaxRequest" class="docAnchor">Ajajajava.Option.beforeAjaxRequest</a>
         * <p />
         * Function called before any Ajax.Request (e.g. set a function for showing your ajax loading icon).
         */
        beforeAjaxRequest : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestJavascriptOnFailure" class="docAnchor">Ajajajava.Option.ajaxRequestJavascriptOnFailure</a>
         * <p />
         * If Ajajajava tries to get a javascript from server and it fails (@see prototype.js Ajax.Request#onFailure)<br />
         * @param r the request object
         */
        ajaxRequestJavascriptOnFailure : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestJavascriptOnSuccess" class="docAnchor">Ajajajava.Option.ajaxRequestJavascriptOnSuccess</a>
         * <p />
         * If Ajajajava tries to get a javascript from server and it succeeds (@see prototype.js Ajax.Request#onSuccess)<br />
         * @param r the request object
         */
        ajaxRequestJavascriptOnSuccess : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestJavascriptOnComplete" class="docAnchor">Ajajajava.Option.ajaxRequestJavascriptOnComplete</a>
         * <p />
         * If Ajajajava tries to get a javascript from server and it is complete (@see prototype.js Ajax.Request#onComplete)<br />
         * @param r the request object
         */
        ajaxRequestJavascriptOnComplete : '',
        /**
         * <a name="Ajajajava.Option.onLocationPartShown" class="docAnchor">Ajajajava.Option.onLocationPartShown</a>
         * <p />
         * After a location part is shown, this option is called
         */
        onLocationPartShown : '',
        /**
         * <a name="Ajajajava.Option.onLocationShown" class="docAnchor">Ajajajava.Option.onLocationShown</a>
         * <p />
         * After a location is shown, this option is called. It retrieves this params:<br />
         * @param locationPartName name of the location part as defined on server<br />
         * @param content the content of the location part as given back from server
         */
        onLocationShown : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestContentOnComplete" class="docAnchor">Ajajajava.Option.ajaxRequestContentOnComplete</a>
         * <p />
         * If Ajajajava tries to get a location part from server and it is complete (@see prototype.js Ajax.Request#onFailure)<br />
         * @param r the request object
         */
        ajaxRequestContentOnComplete : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestContentOnFailure" class="docAnchor">Ajajajava.Option.ajaxRequestContentOnFailure</a>
         * <p />
         * If Ajajajava tries to get a location part from server and it fails (@see prototype.js Ajax.Request#onFailure)<br />
         * @param r the request object
         */
        ajaxRequestContentOnFailure : '',
        /**
         * <a name="Ajajajava.Option.ajaxRequestContentOnSuccess" class="docAnchor">Ajajajava.Option.ajaxRequestContentOnSuccess</a>
         * <p />
         * If Ajajajava tries to get a location part from server and it succeeds (@see prototype.js Ajax.Request#onFailure)<br />
         * @param r the request object
         */
        ajaxRequestContentOnSuccess : ''
    },
        /**
	 * <a name="Ajajajava.Location" class="docAnchor">Ajajajava.Location</a>
	 * <p />
	 * Functions to showing, changing and storeing locations and location parts and
	 * evaling javascripts.
	 */
    Location :
    {
        /**
         * <a name="Ajajajava.Location.showPart" class="docAnchor">Ajajajava.Location.showPart</a>
         * <p />
         * Shows <code>content</code> in the element with <code>locationPartName</code> as
         * the value of the id-attribute.<br />
         * @param locationPartName: name of the location part, content is shown in<br />
         * @param content: the content, that is shown.
         */
        showPart : function(locationPartName, content)
        {
            if(content != "" && content != "undefined" && content != null)
            {
                $(locationPartName).innerHTML = content;
                if(Ajajajava.Option.onLocationPartShown != '')
                {
                    Ajajajava.Option.onLocationPartShown(locationPartName, content);
                }
            }
        },
        /**
         * <a name="Ajajajava.Location.jsLocation" class="docAnchor">Ajajajava.Location.jsLocation</a>
         * <p />
         * If the location is changed, the eventualy given javascript must be called after
         * every elements are there (otherwise it could call to elements not defined so far).
         * If now the javascript part is configured before other parts, this is the temporary storage for it.<br />
         * @see <a href="#Ajajajava.Location.showLocationParts">Ajajajava.Location.showLocationParts</a>
         */
        jsLocation : "",
        /**
         * <a name="Ajajajava.Location.jsStore" class="docAnchor">Ajajajava.Location.jsStore</a>
         * <p />
         * Used to store javascript from server. the serverside javascript must be executed after all locations parts are set.
         */
        jsStore : "",
        /**
         * <a name="Ajajajava.Location.actualParts" class="docAnchor">Ajajajava.Location.actualParts</a>
         * <p />
         * Parts of the actual  location are saved here.
         */
        actualParts : '',
        /**
         * <a name="Ajajajava.Location.change" class="docAnchor">Ajajajava.Location.change</a>
         * <p />
         * Changes the content of the webpage to the location given.<br />
         * @param newLocation: the location, that shall be shown
         */
        change : function(newLocation)
        {
            if(newLocation != Ajajajava.Location.actualLocation &&	// new is NOT the actual location already AND
                Ajajajava.Location.isConfiguratedLocation(newLocation))	// new location is a configured valid location (not uri manipulated)
                {
                // add new location to history - calls Ajajajava.History.historyChange
                dhtmlHistory.add("h" + newLocation, "");

                // store content of actual location, if it does NOT exist already
                if(Ajajajava.Location.actualLocation != "" && ! historyStorage.hasKey(Ajajajava.Location.actualLocation)) // does NOT exist
                {
                    // storage contents of the actual locationParts
                    var actualLocationPartsContent = new Object();
                    for(var i=0; i<Ajajajava.Location.actualParts.length; i++)
                    {
                        if(Ajajajava.Location.actualParts[i] == "javascript")
                        {
                            actualLocationPartsContent[Ajajajava.Location.actualParts[i]] = Ajajajava.Location.jsStore;
                        }
                        else // its html content
                        {
                            actualLocationPartsContent[Ajajajava.Location.actualParts[i]] = $(Ajajajava.Location.actualParts[i]).innerHTML;
                        }
                    }
                    historyStorage.put(Ajajajava.Location.actualLocation, actualLocationPartsContent);
                }

                // show content of new location from storage
                if(historyStorage.hasKey(newLocation)) // content of new location does already exist
                {
                    // show existing content
                    tmpContent = historyStorage.get(newLocation);
                    for(var locationPart in tmpContent)
                    {
                        if(locationPart == "javascript")
                        {
                            eval(tmpContent[locationPart]);
                        }
                        else
                        {
                            Ajajajava.Location.showPart(locationPart, tmpContent[locationPart]);
                        }
                    }
                }
                else // show content of new location the first time (get it from server)
                {
                    if(Ajajajava.Option.beforeAjaxRequest != '')
                    {
                        Ajajajava.Option.beforeAjaxRequest();
                    }
                    Ajajajava.Location.actualParts = eval("Ajajajava.Location.configuratedLocations." + newLocation + ".parts");
                    Ajajajava.Location.showLocationParts(newLocation, $A(Ajajajava.Location.actualParts));
                }

                // set new location as actual location
                Ajajajava.Location.actualLocation = newLocation;
            }
        },
        /**
         * <a name="Ajajajava.Location.getFromUri" class="docAnchor">Ajajajava.Location.getFromUri</a>
         * <p />
         * returns the name of the actual location as it is shown in the uri<br />
         * @return string name of the actual location
         */
        getFromUri : function()
        {
            var result = Ajajajava.Location.configuratedLocations.defaultLocation;
            if(window.location.hash != "")
            {
                result = window.location.hash.replace("#h", "");
            }
            return result;
        },
        /**
         * <a name="Ajajajava.Location.initialize" class="docAnchor">Ajajajava.Location.initialize</a>
         * <p />
         * Initialize all location and location parts and its configurations. Request the config-JSON
         * from server and set the configuration clientside. The location is shown as given in the uri.
         */
        initialize : function()
        {
            new Ajax.Request
            (
                './GetLocations_JSON',
                {
                    onSuccess : function(r)
                    {
                        Ajajajava.Location.configuratedLocations = eval("("+r.responseText+")");
                        // init really simple history framework
                        dhtmlHistory.initialize();
                        dhtmlHistory.addListener(Ajajajava.History.historyChange);

                        // set actual page
                        Ajajajava.Location.change(Ajajajava.Location.getFromUri());

                        if(Ajajajava.Option.onLocationShownFirstTime != '')
                        {
                            Ajajajava.Option.onLocationShownFirstTime();
                        }
                    },
                    onFailure : function(r)
                    {
                        throw("Ajajajava: No connection to ./GetLocations_JSON<hr />" + r.responseText);
                    }
                }
                );
        },
        /**
         * <a name="Ajajajava.Location.configuratedLocations" class="docAnchor">Ajajajava.Location.configuratedLocations</a>
         * <p />
         * This is a storage for all locations that are configured
         */
        configuratedLocations : "",
        /**
         * <a name="Ajajajava.Location." class="docAnchor">Ajajajava.Location.</a>
         * <p />
         * This store the name of the actual location
         */
        actualLocation : "",
        /**
         * <a name="Ajajajava.Location.isConfiguratedLocation" class="docAnchor">Ajajajava.Location.isConfiguratedLocation</a>
         * <p />
         * returns true, if the given location is one of the configured - otherwise false.<br />
         * @param location: the name of the location, that shall be checked<br />
         * @return true, if the given name of the location is a configured location, otherwise false
         */
        isConfiguratedLocation : function(location)
        {
            var x = 0;
            var result = false;
            while (x < Ajajajava.Location.configuratedLocations.locations.length)
            {
                if(Ajajajava.Location.configuratedLocations.locations[x] == location)
                {
                    result = true;
                    break;
                }
                x = x + 1;
            }
            return result;
        },
        /**
         * <a name="Ajajajava.Location.showLocationParts" class="docAnchor">Ajajajava.Location.showLocationParts</a>
         * <p />
         * This function shows all given parts (locationParts).<br />
         * If the location part is a javascript, it evals the javascript after adding all location parts.<br />
         * @param string newLocation: name of the location, the parts shall be shown in<br />
         * @param array locationParts: names of the location parts, that shall be shown<br />
         */
        showLocationParts : function(newLocation, locationParts)
        {
            if (locationParts.length > 0)
            {
                newLocationPart = locationParts.pop();
                // TODO validiere newLocationPart!
                var params = "hashID=" + newLocation + "&locationPart=" + newLocationPart + "&" + Form.serialize(document);
                if(newLocationPart != "javascript")
                {
                    new Ajax.Request
                    (
                        './ChangeLocation',
                        {
                            parameters : params,
                            onSuccess : function(r)
                            {
                                Ajajajava.Location.showPart(newLocationPart, r.responseText);
                                Ajajajava.Location.showLocationParts(newLocation, locationParts);
                                if(Ajajajava.Option.ajaxRequestContentOnSuccess != '')
                                {
                                    Ajajajava.Option.ajaxRequestContentOnSuccess(r);
                                }
                            },
                            onFailure : function(r)
                            {
                                if(Ajajajava.Option.ajaxRequestContentOnFailure != '')
                                {
                                    Ajajajava.Option.ajaxRequestContentOnFailure(r);
                                }
                            },
                            onComplete : function(r)
                            {
                                if(Ajajajava.Option.ajaxRequestContentOnComplete != '')
                                {
                                    Ajajajava.Option.ajaxRequestContentOnComplete(r);
                                }
                            }
                        }
                        );
                }
                else
                {
                    Ajajajava.Location.jsLocation = newLocation;
                    Ajajajava.Location.showLocationParts(newLocation, locationParts);
                }
            }
            else if(Ajajajava.Location.jsLocation != "")
            {
                params = "hashID=" + Ajajajava.Location.jsLocation + "&locationPart=javascript" + "&" + Form.serialize(document);
                new Ajax.Request
                (
                    './ChangeLocation',
                    {
                        parameters : params,
                        evalScripts: true,
                        onSuccess : function(r)
                        {
                            Ajajajava.Location.jsStore = r.responseText;
                            Ajajajava.Location.jsLocation = "";
                            if(Ajajajava.Option.ajaxRequestJavascriptOnSuccess != '')
                            {
                                Ajajajava.Option.ajaxRequestJavascriptOnSuccess(r);
                            }
                        },
                        onFailure : function(r)
                        {
                            if(Ajajajava.Option.ajaxRequestJavascriptOnFailure != '')
                            {
                                Ajajajava.Option.ajaxRequestJavascriptOnFailure(r);
                            }
                        },
                        onComplete : function(r)
                        {
                            if(Ajajajava.Option.ajaxRequestJavascriptOnComplete != '')
                            {
                                Ajajajava.Option.ajaxRequestJavascriptOnComplete(r);
                            }
                        }
                    }
                    );
                if(Ajajajava.Option.onLocationShown != '')
                {
                    Ajajajava.Option.onLocationShown();
                }
            }
            else // all location parts are shown
            {
                if(Ajajajava.Option.onLocationShown != '')
                {
                    Ajajajava.Option.onLocationShown();
                }
            }
        }
    },
    /**
     * <a name="Ajajajava.History" class="docAnchor">Ajajajava.History</a>
     * <p />
     * A Literal Object for the History behaviour.
     */
    History :
    {
        /**
         * <a name="Ajajajava.History.historyChange" class="docAnchor">Ajajajava.History.historyChange</a>
         * <p />
         * This function is called every time, the user presses the history button of the browser or chooses an entry at the history list.<br />
         * The function restores the location.<br />
         * @see RSH#dhtmlHistory<br />
         * @param string newLocation: name of the location being restored<br />
         * @param historyData: formal param here. Empty string in any case - not used in this framework.
         */
        historyChange : function(newLocation, historyData)
        {
            var cleanLocation = newLocation.substr(1);
            Ajajajava.Location.change(cleanLocation);
            if(Ajajajava.Option.onHistoryChange != '')
            {
                Ajajajava.Option.onHistoryChange(newLocation);
            }
        }
    }
};