const charact = document.getElementById('character');
let carac = {};
let x = 0;
document.addEventListener('keydown', function(a) {carac[a.key] = true;});
document.addEventListener('keyup', function(a) {carac[a.key] = false;});

function mae() {
let deplacement = 0;
    
    if (carac['ArrowLeft']) { 
     deplacement = -2;
     charact.classList.add('left');
     charact.classList.add('right');} 

    else if (carac['ArrowRight']) { 
     deplacement = 2;
     charact.classList.remove('left');
     charact.classList.add('right');} 
      
    else {
        charact.classList.remove('walk');
        charact.classList.add('stop');}

  if (deplacement !== 0) {
  x += deplacement * 2; 
  charact.style.transform = "translatex(" + x + "px)";}
  requestAnimationFrame(mae);}  
  mae();
