$(".testislider").bxSlider({
  minSlides: 1,
  maxSlides: 2,
  slideWidth: 400,
  slideMargin: 15,
  auto: true,
  responsive: true
});

$(".placementslider").bxSlider({
  minSlides: 7,
  maxSlides: 7,
  slideWidth: 200,
  slideMargin: 15,
  auto: true,
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.quality-box');
  let expandedBox = boxes[0]; // Start with the first box expanded

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      if (expandedBox !== box) {
        expandedBox.style.flex = '1'; // Collapse previously expanded box
        expandedBox.classList.remove('expanded'); // Remove expanded class

        box.style.flex = '3'; // Expand the hovered box
        box.classList.add('expanded'); // Add expanded class

        expandedBox = box; // Update the reference to the currently expanded box
      }
    });
  });
});

function courseSelector(selectedCourse) {

  let courseShowBox = document.getElementsByClassName('coaching-course-right-box-wrapper');

  let courseShowBtn = document.getElementsByClassName('coaching-course-btn');

  if (selectedCourse == 'frontend') {
    courseShowBtn[0].classList.add('active');
    courseShowBtn[1].classList.remove('active');
    courseShowBtn[2].classList.remove('active');
    courseShowBtn[3].classList.remove('active');
    courseShowBtn[4].classList.remove('active');
    courseShowBox[0].classList.add('show');
    courseShowBox[1].classList.remove('show');
    courseShowBox[2].classList.remove('show');
    courseShowBox[3].classList.remove('show');
    courseShowBox[4].classList.remove('show');
  } else if (selectedCourse == 'backend') {
    courseShowBtn[0].classList.remove('active');
    courseShowBtn[1].classList.add('active');
    courseShowBtn[2].classList.remove('active');
    courseShowBtn[3].classList.remove('active');
    courseShowBtn[4].classList.remove('active');
    courseShowBox[0].classList.remove('show');
    courseShowBox[1].classList.add('show');
    courseShowBox[2].classList.remove('show');
    courseShowBox[3].classList.remove('show');
    courseShowBox[4].classList.remove('show');
  } else if (selectedCourse == 'mobile') {
    courseShowBtn[0].classList.remove('active');
    courseShowBtn[1].classList.remove('active');
    courseShowBtn[2].classList.add('active');
    courseShowBtn[3].classList.remove('active');
    courseShowBtn[4].classList.remove('active');
    courseShowBox[0].classList.remove('show');
    courseShowBox[1].classList.remove('show');
    courseShowBox[2].classList.add('show');
    courseShowBox[3].classList.remove('show');
    courseShowBox[4].classList.remove('show');
  } else if (selectedCourse == 'bcacourse') {
    courseShowBtn[0].classList.remove('active');
    courseShowBtn[1].classList.remove('active');
    courseShowBtn[2].classList.remove('active');
    courseShowBtn[3].classList.add('active');
    courseShowBtn[4].classList.remove('active');
    courseShowBox[0].classList.remove('show');
    courseShowBox[1].classList.remove('show');
    courseShowBox[2].classList.remove('show');
    courseShowBox[3].classList.add('show');
    courseShowBox[4].classList.remove('show');
  } else if (selectedCourse == 'database') {
    courseShowBtn[0].classList.remove('active');
    courseShowBtn[1].classList.remove('active');
    courseShowBtn[2].classList.remove('active');
    courseShowBtn[3].classList.remove('active');
    courseShowBtn[4].classList.add('active');
    courseShowBox[0].classList.remove('show');
    courseShowBox[1].classList.remove('show');
    courseShowBox[2].classList.remove('show');
    courseShowBox[3].classList.remove('show');
    courseShowBox[4].classList.add('show');
  }

}


function ShowMobileMenu() { 
  
  let headerNavMenu = document.getElementById('headerNavMenu');
  let closeMenuIcon = document.getElementById('closeMenuIcon');

  headerNavMenu.classList.add('menuShow');
  closeMenuIcon.classList.add('showCloseIcon');

}


function HideMobileMenu() {

  let headerNavMenu = document.getElementById('headerNavMenu');
  let closeMenuIcon = document.getElementById('closeMenuIcon');

  headerNavMenu.classList.remove('menuShow');
  closeMenuIcon.classList.remove('showCloseIcon');

}