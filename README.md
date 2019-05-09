# Ionic 4 scroll restore bug demo app

This demo project demonstrates a problem with Ionic 4 scrolling restore

## Restore scroll position works here

1.  Start app
2.  Go to [localhost:8000/list](localhost:8000/list)
3.  Scroll to the bottom of the list
4.  Click on Item 10
5.  On the detail page click on button "back"
6.  Scroll restore works: You are at the same scroll position in the list view

## Restore scroll position does NOT work here

1.  Start app
2.  Go to [localhost:8000/list](localhost:8000/list)
3.  Enter something in the filter input field and click button "Filter list now"
4.  Filtering is done by changing the route without reloading the component. This is done by defining RouteReuseRules in app.module.ts
5.  Scroll down and click on item 10
6.  On the detail page click on button "back"
7.  You land at the top of the list page. Scroll position has not been restoren

## Why I want to change URL/Route when filtering

I want the user to be able to copy the URL of the current filter and share it

## Why I want to reuse component

I do not like the flickering when component is reloaded. And in my real app, I have filter parameters in the URL which need a server request to get more infos about them. So I would have to do a server request for data I already have.

## Why don`t you use location.go

I tried to do the location change with location.go() function. Result is the same. And I do not like the idea of working against the route logic of my app

## Posted this app on
[https://forum.ionicframework.com/t/restore-scroll-position-in-ionic-4-does-not-work-if-i-changed-the-route-with-route-reuse-before/163529](Ionic forum)
[https://stackoverflow.com/questions/56065448/restore-scroll-position-in-ionic-4-does-not-work-if-i-changed-the-route-with-rou](Stackoverflow)