function new_popup(){
    var popupwin = window.open('https://www.google.com','Raj Login Page','width=50,height30=,left=2,top=1');
    setTimeout(function() { popupwin.close();}, 5000);
}