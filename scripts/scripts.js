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

data = [

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
   img:"images\Panty Liners - Always.png",
   url:"pantyliners_always.html"
 },
 {
    name:"Rael Organic Cotton Panty Liners",
    type: "pantyLiner",
    price:"moderate",
    flow:"lightFlow",
    use:"external",
    reusability:"singleUse",
    material:"organic",
    difficulty:"easy",
    mobility:"null",
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
  }
 ]

const container = document.querySelector(".objects");
const showAll = document.getElementById("showAll")
const lightFlow = document.getElementById("lightFlow")
const moderateFlow = document.getElementById("moderateFlow")
const heavyFlow = document.getElementById("heavyFlow")
const superHeavy = document.getElementById("superHeavy")
const internal = document.getElementById("internal")
const external = document.getElementById("external")
const organic = document.getElementById("organic")
const nonOrganic = document.getElementById("nonOrganic")
const active = document.getElementById("active")
const reusable = document.getElementById("reusable")
const singleUse = document.getElementById("singleUse")
const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const difficult = document.getElementById("difficult")

lightFlow.addEventListener('click', function (){
  console.log(this.id);
  filterObjects(this.id);
});

filterObjects("all");

function filterObjects (product) {
  let matches = [];
  data.forEach( item => {
    if (item.flow == product) {
      matches.push(item);
    }
  });
  console.log(matches); 
buildResults(matches);
}

function buildResults(results) {
  results.forEach( item => {
    const productName = document.createElement('h5');
    productName.textContent = item.name;
    container.appendChild(productName);
    const productImg = document.createElement('img');
    productImg.textContent = item.img;
    container.appendChild(productImg);
    const productUrl = document.createElement('href')
    productUrl.textContent = item.url;
  })

}

(function () {
  var carouselTransition, carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;
  carouselTransition = 250;
  carouselContent = $('.carousel__content');
  carouselIndex = 0;
  carouselMax = 0;
  carouselLength = carouselContent.children().length;
  isAnimating = false;
  itemWidth = 100 / carouselLength;
  firstItem = $(carouselContent.children()[0]);
  lastItem = $(carouselContent.children()[carouselLength - 1]);
  firstClone = null;
  lastClone = null;
  carouselContent.css('width', carouselLength * 100 + '%');
  carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, 0);
  $.each(carouselContent.children(), function () {
      return $(this).css('width', itemWidth + '%');
  });
  $('.nav--buttons--left').on('click', function (event) {
      event.preventDefault();
      if (isAnimating || carouselIndex === 0) {
          return;
      }
      isAnimating = true;
      carouselIndex--;
      update_progress_bar(carouselIndex);
      $(".nav--buttons--right").css("display", "block");
      if (carouselIndex === 0 || carouselIndex === 1) {
        $(".nav--buttons--left").css("display", "none");
      }
      return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
          return isAnimating = false;
      });
  });
  $('.nav--buttons--right').on('click', function (event) {
      event.preventDefault();
      if (isAnimating || carouselIndex === carouselLength - 1) {
          return;
      }
      isAnimating = true;
      carouselIndex++;
      update_progress_bar(carouselIndex);
      if ( carouselIndex > carouselMax ) {
        carouselMax = carouselIndex;
      }
      $(".nav--buttons--left").css("display", "block");
      if (carouselIndex === carouselLength - 1 || carouselIndex === carouselMax) {
        $(".nav--buttons--right").css("display", "none");
      }
      if (carouselIndex === 1) {
        $(".nav--buttons--left").css("display", "none");
      }
      return carouselContent.transition({ x: carouselIndex * -itemWidth + '%' }, carouselTransition, 'ease', function () {
          return isAnimating = false;
      });
  });
}.call(this));

function calc_results() {
var count;
$(".questions").each(function(){
  if(this.is(":checked")) {
    count++;
  }
});
}

var results = [
["13.33", "5.45", "2.68"],    // 0
["8.89", "4.55", "9.82"],     // 1
["5.56", "4.55", "14.29"],    // 2
["8.89", "4.55", "0.00"],     // 3
["1.11", "6.36", "6.25"],     // 4
["11.11", "3.64", "4.46"],    // 5
["8.89", "4.55", "4.46"],     // 6
["5.56", "4.55", "6.25"],     // 7
["5.56", "4.55", "2.68"],     // 8
["6.67", "8.18", "8.93"],     // 9
["10.00", "10.00", "6.25"],   // 10
["3.33", "5.45", "4.46"],     // 11
["3.33", "5.45", "8.04"],     // 12
["4.44", "11.82", "4.46"],    // 13
["2.22", "10.00", "2.68"],    // 14
["1.11", "6.36", "14.29"]     // 15
]

function sumArray(from, to, size) {
var sum = parseFloat("0.00");
for ( var i = from; i <= to; i++ ) {
  sum += parseFloat(results[i][size]);
}
return sum.toFixed(1).toString();
}

function calc_results(button_elem) {
var count = 0;
var checked = 0;
var size = $("input[name=size]:checked").val();
$(":checked").each(function() {
  checked++;
});
if ( checked != 16 ) {
  alert("Please check all of the questions.");
  return;
}
$(".questions").each(function() {
  if ( $(this).is(":checked") ) {
      count++;
  }
});
var less = sumArray(0, count-1, size) ;
var same = sumArray(count, count, size);
var more = sumArray(count+1, 15, size);

var resultsText = "";
resultsText += '<div class="container">';
resultsText += '<h2 style="margin-top: 0.5em; color: #00a5b5;">So, Where Do You Stand Today?</h2>';
resultsText = resultsText + '<h3>You are currently automating <strong>' + (count) + '</strong> controls of the 15 sub-controls used to assess Critical Security Controls 1 - 5 in your organization of <strong>' + $("input[name=size]:checked").attr('data-value') + '</strong> people.</h3>';
resultsText += '<div style="margin-top: 2.5em;" class="score-slider-track">';
resultsText += '<div class="score-slider">0%</div>';
resultsText += '<div class="score-slider-less">0%</div>';
resultsText += '<div class="score-slider-more">0%</div>';
resultsText += '</div>';
resultsText += '<div class="flex-grid mb">';
resultsText += '<div class="flex-two flex-fewer">';
resultsText = resultsText + '<p style="margin: 0; font-size: 4em;">' + less + "%" + '</p>';
resultsText += '<p style="margin: 0;">of similar sized organizations have automated <strong>fewer</strong> controls</p>';
resultsText += '</div>';
resultsText += '<div class="flex-two flex-same">';
resultsText = resultsText + '<p style="margin: 0; font-size: 5em;">' + same + "%" + '</p>';
resultsText += '<p style="margin: 0;">of similar sized organizations have automated the <strong>same</strong> number of controls</p>';
resultsText += '</div>';
resultsText += '<div class="flex-two flex-more">';
resultsText = resultsText + '<p style="margin: 0; font-size: 4em;">' + more + "%" + '</p>';
resultsText += '<p style="margin: 0;">of similar sized organizations have automated <strong>more</strong> controls</p>';
resultsText += '</div>';
resultsText += '</div>';
resultsText += '</div>';

$("#auto-con-calc").html(resultsText);
sliderControl(less,same,more);
$("#auto-con-calc").slideDown("fast", function() {
  $('html, body').animate({
     scrollTop: $('#auto-con-calc').offset().top
  }, 'slow');
});
}

function update_progress_bar(index) {
var checked = index;
if ( checked === 0 ) {
  $(".progress-bar-insider").css("width", "4%");
}
else {
  checked = checked - 1;
  $(".progress-bar-insider").css("width", ((checked/15)*96 + 4) + "%");
}
if (checked < 16) {
  $(".progress-bar-insider").attr("data-progress", (checked + 1) + "/16");
}
else {
  $(".progress-bar-insider").attr("data-progress", "");
}
}

$(".carousel--item input[type=radio]").click(function(){
$("#auto-con-calc").slideUp();
$('.nav--buttons--right').trigger('click');
});

function sliderControl(less, same, more) {
var less_slider = $(".score-slider-less");
var same_slider = $(".score-slider");
var more_slider = $(".score-slider-more");

if ( same < 5.00 ) {
  same_slider.css("width", "5%");
}
else {
  less_slider.css("width", same + "%");
}
same_slider.css("left", less + "%").html(same + "%");
less_slider.css("width", (parseFloat(less) + (parseFloat(same) / 2)) + "%").html(less + "%");
more_slider.css("width", (parseFloat(more) + (parseFloat(same) / 2)) + "%").html(more + "%");
}



/*
function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[1]), 1);
    }
  }
  element.ClassName = arr1.join(" ");
}
*/