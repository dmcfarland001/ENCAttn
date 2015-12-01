// JavaScript Document

function initpage() {
	var carousel = new YAHOO.widget.Carousel("slideshow", {
    	isCircular: true, numVisible: 1,navigation:"",animation:{speed: .75,effect:YAHOO.util.Easing.EaseOut,method:"crossfade"},autoPlayInterval:3000});
	carousel.render();
	carousel.show();
	carousel.startAutoPlay();
}
YAHOO.util.Event.onDOMReady(initpage);