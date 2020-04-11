
var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-presentation-btn").click(function() {
  $(".video-presentation-btn").addClass('video-presentation-btn--hide');
})