function changeSize() {
    // get a random font size between 10 and 30 pixels
    var randomSize = Math.floor(Math.random()*(480-3+1))+3;
    
    // apply the random font size to the element
    document.querySelector('.sizechange').style.fontSize = randomSize + 'px';
}

function checkScroll() {
    var makeTextBigger = document.getElementById('makeTextBigger');
    var makeTextSmaller = document.getElementById('makeTextSmaller');

    var increaseLinePosition = makeTextBigger.offsetTop;
    var decreaseLinePosition = makeTextSmaller.offsetTop;

    var scrollPosition = window.scrollY || window.pageYOffset;

    // Check if the scroll position is near the line to decrease font size
    if (scrollPosition >= decreaseLinePosition) {
        // Add a class to decrease the font size
        document.body.classList.add('smaller-font');
        document.body.classList.remove('bigger-font');
    }
    // Check if the scroll position is near the line to increase font size
    else if (scrollPosition >= increaseLinePosition) {
        // Add a class to increase the font size
        document.body.classList.add('bigger-font');
        document.body.classList.remove('smaller-font');
    } else {
        // Remove both classes if the scroll position is before the specific lines
        document.body.classList.remove('bigger-font', 'smaller-font');
    }
}

// Attach the checkScroll function to the scroll event
window.addEventListener('scroll', checkScroll);