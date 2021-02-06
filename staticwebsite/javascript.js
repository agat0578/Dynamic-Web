const url = "https://kea-alt-del.dk/t7/api/products/2801"
//fetch the data
fetch(url)
    .then(res => res.json())
    .then(data => showProdut(data));
//populate the page

function showProdut(product) {
    console.log(product);
    document.querySelector(".breadcrumbs .brand a").textContent=product.brandname;
    document.querySelector(".breadcrumbs .productname a").textContent=product.productdisplayname;
    document.querySelector("img.productImage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
    document.querySelector("img.productImage").alt=product.productdisplayname
    document.querySelector("#brandname").textContent=product.brandname;
    document.querySelector("#title").textContent=product.productdisplayname;
    document.querySelector("#price span").textContent=product.price;
    document.querySelector("#title2").textContent=product.productdisplayname;
    document.querySelector("#color").textContent=product.basecolour;
    document.querySelector("#number").textContent=product.id;
    document.querySelector(".details").innerHTML=product.description;
}


let arrow = document.getElementById("arrow");

arrow.addEventListener("click", arrowchange);

function arrowchange() {
    if (arrow.classList.contains('arrowdown')) {
    document.querySelector("#arrow").classList.remove("arrowdown");
    document.querySelector("#arrow").classList.add("arrowup");
}
    else {
    document.querySelector("#arrow").classList.remove("arrowup");
    document.querySelector("#arrow").classList.add("arrowdown");
    }
}

let details = document.querySelector('.details');
arrow.addEventListener('click', slide, false);

function slide(){
    if (details.classList.contains('opened')) {
        details.classList.remove('opened');
        details.classList.add('closed');
    } else {
        details.classList.remove('closed');
        details.classList.add('opened');
    }
}