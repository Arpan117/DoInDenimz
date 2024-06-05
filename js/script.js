// header

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
     if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
     } else {
          navbar.classList.remove("sticky");
     }
}

// end header












//Product Page filter dropdown

function toggleSection(sectionNumber) {
     var section = document.getElementById('section' + sectionNumber);
     var icon = document.getElementById('icon' + sectionNumber);
     var radioBtn = document.getElementById('radioBtn' + sectionNumber);
 
     if (section.style.display === 'block') {
         section.style.display = 'none';
         icon.src = './img/plus.png'; // Change the source to the plus image
         radioBtn.checked = false; // Uncheck the radio button
     } else {
         section.style.display = 'block';
         icon.src = './img/minus.png'; // Change the source to the minus image
         radioBtn.checked = true; // Check the radio button
     }
 }

 //end Product Page filter dropdown 



