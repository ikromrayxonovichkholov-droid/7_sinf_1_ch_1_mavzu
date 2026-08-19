/*=========================================
      Microsoft Word 2019
      JavaScript Dasturi
      Muallif: Ikrom Rayxonovich Kholov
=========================================*/

// Sahifa yuklangandan keyin ishlaydi
window.onload = function () {

    // Konsolga xabar chiqaradi
    console.log("Microsoft Word 2019 loyihasi ishga tushdi.");

    // HOME menyusidagi barcha tugmalarni topadi
    const buttons = document.querySelectorAll(".group button");

    // Har bir tugmaga hodisa qo'shadi
    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            alert("Siz \"" + button.innerText + "\" tugmasini bosdingiz.");

        });

    });

};