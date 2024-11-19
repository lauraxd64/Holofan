const intro = document.querySelector("#splash");
const video = intro.querySelector("video");
/*const text = intro.querySelector(".text-container ");*/

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let Videoscene = new ScrollMagic.Scene({
  duration: 27000,
  triggerElement: intro,
  triggerHook: 0
})
  /*.addIndicators()*/
  .setPin(intro)
  .addTo(controller);

//Text Animation
/*const textAnim1 = TweenMax.fromTo(text, 3, { zIndex:202}, { opacity: 1 });

let scene1 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0.5
})
  .addIndicators()
  .setTween(textAnim1)
  .addTo(controller);
*/
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

Videoscene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos);

  video.currentTime = delay;
}, 41.66);