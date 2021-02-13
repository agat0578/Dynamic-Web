//create navigation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterArray = letters.split("");
console.log(letterArray);
letterArray.forEach(handleLetter);

function handleLetter(letter){
    //create nav link
    createNavLink(letter)

    //create section
    createBrandSection(letter);
}

function createBrandSection(letter) {
    const template = document.querySelector("#sectionTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h2").textContent = letter;
    clone.querySelector("section").id = `letter${letter}`;

    document.querySelector(".brandList").appendChild(clone);
}

function createNavLink(letter) {
    const temp = document.querySelector("#linkTemplate").content;
    const copy = temp.cloneNode(true);
        copy.querySelector("a").textContent = letter;
        copy.querySelector("a").href = `#letter${letter}`;

    document.querySelector(".alphabet ol").appendChild(copy);
}

//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
    .then((res) => res.json())
    .then(gotData);

//loop through
function gotData(data) {
    data.forEach(showBrand);
}

function showBrand(brand) {
    const template = document.querySelector("#linkTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("a").textContent = brand.brandname;
    copy.querySelector("a").href = `productlist.html?brandname=${brand.brandname}`;
 
    const firstLetter = brand.brandname[0];
    

    const topParent = document.querySelector(`#letter${firstLetter}`);
    const elemParent = topParent.querySelector("ol");
    elemParent.appendChild(copy);
}