const table1 = document.getElementById("table1")
const rows = document.querySelector("#table1 tbody")

const countries = Array.from(rows.children).map(row => row.children[1].innerText).slice(1)
const years = Array.from(rows.children[0].innerText.split("\t")).slice(2)
const crimes = Array.from(rows.children).slice(1).map(child => Array.from(child.children).map(c => c.innerText).slice(2))


const series = years.map((year, yearIndex) => ({
    name: year,
    data: countries.map((_, countryIndex) => {
        const value = crimes[countryIndex][yearIndex]
        return value.replace(",", ".").replace(":","")
    })
}))

const data = {
    categories: countries,
    series
}
 
const options = {
    chart: { width: 900, height: 4000 },
    stack: true,
    series: {
        eventDetectType: 'grouped',
        responsive: true
    }
};


/// INSERER LE Graphique

// Creation de l'élément HTML pour insérer le graphique 1
const el =  document.createElement("div");
el.setAttribute("id", "chart1")

toastui.Chart.barChart({el, data, options});

// Cible pour insérer le graphique au dessus des tables
const tablesParent = document.getElementById("mw-content-text")
tablesParent.insertBefore(el, table1);  
