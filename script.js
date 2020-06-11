if (window.confirm('Es tu primera vez en este sitio?. Llenaste el formulario de argentinos varados? Si ya lo llenaste presiona cancelar ')) 
{
window.location.href='https://bit.ly/2zmqIhN';
};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }