const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")
      paymentButton = document.querySelector(".Payment");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})
total.addEventListener("click", () => {
    // Extract quantity and total price
    const quantityValue = parseInt(quantity.innerText);
    const totalPriceValue = parseInt(total.innerText.replace(",", ""));

    // Navigate to checkout.html with parameters
    window.location.href = `checkout.html?quantity=${quantityValue}&totalPrice=${totalPriceValue}`;
});

let products = [
    {
        "id": 1,
        "name": "Black Coffee",
        "image":"1.png",
        "price": 120
    },
    {
        "id": 2,
        "name": "Americano",
        "image":"2.png",
        "price": 120
    },
    {
        "id": 3,
        "name": "Coffee Latte",
        "image":"3.png",
        "price": 120
    },
    {
        "id": 4,
        "name": "Mocha Frappe",
        "image":"4.png",
        "price": 100
    },
    {
        "id": 5,
        "name": "Chocolate Cappucino",
        "image":"5.png",
        "price": 110
    },
    {
        "id": 6,
        "name": "Vanilla Cream",
        "image":"6.png",
        "price": 100
    },
    {
        "id": 7,
        "name": "Red Velvet",
        "image":"7.png",
        "price": 110
    },
    {
        "id": 8,
        "name": "Java Chip",
        "image":"8.png",
        "price": 130
    },
    {
        "id": 9,
        "name": "Matcha",
        "image":"9.png",
        "price": 130
    },
    {
        "id": 10,
        "name": "Cappucino",
        "image":"10.png",
        "price": 120
    },
    {
        "id": 11,
        "name": "Brioche Waffles with Butter",
        "image":"11.png",
        "price": 150
    },
    {
        "id": 12,
        "name": "Yeasty Overnight Waffle",
        "image":"12.png",
        "price": 150
    },
    {
        "id": 13,
        "name": "Cherry Pie",
        "image":"13.png",
        "price": 220
    },
    {
        "id": 14,
        "name": "Brushetta",
        "image":"14.png",
        "price": 170
    },
    {
        "id": 15,
        "name": "Berry and Creamy White Cholocate and Yogurt Mille Feuille",
        "image":"15.png",
        "price": 160
    },
    {
        "id": 16,
        "name": "Matcha Sponge Cake",
        "image":"16.png",
        "price": 140
    },
    {
        "id": 17,
        "name": "Chocolate Panna Cotta",
        "image":"17.png",
        "price": 140
    },
    {
        "id": 18,
        "name": "Caramel Pudding",
        "image":"18.png",
        "price": 120
    },
    {
        "id": 19,
        "name": "Chocolate Raspberry Cake",
        "image":"19.png",
        "price": 120
    },
    {
        "id": 20,
        "name": "Vanilla Cupcake",
        "image":"20.png",
        "price": 120
    },
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        // console.log(listCards);
        listCards[key].quantity = 1;
        // console.log(listCards[key].quantity);
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#cf3b1d;" class = "cardButton" onclick = "changeQuantity(${key}, ${ value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#cf3b1d;" class = "cardButton" onclick = "changeQuantity(${key}, ${ value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard();
    
}
