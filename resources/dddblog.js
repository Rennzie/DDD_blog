let bannerImgArray =[{
        url:'url(resources/images/vegan-plate-not-owned.JPG)',
        quoteColor: '#8F4814',
        delay: 0
    },{
        url:'url(resources/images/ct-new-years-18-balconey.JPG)',
        quoteColor: 'black',
        delay: 5000
    },{
        url:'url(resources/images/human-flag-bakkie-sean.jpg)',
        quoteColor: 'silver',
        delay: 5000
    },{
        url:'url(resources/images/sean-kristi-engaged-dropknee.JPG)',
        quoteColor: 'black',
        delay: 7000
    },{
        url:'url(resources/images/tml-17-origional-ravers-mainstage.JPG)',
        quoteColor: '#8F4814',
        delay: 5000
    },{
        url:'url(resources/images/sean-kristi-lanzerac.JPG)',
        quoteColor: 'black',
        delay: 5000
    },{
        url:'url(resources/images/kruger-night-light.jpg)',
        quoteColor: 'silver',
        delay: 5000
    }];

let slideIndex = 0;

/*
*    Uses an if statement to loop a settimout fallback function,
*    the fall back calls the changeImage and changeColor functions
*    before incrementing the slideIndex.

*    The if statment check the index and recalls the imageLoops functions
*    trigger the next timeout funtion and a new image is displayed.

*    The else is called when slideIndex === length of the array. It resets
*    the slideIndex back ti zero which effective starts the whole process again.
*    Function will run until the browser is closed.
*/

function imageLoops() {
    setTimeout(function(){
        changeSlide(slideIndex);
        changeColor(slideIndex);
        slideIndex++;
        if( slideIndex !== bannerImgArray.length ){
            imageLoops();
        } else{
            imageLoops();
            slideIndex = 0;
        }
    }, setDelay(slideIndex));
}

//determines the correct delay for the image in the slide show
function setDelay(imageIndex){
    if(imageIndex === 0){
        return 5000;
    }else if(imageIndex > 0 && imageIndex <= bannerImgArray.length){
        return bannerImgArray[imageIndex-1].delay;
    };
}

//changes the background image of the bannner depending on an index
function changeSlide(imageIndex) {
    document.getElementsByClassName('banner')[0].style
    .backgroundImage = bannerImgArray[imageIndex].url;
};

//changes the color of the quote depending on which image is being displayed
function changeColor(imageIndex){
    document.getElementsByClassName('quote')[0].style
    .color = bannerImgArray[imageIndex].quoteColor;
}

//Invokes the composed functions
imageLoops();
