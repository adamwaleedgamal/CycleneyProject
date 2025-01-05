function changephoto(){
    var photo=document.getElementById('p');
    photo.src='3.jpeg';
}
function changephoto2(){
    var photo=document.getElementById('p');
    photo.src='4.jpeg';
}
function changephoto3(){
    var photo=document.getElementById('p');
    photo.src='5.jpeg';
}
function changephoto4(){
    var photo=document.getElementById('p');
    photo.src='6.jpeg';
}
function g(){
    setTimeout(changephoto,4000);

    

}
function g2(){
    setTimeout(changephoto2,3000);
}
function g5(){
    setTimeout(changephoto6,3000);
}
function g3(){
    setTimeout(changephoto4,3000);
}
function g4(){
    setTimeout(changephoto3,3000);
}
function delay(r){
    return new Promise(resolve =>setTimeout(resolve,3000));
}
