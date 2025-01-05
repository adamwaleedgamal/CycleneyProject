function check(){
    // If password = confirm password, display on screen the right checkmark.
    if (document.getElementById('passowrd').value == document.getElementById('confirm_password').value){
        document.getElementById('messege').style.color = '#00FF00'
        document.getElementById('messege').innerHTML = '\u2714'
    }
    // If password != confirm password, display on screen the wrong checkmark.
    else {
        document.getElementById('messege').style.color = 'red'
        document.getElementById('messege').innerHTML = '\u274c'
    }
}