document.addEventListener("DOMContentLoaded", function () {

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
        "Egypt","Yemen","Haiti","Taiwan","Tunisia","Iraq","Chad","Pakistan",
        "Iran","Japan","Saudi Arabia","South Africa"
    ];

    countries.sort();

    const tbody = document.getElementById("countries-table-body");

    countries.forEach((country, i) => {
        const row = document.createElement("tr");
        row.innerHTML = 
            <td>${i + 1}</td>
            <td>${country}</td>
            <td style="color:green;font-weight:bold;">Available</td>
        ;
        tbody.appendChild(row);
    });

});
