// Copier le menu depuis le mobile
function copyMenu() {
    // Copier à l'interieur de département Cat pour .department
    let dptCtegorie = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCtegorie.innerHTML
    // console.log(dptPlace);
    // console.log(dptCtegorie);

    // Copier dans le nav pour le nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;
    // Copy .header top .wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();


//  Show sub menu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
console.log(submenu);
submenu.forEach((menu) => menu.addEvenListener('click ',toggle));

function toggle(e) {
    //  e.preventDefault();
     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
}
// Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });