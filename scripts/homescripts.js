(function  () {
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
      $(".nav--buttons--right").css("display", "flex");
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
  if(this.is(":checked")) {s
    count++;
  }
});
}



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
if ( checked != 7 ) {
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
  $(".progress-bar-insider").css("width", ((checked/7)*96 + 4) + "%");
}
if (checked < 8) {
  $(".progress-bar-insider").attr("data-progress", (checked + 1) + "/8");
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


const productData = [
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
function compareArr(arr1, object1)
{
  const intersection = arr1.filter(element =>
Object.values(object1).includes(element));
  return intersection.length;
}
let newUser = [];
let btn = document.getElementById("btnCalculate");

btn.addEventListener("click", ( )=>
   {
    let questionOne = document.getElementsByName("questionOne");
  let questionTwo = document.getElementsByName("questionTwo");
  let questionThree = document.getElementsByName("questionThree");
  let questionFour = document.getElementsByName("questionFour");
  let questionFive = document.getElementsByName("questionFive");
  let questionSix = document.getElementsByName("questionSix");
  let questionSeven = document.getElementsByName("questionSeven");
    questionOne.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
      questionTwo.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
  questionThree.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
  questionFour.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
  questionFive.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
  questionSix.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
  questionSeven.forEach((question)=>{
      if (question.checked) {
        newUser.push(question.value);
      }
    });
    console.log(newUser);
    resultarray = [];
    for(i = 0; i<productData.length; i++)
      {
        resultarray.push(compareArr(newUser, productData[i]));
      }
    maxIndex = resultarray.indexOf(Math.max.apply(Math, resultarray));
    nameOfProduct = productData[maxIndex].name;
    productURL = productData[maxIndex].url;
    location.href = productURL;
    } );



//calculate//

///results///
