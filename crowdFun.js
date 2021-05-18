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
    const element1 = document.querySelectorAll(`#${target} .activeState`); 
    const element2 = document.querySelector(`#${target} .radio input`)
    const element3 = document.querySelector(`#${target} .proceed`);
    addOrRemove(true);
    element1.forEach(elem => {
      elem.classList.add('active');
    })
    element2.setAttribute('checked','');
    element3.addEventListener('click',function() {
      addOrRemove();
      thanks.classList.add('show');
    })
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
    iterate.querySelectorAll('.activeState').forEach(active =>{
      active.classList.add('active');
    })
    iterate.querySelector('.radio input').setAttribute('checked',' ');
    proceed.addEventListener('click',function() {
      addOrRemove();
      thanks.classList.add('show');
    })
  })
})

gotIt.addEventListener('click',function() {
  thanks.classList.remove('show');
})



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



