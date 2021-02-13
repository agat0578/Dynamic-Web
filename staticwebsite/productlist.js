const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname)

document.querySelector("h1").textContent = brandname;
document.querySelector("ul>li.brandname").textContent = brandname;

const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleProductList(data);
    })

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    //grab the template
    const template = document.querySelector("#product").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector(".opis").textContent = product.productdisplayname;
    copy.querySelector(".cena").textContent = `${product.price} DKK`;
    copy.querySelector(".productimage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    copy.querySelector(".productimage").alt = product.productdisplayname; 
    copy.querySelector(".marka").textContent = product.brandname;

    copy.querySelector("a").href = `product.html?id=${product.id}`;

    if(product.soldout) {
        copy.querySelector("article").classList.add("soldOut")
    }

    if(product.discount) {
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".cena").classList.add("onSale");
        copy.querySelector(".nowacena").textContent = Math.round(product.price / 100 * product.discount * 100) / 100 + ' DKK';
        copy.querySelector(".discount").textContent = '-' + product.discount + '%'
    }

    if(!product.discount) {
        copy.querySelector(".discount").remove()
    }

    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
}