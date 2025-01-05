// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for chrome
    document.documentElement.scrollTop = 0; // for chrome, safari, IE and opera.
}

window.onload = function() // wait for page to load
{
    // Get the button variable.
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 650px from the top of the document, show the button.
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650 ) {
                mybutton.style.display = "block";
        } 
        else {
            mybutton.style.display = "none";
        }
    }
    function white(){
        document.getElementById('dark').innerHTML = 'White'
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'white'
        document.querySelector('body').style.transition = '1s ease'
    }
    document.getElementById('dark').addEventListener('click', white)

}

