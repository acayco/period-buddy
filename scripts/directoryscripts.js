const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

/*product directory*/

const data = [
  {
   name: "Always Thin Daily Liners",
   type:"pantyLiner",
   price:"low",
   flow:"lightFlow",
   use:"external",
   material:"nonOrganic",
   reusability:"singleUse",
   difficulty:"easy",
   mobility:"null",
   img:"images/pantyliners-always.png",
   url:"pantyliners_always.html"
 },
 {
    name:"Rael Organic Cotton Panty Liners",
    type:"pantyLiner",
    price:"moderate",
    flow:"lightFlow",
    use:"external",
    reusability:"singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pantyliners-rael.html",
    img: "images/pantyliners-rael.png",
  },
  {
    name: "Rael Organic Cotton Reusable Panty Liners",
    type:"pantyLiner",
    price:"high",
    use:"external",
    flow:"lightFlow",
    reusability:"reusable",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pantyliners-reusable-rael.html",
    img: "images/pantyliners-reusable-rael.png",
  },
  {
   name: "Always Ultra Thin Pads",
   type:"maxiPad",
   price:"low",
   use:"external",
   flow:"moderateFlow",
   reusability: "singleUse",
   material:"nonOrganic",
   difficulty:"easy",
   mobility:"null",
   url: "pads-regular-always.html",
   img: "images/pads-regular-always.png", 
  },
  {
    name: "Rael Organic Cotton Pads (Regular)",
    type:"maxiPad",
    price:"moderate",
    use:"external",
    flow:"moderateFlow",
    reusability:"singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-regular-rael.html",
    img: "images/pads-regular-rael.png"
  },
  {
    name: "Rael Organic Cotton Reusable Pads (Regular)",
    type:"maxiPad",
    price:"high",
    use:"external",
    flow:"moderateFlow",
    reusability: "reusable",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-regular-reusable-rael.html",
    img: "images/pads-reusable-rael.png"
  },
  {
    name:"Always Pure Cotton with Wings",
    type:"maxiPad",
    price:"low",
    use:"external",
    flow:"heavyFlow",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-heavy-always.html",
    img: "images/pads-heavy-always.png",
  },
  {
    name:"Rael Organic Cotton Pads (Large)",
    type:"maxiPad",
    price:"moderate",
    use:"external",
    flow:"heavyFlow",
    reusability:"singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-heavy-rael.html",
    img: "images/pads-regular-rael.png",
  },
  {
    name: "Rael Organic Cotton Reusable Pads (Large)",
    type:"maxiPad",
    price:"high",
    use:"external",
    flow:"heavyFlow",
    reusability: "reusable",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-heavy-reusable-rael.html",
    img: "images/pads-reusable-rael.png",
  },
  {
    name: "Always Overnight Absorbency Unscented without Wings",
    type:"maxiPad",
    price:"low",
    use:"external",
    flow:"superHeavy",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-superheavy-always.html",
    img: "images/pads-super-heavy-always.png",
  },
  {
    name: "Rael Organic Cotton Overnight Pads",
    type:"maxiPad",
    price:"moderate",
    use:"external",
    flow:"superHeavy",
    reusability:"singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-superheavy-rael.html",
    img: "images/pads-super-heavy-rael.png",
  },
  {
    name: "Rael Organic Cotton Reusable Pads (Overnight)",
    type:"maxiPad",
    price:"high",
    use:"external",
    flow:"superHeavy",
    reusability:"reusable",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "pads-superheavy-reusable-rael.html",
    img: "images/pads-super-heavy-reusable-rael.png",
  },
  {
    name: "Tampax Lite Absorbency Tampons",
    type:"tampon",
    price:"low",
    use:"internal",
    flow:"lightFlow",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-light-tampax.html",
    img: "images/tampons-light-tampax.png",
  },
  {
    name: "Tampax Regular Absorbency with LeakGuard Braid",
    type:"tampon",
    price:"low",
    use:"internal",
    flow:"moderateFlow",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-regular-tampax.html",
    img: "images/tampons-regular-tampax.png",
  },
  {
    name: "Rael Organic Tampons (Regular)",
    type:"tampon",
    price:"moderate",
    use:"internal",
    flow:"moderateFlow",
    reusability: "singleUse",
    material:"organic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-regular-rael.html",
    img: "images/tampons-organic-rael.png",
  },
  {
    name: "Tampax Ultra Tampons",
    type:"tampon",
    price:"low",
    use:"internal",
    flow:"heavyFlow",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-heavy-tampax.html",
    img: "images/tampons-heavy-tampax.png",
  },
  {
    name: "Rael Organic Tampons (Super)",
    type:"tampon",
    price:"moderate",
    use:"internal",
    flow:"heavyFlow",
    reusability: "singleUse",
    material:"organic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-heavy-rael.html",
    img: "images/tampons-heavy-rael.png",
  },
  {
    name: "Tampax Super Plus Absorbency Tampons",
    type:"tampon",
    price:"low",
    use:"internal",
    flow:"superHeavy",
    reusability: "singleUse",
    material:"nonOrganic",
    difficulty:"medium",
    mobility:"active",
    url: "tampons-superheavy-tampax.html",
    img: "images/tampons-super-heavy-tampax.png",
  },
  {
    name: "Rael Reusable Menstrual Cup (Size 1)",
    type: "menstrualCup",
    price:"high",
    use:"internal",
    flow:"moderateFlow",
    reusability: "reusable",
    material:"nonOrganic",
    difficulty:"difficult",
    mobility:"active",
    url: "menstrualcups-rael.html",
    img: "images/menstrualcup-size1.png",
  },
  {
    name: "Rael Reusable Menstrual Cup (Size 2)",
    type: "menstrualCup",
    price:"high",
    use:"internal",
    flow:"heavyFlow",
    reusability: "reusable",
    material:"nonOrganic",
    difficulty:"difficult",
    mobility:"active",
    url: "menstrualcups-heavy-rael.html",
    img: "images/menstrualcup-size2.png",
  },
  {
    name: "Rael Organic Cotton Disposable Period Underwear",
    type: "periodUnderwear",
    price:"moderate",
    use:"external",
    flow:"heavyFlow",
    reusability: "singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
    url: "periodunderwear-rael.html",
    img: "images/periodunderwear-disposable-rael.png",
  },
  {
    name: "Rael Reusable Period Underwear",
    type: "periodUnderwear",
    price:"high",
    use:"external",
    flow:"heavyFlow",
    reusability: "reusable",
    material:"nonOrganic",
    difficulty:"easy",
    mobility:"active",
    url: "periodunderwear-reusable-rael.html",
    img: "images/periodunderwear-reusable-real.png",
  }
]

const filterMenu = document.querySelector(".filters")
const triggerFilter = document.getElementById("showFilters");
const container = document.querySelector(".objects");
const showAll = document.getElementById("showAll")
const lightFlow = document.getElementById("lightFlow")
const moderateFlow = document.getElementById("moderateFlow")
const heavyFlow = document.getElementById("heavyFlow")
const superHeavy = document.getElementById("superHeavy")
const internalUse = document.getElementById("internal")
const externalUse = document.getElementById("external")
const organic = document.getElementById("organic")
const nonOrganic = document.getElementById("nonOrganic")
const active = document.getElementById("active")
const reusable = document.getElementById("reusable")
const singleUse = document.getElementById("singleUse")
const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const difficult = document.getElementById("difficult")

showAll.addEventListener('click', function (){
  console.log(data);
  filterObjects(this.id);

});

triggerFilter.addEventListener('click', showFilters );

lightFlow.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

moderateFlow.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

heavyFlow.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

superHeavy.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

internalUse.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

externalUse.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

organic.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

nonOrganic.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

active.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

reusable.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

singleUse.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

easy.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

medium.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

difficult.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

function filterObjects (product) {
  let matches = [];
  if (product == 'showAll') {
      data.forEach(item => {
        matches.push(item);
      });
  }
  data.forEach( item => {
    
    if (item.flow == product) {
      matches.push(item);
    }
  });
  console.log(matches); 
buildResults(matches);
}

function buildResults(results) {
  clearResults();
  results.forEach( item => {
    const div = document.createElement('div');
    container.append(div);
    const productImg = document.createElement('img');
    productImg.setAttribute('src', item.img);
    productImg.textContent = item.img;
    productImg.classList.add("productImg");
    div.appendChild(productImg);
    const p = document.createElement('p');
    div.appendChild(p);
    const productName = document.createElement('a');
    productName.setAttribute('href', item.url)
    productName.textContent = item.name;
    p.appendChild(productName);
    productName.classList.add("directoryItem");
  })

}

function clearResults(){
  container.innerHTML = "";
}

function showFilters() {
  filterMenu.classList.add("show");
}