import './style.scss'

import * as bootstrap from "bootstrap";
import Typed from "typed.js";
import "waypoints/lib/noframework.waypoints.min";
import counterUp from "counterup2";
import ScrollReveal from "scrollreveal";
// import jquery from 'jquery';
// import slick from 'slick-carousel';


// $(".st").slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// })

// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 100,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//       {
//           breakpoint: 1024,
//           settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//           }
//       },
//       {
//           breakpoint: 600,
//           settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//           }
//       },
//       {
//           breakpoint: 480,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//           }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//   ]
// });

var options = {
  strings: ['developers', 'founders','designers'],
  typeSpeed: 60
};

var typed = new Typed('.type', options);



let slideDown = {
  distance: '70px',
  origin: 'top',
  duration : 1000,
  interval : 500
};

let slidUp={
  distance: '90px',
  origin: 'bottom',
  duration : 2000,
  interval : 700
}

let slideRight={
  distance: '90px',
  origin: 'right',
  duration : 1000,
  easing: "ease-out",
  cleanup: true,
  delay:200
}

let slideLeft={
  distance: '160px',
  origin: 'left',
  duration : 1000,
  easing: "ease-out",
  cleanup: true,
  delay:200
}

let navDown={

  distance: '70px',
  origin: 'top',
  duration : 1000,
  interval : 500,
  easing: "ease-out",
  cleanup: true


}

// let slideDown={
//     distance: '70px',
//     origin: 'top',
//     duration : 2000,
//     interval : 700
// }

ScrollReveal().reveal('.down', slideDown);
ScrollReveal().reveal('.up', slidUp);
ScrollReveal().reveal('.right', slideRight);
ScrollReveal().reveal('.left', slideLeft);
ScrollReveal().reveal('.down', slideDown);
ScrollReveal().reveal('.navDown', navDown);



const counter =document.querySelectorAll(".counter");
console.log(counter);

function count(){
    counter.forEach((cur)=>{
        new Waypoint({
            element: cur,
            handler: function() {
                counterUp( cur, {
                    duration: 1000,
                    delay: 16,
                } )
            },
            offset :"bottom-in-view",
        })
    });
}

count();

const preBtn = document.querySelector(".btn-left");
const nextBtn =document.querySelector(".btn-right");
const carousel1 =document.querySelector("#carousel1");
const carousel2=document.querySelector("#carousel2");


const myCarousel = new bootstrap.Carousel(carousel1);
const myCarousel2 =new bootstrap.Carousel(carousel2);

preBtn.addEventListener("click",function(){
  myCarousel.prev();
  myCarousel2.prev();
})
 nextBtn.addEventListener("click",function(){
   myCarousel.next();
   myCarousel2.next();
 })

 let checkBtn= document.querySelector('.check');
 let checkText= document.querySelector('.checkText');

 checkBtn.addEventListener('click',function(){

    if (this.checked==true){
        checkText.textContent='49';
        count();

    }else {
        checkText.innerHTML='29';
        count();

    }
 })