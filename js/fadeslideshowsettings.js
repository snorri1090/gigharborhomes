var mygallery = new fadeSlideShow({
    wrapperid: "fadeshow1", //ID of blank DIV on page to house Slideshow
    dimensions: [990, 458], //width/height of gallery in pixels. Should reflect dimensions of largest image
    imagearray: [
		["images/slide1.jpg", "", "", ""],
		["images/slide2.jpg", "", "", ""],
		["images/slide3.jpg", "", "", ""],
		["images/slide4.jpg", "", "", ""],
		["images/slide5.jpg", "", "", ""],
		["images/slide6.jpg", "", "", ""],
		["images/slide7.jpg", "", "", ""],
		["images/slide8.jpg", "", "", ""],
		["images/slide9.jpg", "", "", ""],
		["images/slide10.jpg", "", "", ""],
		["images/slide11.jpg", "", "", ""],
		["images/slide12.jpg", "", "", ""],
		["images/slide13.jpg", "", "", ""],
		["images/slide14.jpg", "", "", ""],
		["images/slide15.jpg", "", "", ""],
		["images/slide16.jpg", "", "", ""],
		["images/slide17.jpg", "", "", ""],
		["images/slide18.jpg", "", "", ""],
		["images/slide19.jpg", "", "", ""],
		["images/slide20.jpg"]//<--no trailing comma after very last image element!
	],
    displaymode: { type: 'auto', pause: 2000, cycles: 0, wraparound: false },
    persist: false, //remember last viewed slide and recall within same session?
    fadeduration: 500, //transition duration (milliseconds)
    descreveal: "ondemand",
    togglerid: ""
})