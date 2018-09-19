Oslo Trail web-app
===============================

## Table of Contents

* [Demo](#demo)
* [Instructions for the users](#instructions-for-the-users)
* [Loading the app](#loading-the-app)
* [Technical Instructions for Developers](#technical-instructions-for-developers)
* [Credits](#credits)

## Demo

Check the [online version](https://oslo-trail.netlify.com/).

## Instructions for the users

Oslo Trail Web-App

The goal of this web-app is to present the best trail running routes around Oslo. And offer additional features to the users.   
Filters to help choose the route they are looking for (distance, climb, loop/one-way).   
Decide which markers to display, showing the user the exact spotsto refill water, go to WC, or the most scenic viewpoints.   
Select each route individually clicking on its name. And undo that by clicking "show all route" button.   
Search for a route by entering location name in the search field, location being either start/finish or location crossed during the run. 

The web-app is a Single Page App. It's a progressive offline first web-app which means once you've been loading the content by navigating through the web-app all the datas loaded in the cache will still be available if you get offline. It actually ONLY load content if it is new content never previously loaded before. Perfect for your run, if you get off the signal but still want to know where you can find some  :potable_water: or  :toilet:.

## Loading the app

This app can be loaded by starting the server
+ Open a terminal in the root folder
+ type 'npm install' and then 'npm start'
+ go to 'localhost:3000' in your browser

You will need an internet connection, at least at first, to be able to get the google maps tiles and foursquare photos

## Technical Instructions for Developers

The master branch is production ready, but the features are still kept fairly simple, and more content is added continuously..
Next features to be added include:
- [x] Search route by location function
- [ ] Search function display what is the nature of the matched location in the route (start / finish / spot crossed)
- [ ]  :camera: of each spot marked by  :round_pushpin:
- [ ] More routes (added as soon some more amazing route will be tested several times and validated)
- [ ] Participative way to suggest new routes
- [ ] Hovering a route should display a few basics infos in a tooltip (distance, climb)
- [ ] Clicking on a route on the map should open a "route" page describing with more details the route. And adding some extras infos such as the weather forecast, transport infos (nearest Oslo Bysikkel, bus/tram/train to get there with eventually a Google itinerary function)
- [ ] Add a "print" function to the "route description" pages
- [ ] Import Norge map ut.no map layer in the map layer possibilities




## Credits

This web-app was entirely coded by Raphaël Ferrand.  
Thanks to Openstreetmaps, Leaflet, React-Leaflet, the many noun-project icons.
To see all credits check out the credits section in the About page of the web-app.
