document.addEventListener('DOMContentLoaded', () => {
  
   //navigation menu
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  //slider 
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    indicators: false,
    height: 700, 
    duration: 500,
    interval: 5000
  });

})