const boxCalled = document.querySelector('.dev-addons'),
  closeBtn = boxCalled.querySelector('.dev-addons .close'),
  now = new Date,
  nowDay = now.getDate();

let imgProductDiv = document.querySelector('.product-image img'),
  nameProduct = document.querySelector('h1').innerHTML,
  imgProduct = imgProductDiv.getAttribute("src"),
  phoneImgBox = boxCalled.querySelector('.phoneImg'),
  intPhone = boxCalled.querySelector('span b'),
  tagB = boxCalled.querySelectorAll('span b'),

  domen = window.location.pathname,
  killDate = new Date(now.setDate(now.getDate() + 1));

// print image to boxCalled
phoneImgBox.setAttribute("src", imgProduct)
phoneImgBox.setAttribute("alt", nameProduct)

// generat random info
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let buyPhone = nowDay * parseInt(getRandomArbitrary(1, 25)) ;

// save cookes

if (Cookies.get('cook') == undefined) {
  Cookies.set('cook', buyPhone, {
    path: domen
  });
}
let cook = Cookies.get('cook', {
  path: domen
});

// print info
tagB[0].innerHTML = nameProduct
tagB[1].innerHTML = cook
// {action} close boxCalled
closeBtn.onclick = function() {
  boxCalled.style.transform = "translateX(-105%)";
  boxCalled.classList.remove("showBoxCalled");
  boxCalled.classList.add("exit");
}
// {action} show boxCalled
setTimeout(function() {
  boxCalled.classList.add("showBoxCalled");
}, 3000);
