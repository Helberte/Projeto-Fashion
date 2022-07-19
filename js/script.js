function addClassActiveMenuMobile(){
  let ul = document.getElementsByClassName("ul-mobile-menu");
  let item1 = document.querySelectorAll('.nav-menu .mobile-menu .item-1')[0];
  let item3 = document.querySelectorAll('.nav-menu .mobile-menu .item-3')[0];
  let item2 = document.querySelectorAll('.nav-menu .mobile-menu .item-2')[0];

  ul[0].classList.toggle("active");
  item1.classList.toggle('animation');
  item3.classList.toggle('animation');
  item2.classList.toggle('animation');

  document.getElementById("container").classList.toggle("fixed");

}
function addClassDesactiveMenuMobile(){
  let ul = document.getElementsByClassName("ul-mobile-menu");
  ul[0].classList.toggle("active");

  document.getElementById("container").classList.toggle("fixed");
}