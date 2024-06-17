'use strict';

// Task 1

//Question : The user to append a new element in the navigation menu named "Hire me" after the projects.

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerHTML = `<a href = "#">Hire Me</a>`;
ul.appendChild(li);

//Task 2

//Question : The user to change the search input placeholder text to "search" ==> "Search my projects"

const search = document.querySelector('.search-field input');
search.placeholder = 'Search My Projects';

//Task 3

//Question : The user to change the "a freelancer " to "an employee"and also change the company name to "iNeuron intelligence Pvt Ltd" in hero text section

const span = document.querySelectorAll('.hero-left-section p span');
span[1].innerHTML = 'an employee';
span[2].innerHTML = 'iNeuron intelligence Pvt Ltd';

//Task 4

//Question : The user to change the hero avtar image to new avatar image

const img = document.querySelector('.hero-right-section img');
img.src='/vitthal.png';

//Task 5

//Question : The user to append a new btn element in the hero-right-section-btns class btn named "Support me"

const btns = document.querySelector('.hero-right-section-btns');
const newBtn=document.createElement('button');
newBtn.innerHTML='Support Me';
btns.appendChild(newBtn);
