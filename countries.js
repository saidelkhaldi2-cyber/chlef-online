document.addEventListener("DOMContentLoaded", () => {

    const countries = [
        "Netherlands","France","Romania","Ireland","Ukraine","Kazakhstan",
        "Sweden","Poland","Britain","USA","Finland","Spain","Belgium",
        "Norway","Austria","Germany","Estonia","Philippines","Israel",
        "Portugal","Australia","Denmark","Latvia","Lithuania","Italy",
        "Morocco","Salvador","Uganda","Czech","Ghana","Moldova","Mali",
        "Colombia","Bulgaria","Indonesia","Ivory Coast","Uzbekistan",
        "Croatia","Greece","Malaysia","Hong Kong","Thailand","Slovakia",
        "Cambodia","Cyprus","Slovenia","Hungary","Georgia","Argentina",
        "Luxembourg","Bosnia","Switzerland","Nigeria","India","Canada",
        "Vietnam","Serbia","Kyrgyzstan","Brazil","Kenya","Mexico","Turkey",
        "Egypt","Yemen","Sierra Leone","Haiti","Taiwan","Tunisia","Iraq",
        "Honduras","Chad","Burkina Faso","Pakistan","Gambia","Tajikistan",
        "Iran","Azerbaijan","Afghanistan","Bolivia","Liberia","Mongolia",
        "Nepal","Guinea","Singapore","Belarus","Cameroon","Ecuador",
        "Saudi Arabia","North Macedonia","Peru","Nicaragua","Sudan",
        "Zambia","Malawi","Guinea Bissau","Mauritania","Senegal","China",
        "Laos","Myanmar","Chile","New Zealand","Panama","Gabon","Ethiopia",
        "Congo","Burundi","Benin","South Africa","Angola","Lebanon",
        "Mozambique","Syria","Japan","Sri Lanka","Bhutan","Bangladesh"
    ];

    countries.sort();

    const tableBody = document.getElementById("countries-table-body");

    countries.forEach((country, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = 
            <td>${index + 1}</td>
            <td>${country}</td>
            <td>
                <span style="color:#28a745;font-weight:bold;">Available</span>
            </td>
        ;

        tableBody.appendChild(tr);
    });

});
