let products = {
    data: [{
        productName: "double breasted suit",
        category: "Jacket",
        price: "400",
        image: "db_breasted.jpg",
    },
    {
        productName: "double breasted suit brown",
        category: "Jacket",
        price: "400",
        image: "db_suitbrown.png",
    },
    {
        productName: "double breasted_vest",
        category: "Vest",
        price: "200",
        image: "db_vest.png",
    },
    {
        productName: "single breasted suit",
        category: "Jacket",
        price: "350",
        image: "s_suit.png",
    },
    {
        productName: "three piece suit",
        category: "Jacket",
        price: "500",
        image: "tri_suit.png",
    },
    {
        productName: "single breasted suit (3 button)",
        category: "Jacket",
        price: "400",
        image: "trib_suit.png",
    },
    {
        productName: "trouser",
        category: "Trouser",
        price: "250",
        image: "trouser.png",
    },
    {
        productName: "single breasted vest",
        category: "Vest",
        price: "230",
        image: "vest.png",
    },
    ],
};

for(let item of products.data){
    let card = document.createElement("div");
    card.classList.add("card", "item.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.getElementById("products").appendChild(card);
}