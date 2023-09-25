document.addEventListener("DOMContentLoaded", function () {
    const airConditioners = [
        { id: 1, brand: "CoolAir", model: "X1000", price: "$500" },
        { id: 2, brand: "Breeze", model: "A2", price: "$450" },
        { id: 3, brand: "Windflow", model: "Zeta", price: "$600" },
    ];

    const productList = document.getElementById("product-list");

    airConditioners.forEach((ac) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${ac.brand} ${ac.model}</h2><p>Price: ${ac.price}</p>`;
        productList.appendChild(listItem);
    });
});
