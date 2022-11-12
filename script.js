const panels = document.querySelectorAll('.panel');
var audio = new Audio("https://www.mboxdrive.com/pre_650i%20(2).mp3.asset.1449924565635%20(mp3cut.net).mp3");
panels.forEach(panel=>{
  panel.addEventListener('click',()=>{
    removeActiveClass();  
    panel.classList.add('active');
    audio.play();
  })
})

function removeActiveClass() {
  panels.forEach(panel=>{
    panel.classList.remove('active')
  })
}