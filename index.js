	var D = 0;
    var B = 0;
    var A = 0;
    function addA() {
        A += 1;
        document.getElementById("A").innerHTML = A;
    };
    function addB() {
        B += 1;
        document.getElementById("B").innerHTML = B;
    };
    function addD() {
        D += 1;
        document.getElementById("D").innerHTML = D;
    };
	    function minusA() {
        A -= 1;
        document.getElementById("A").innerHTML = A;
    };
    function minusB() {
        B -= 1;
        document.getElementById("B").innerHTML = B;
    };
    function minusD() {
        D -= 1;
        document.getElementById("D").innerHTML = D;
    };
function passwordLoad() {
var password;
var pass1="cooldiego123"; //Diego
var pass2="coolguy_696"; //Bolke
var pass3="wdsa53ajub3an"; //Andrew
password=prompt('Enter Password To View Page','');
if (password==pass1) {
var user="Diego";
alert('Welcome!');
}
else if (password==pass2) {
var user="Bolke";
alert('Welcome!');
}
else if (password==pass3) {
var user="Andrew";
alert('Welcome!');
}
else
{
alert('Incorrect password');
window.location="https://www.google.ae/search?q=incorrect!&safe=strict&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiQ_M72k7jSAhUlLMAKHc-JCOcQ_AUICCgB&biw=1366&bih=700#imgrc=pLVXH3j1FgecWM:";
}}
