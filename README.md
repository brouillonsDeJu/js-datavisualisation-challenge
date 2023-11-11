# Javascript Challenge : "Data Visualisation"
## Lien vers l'URL:
https://julie1030.github.io/js-datavisualisation-challenge/
- form: [JS Data Visualization Submission Form](/)
  
Challenge de consolidation effectué en solo lors de ma formation chez beCode en novembre 2023. 
Il s'agit d'un exercice qui simule une situation de la vie réelle et dont les objectifs d'entrainement sont les suivants:
- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

## La "mission" de l'exercice:

"You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an **html** / **css** / **Javascript file**.

He asks you to make it more _rich_, more _interactive_, more... _sexy_ (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two **interactive data visualisation graphics** using javascript. These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project."

1. Inline data (data in the document)
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

2. Remote data, in real-time, via ajax
There are data sitting at this URL : https://canvasjs.com/services/data/datapoints.php

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (h1) of the article.

Don't hesitate to adapt the code provided in this tutorial: Live Updating Charts from JSON API & AJAX, but adapt it to this third-party library: chart.js or ToastUi-Chart, because this tutorial uses another (not-free) library (canvasJS).

Again: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.

