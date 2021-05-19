'use strict';

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const module = document.querySelector('.module');
const buttons = document.querySelectorAll('[data-id]');
const activeState = document.querySelectorAll('.mainTarget .activeState');
const mainTarget = document.querySelectorAll('.mainTarget');
const eachInput = document.querySelectorAll('.mainTarget .radio input')
const closes = document.querySelector('.payPlans svg');
const thanks = document.querySelector('.thanks');
const proceed = document.querySelector('.proceed');
const gotIt = document.querySelector('.thanks button');

buttons.forEach(button => {
  button.addEventListener('click',function(){
    let target = button.dataset.id;
    const element = document.querySelector(`#${target}`); 
    addOrRemove(true);
    display(element);
  })
})

closes.addEventListener('click',function() {
  addOrRemove();
})



mainTarget.forEach(iterate => {
  iterate.addEventListener('click',function(e) {
    mainTarget.forEach(r => {
      if(r !== iterate) {
        removeActive();
      }
    })
    display(iterate);
  })
})

gotIt.addEventListener('click',function() {
  thanks.classList.remove('show');
})


function display(item) {
  item.querySelectorAll('.activeState').forEach(elem => {
    elem.classList.add('active');
  })
  item.querySelector('.radio input').setAttribute('checked','');
  item.querySelector('.proceed').addEventListener('click',function() {
    addOrRemove();
    thanks.classList.add('show');
  })
}



function addOrRemove(value = false) {
  if(value) {
    module.classList.add('show');
  }else {
    module.classList.remove('show');
  }
  removeActive();
}

function removeActive() {
  activeState.forEach(activeOne => {
    activeOne.classList.remove('active');
  })
  eachInput.forEach(close => {
    close.removeAttribute('checked');
  })
}



menu.src = 'images/icon-hamburger.svg';

menu.addEventListener('click',function() {
  nav.classList.toggle('active');
  if(nav.classList.contains('active')) {
    menu.src = 'images/icon-close-menu.svg'
  } else {
    menu.src = 'images/icon-hamburger.svg';
  }
})



