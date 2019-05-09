# Ionic 4 scroll restore bug demo app

This demo project demonstrates a problem with Ionic 4 scrolling restore

## Restore scroll position works here

1.  Go to [/list](/list)
2.  Scroll to the bottom of the list
3.  Click on Item 10
4.  On the detail page click on button "back"
5.  Scroll restore works: You are at the same scroll position in the list view

## Restore scroll position does NOT work here

1.  Go to [/list](/list)
2.  Enter something in the filter input field and click button "Filter list now"
3.  Filtering is done by changing the route without reloading the component. This is done by defining RouteReuseRules in app.module.ts
4.  Scroll down and click on item 10
5.  On the detail page click on button "back"
6.  You land at the top of the list page. Scroll position has not been restoren

## Why I want to change URL/Route when filtering

I want the user to be able to copy the URL of the current filter and share it

## Why I want to reuse component

I do not like the flickering when component is reloaded. And in my real app, I have filter parameters in the URL which need a server request to get more infos about them. So I would have to do a server request for data I already have.

## Why don`t you use location.go

I tried to do the location change with location.go() function. Result is the same. And I do not like the idea of working against the route logic of my app