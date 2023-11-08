// import source from "./data.json" assert { type: "json" };

const table1 = document.getElementById("table1")
const rows = document.querySelector("#table1 tbody")

const countries = Array.from(rows.children).map(row => row.children[1].innerText).slice(1)
const years = Array.from(rows.children[0].innerText.split("\t")).slice(2)
const crimes = Array.from(rows.children).slice(1).map(child => Array.from(child.children).map(c => c.innerText).slice(2))


const series = countries.map((country, countryIndex) => ({
    name: country,
    data: years.map((_, yearIndex) => {
        const value = crimes[countryIndex][yearIndex].replace(":",null)

        const parsed = parseInt(value, 10)
        if (isNaN(parsed)) {
            return null
        }
        return parsed
    })
}))

const linegraphData = {
    categories: years,
    series
}

 
// CONFIGURATION du graphique :
const options = {
    chart: { width: 900, height: 2800 },
    stack: true,
    series: {
        eventDetectType: 'grouped',
        responsive: true
    }
};

// Creation de l'élément HTML pour insérer le graphique 1
const el =  document.createElement("div");
el.setAttribute("id", "chart1")

// IMPORT de la bibliothèque :
toastui.Chart.lineChart({el, data: linegraphData, options});

// Cible pour insérer le graphique au dessus des tables
const tablesParent = document.getElementById("mw-content-text")
tablesParent.insertBefore(el, table1);  





////// graph 2 :


const table2 = document.getElementById("table2")
const rowsP = document.querySelector("#table2 thead")

const crimeData = document.querySelector("#table2 tbody")

const countries2 = Array.from(crimeData.children).map(row => row.children[1].innerText).slice(1)
const years2 = Array.from(rowsP.children[0].innerText.split("\t")).slice(2)
const crimes2 = Array.from(crimeData.children).slice(1).map(child => Array.from(child.children).map(d => d.innerText).slice(2))


const series2 = countries2.map((country, countryIndex) => ({
    name: country,
    data: years2.map((_, yearIndex) => {
        const value2 = crimes2[countryIndex][yearIndex].replace(":",null)

        const parsed = parseInt(value2, 10)
        if (isNaN(parsed)) {
            return null
        }
        return parsed
    })
}))

const linegraphData2 = {
    categories: years2,
    series:series2
}
console.log(linegraphData);
console.log(linegraphData2);
 
// CONFIGURATION du graphique :
const options2 = {
    chart: { width: 600, height: 800 },
    series: {
        eventDetectType: 'grouped',
        responsive: true
    }
};

// Creation de l'élément HTML pour insérer le graphique 1
const el2 =  document.createElement("div");
el2.setAttribute("id", "chart")

// IMPORT de la bibliothèque :
toastui.Chart.lineChart({el:el2, data: linegraphData2, options:options2});

// Cible pour insérer le graphique au dessus des tables
// const tablesParent2 = document.getElementById("mw-content-text") (plus besoin car déjà déclaré pour graph 1, mêmes parents)
tablesParent.insertBefore(el2, table2);  
