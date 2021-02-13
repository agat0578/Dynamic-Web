const urlParams = new URLSearchParams(window.location.search);
const id =  urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;


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
    document.querySelector(".cena").textContent=product.price + ' DKK';
    document.querySelector("#title2").textContent=product.productdisplayname;
    document.querySelector("#color").textContent=product.basecolour;
    document.querySelector("#number").textContent=product.id;
    document.querySelector("details .details").innerHTML=product.description;
    document.querySelector(".brand a").href=`productlist.html?brandname=${product.brandname}`;


if(product.soldout) {
    document.querySelector(".image").classList.add("soldOut")
}


if(product.discount) {
    document.querySelector(".image").classList.add("onSale");
    document.querySelector(".cena").classList.add("onSale");
    document.querySelector(".nowacena").textContent = Math.round(product.price / 100 * product.discount * 100) / 100 + ' DKK';
    document.querySelector(".discount").textContent = '-' + product.discount + '%';
}

if(!product.discount) {
    document.querySelector(".discount").remove();
}
}