
// Created By Mohamed Ahmed

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for chrome
    document.documentElement.scrollTop = 0; // for chrome, safari, IE and opera.
}

window.onload = function() // wait for page to load
{
    // Get the button variable.
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 1500px from the top of the document, show the button.
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ) {
                mybutton.style.display = "block";
        } 
        else {
            mybutton.style.display = "none";
        }
    }

}