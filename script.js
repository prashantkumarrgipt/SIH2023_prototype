document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Getting input 
    const inputText = document.getElementById("symptoms_or_disease_input").value;

    
    if (inputText === "Diabetes") {
        
        const outputDiv = document.createElement("div");
        outputDiv.classList.add("output");

        const heading = document.createElement("h2");
        heading.textContent = "You are suffering with disease " + inputText;
        outputDiv.appendChild(heading);

        const table = document.createElement("table");
        
        const tableHeaderRow = document.createElement("tr");
        table.appendChild(tableHeaderRow);
        
        const drugsHeaderCell = document.createElement("th");
        drugsHeaderCell.textContent = "Drugs";
        tableHeaderRow.appendChild(drugsHeaderCell);

        const formulationHeaderCell = document.createElement("th");
        formulationHeaderCell.textContent = "formulation";
        tableHeaderRow.appendChild(formulationHeaderCell);

        const avoidHeaderCell = document.createElement("th");
        avoidHeaderCell.textContent = "Avoid";
        tableHeaderRow.appendChild(avoidHeaderCell);

        const dataRow = document.createElement("tr");
        table.appendChild(dataRow);

        const drugsCell = document.createElement("td");
        drugsCell.textContent = "Vijaysar (Pterocarpus marsupium) , Triphala";
        dataRow.appendChild(drugsCell);

        const formulationCell = document.createElement("td");
        formulationCell.textContent = "Mehari churna is a commonly used antidiabetic polyherbal";
        dataRow.appendChild(formulationCell);

        const avoidCell = document.createElement("td");
        avoidCell.textContent = "dairy products, Payas (rice cooked with milk), sugarcane products, fresh grains, products of jaggery, white salt";
        dataRow.appendChild(avoidCell);

        table.style.border = "1px solid #000";
        table.style.marginTop = "10px";

        outputDiv.appendChild(table);

        const form = document.querySelector("form");
        form.appendChild(outputDiv);
    } else {
        alert("Invalid input. Please enter 'hello1234' for results.");
    }
});
