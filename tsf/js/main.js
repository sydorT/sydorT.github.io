var popup = document.querySelector('.popup');
var backdrop = document.querySelector('.backdrop');
var buttons = document.querySelectorAll('.popup-active');
var condition = document.querySelector('.condition');
var agreement = document.querySelector('.agreement');
var popupCondition = document.querySelector('.popup-condition');
var popupAgreement = document.querySelector('.popup-agreement');


[].forEach.call(buttons, function(button) {
	button.addEventListener('click', showPopup(popup));
});

document.querySelector('body').addEventListener('click', function(e) {
  hidePopupIfOpened(popup, e.target);
  hidePopupIfOpened(popupCondition, e.target);
  hidePopupIfOpened(popupAgreement, e.target);
});

function hidePopupIfOpened(popup, target) {
	if(popup.style.display === 'block' && !popup.contains(target)) {
  	popup.style.display = 'none';
  	backdrop.style.display = 'none';
  }
}

function showPopup(popup) {
	return function(e) {
		popup.style.display = 'block';
		e.stopPropagation();
		backdrop.style.display = 'block';	
	}
}

condition.addEventListener('click', showPopup(popupCondition));

agreement.addEventListener('click', showPopup(popupAgreement));


document.querySelector('.condition2').addEventListener('click', function(e) {
	popup.style.display = 'none';  
	popupCondition.style.display = 'block';
	e.stopPropagation();
	backdrop.style.display = 'block';	
});

document.querySelector('.agreement2').addEventListener('click', function(e) {
	popup.style.display = 'none';  
	popupAgreement.style.display = 'block';
	e.stopPropagation();
	backdrop.style.display = 'block';	
});


function registerCloseButton(popup) {
	popup.querySelector('.close-window').addEventListener('click', function(e) {
	  popup.style.display = 'none';
		e.stopPropagation();
		backdrop.style.display = 'none';  
	});
}

registerCloseButton(popupCondition);
registerCloseButton(popupAgreement);

document.querySelector('.close-window').addEventListener('click', function(e) {
  popupCondition.style.display = 'none';
	e.stopPropagation();
	backdrop.style.display = 'none';  
});




function runScroll() {
  scrollTo(document.querySelector('html'), elmnt.offsetTop, 800);
}
var elmnt;
var scrollme;
scrollme = document.querySelector(".btn-white");
elmnt = document.getElementById("video");
scrollme.addEventListener("click",runScroll,false);

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

document.addEventListener( 'DOMContentLoaded', function( event ) {
	
	

	try {
		initMaps();
	} catch(err) {
	}
	
});

function initMaps() {
	ymaps.ready(init);
	var myMap,      
	    myPlacemark1;      

	function init() {    
	    myMap = new ymaps.Map("map", {
	        center: [54.31842501, 48.40606050],
	        zoom: 16,
	        controls: ['smallMapDefaultSet']
	    });      

	    myMap.controls.remove('typeSelector');
	    myMap.controls.remove('fullscreenControl');

	    myPlacemark1 = new ymaps.Placemark([54.31842501, 48.40606050], {
	        balloonContentHeader: '2 ноября, 17:30',
	        balloonContentBody: 'Концертный зал УлГПУ',
	        balloonContentFooter: '+7 (813) 633-02-08',
	        hintContent: 'Концертный зал УлГПУ'	        
	    },
	    {	    		
	    		preset: 'islands#redIcon' 
	    });
	   
	    myMap.geoObjects.add(myPlacemark1);   
	}
}