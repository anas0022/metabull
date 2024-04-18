document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    var toggle = document.querySelector('.menu-res');
    var anima = document.querySelectorAll('.menu-res span');
    var menu = document.querySelector('.res-menu');
    var wat = document.querySelector('.what');
    var what = document.querySelector('.what2');
    var white = document.querySelector('.white');
    var white2 = document.querySelector('.white2');
    var co = document.querySelector('.co');
    var co2 = document.querySelector('.co2');
    toggle.onclick = function() {
        anima.forEach(function(spanElement) {
            spanElement.classList.toggle('active');
        });
        menu.classList.toggle('active');
    }

    wat.onclick = function() {
        window.scrollTo(0, 600); 
    }
    white.onclick = function() {
        window.scrollTo(0, 1200); 
    }
    co.onclick = function() {
        window.scrollTo(0, 1800); 
    }
    what.onclick = function() {
        if (!what.clicked) { 
            window.scrollTo(0, 400); 
            menu.classList.remove('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.remove('active');
            });
            what.clicked = true; // Set the property to true
        } else {
            
            menu.classList.add('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.add('active');
            });
            what.clicked = false; 
        }
    }
    
    white2.onclick = function() {
        if (!what.clicked) { 
            window.scrollTo(0, 800); 
            menu.classList.remove('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.remove('active');
            });
            what.clicked = true; // Set the property to true
        } else {
            
            menu.classList.add('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.add('active');
            });
            what.clicked = false; 
        }
    }
    co2.onclick = function() {
        if (!what.clicked) { 
            window.scrollTo(0, 2600); 
            menu.classList.remove('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.remove('active');
            });
            what.clicked = true; // Set the property to true
        } else {
            
            menu.classList.add('active');
            anima.forEach(function(spanElement) {
                spanElement.classList.add('active');
            });
            what.clicked = false; 
        }
    }
    
});
