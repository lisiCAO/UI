/**
 * @file Manages the top navigation bar, scores, and other game-related info.
 * @description Responsible for updating scores, player names, and other dynamic content on the navbar.
 * 
 * TODO:
 * - Add a restart or new game button
 * - Implement dynamic player name input
 */

import { getModal } from "./modals.js";

// TODO: Add logic to update scores dynamically based on game progress
let gameRulesData = {};

export class Navbar{
    constructor(mode){
        this.mode = mode;
    }
    setup(){
        if(this.mode === 'launch'){
            setupLaunchNavbar();
            console.log("setupLaunchNavbar is called");
        }else if(this.mode === 'game'){
            setupGameNavbar();
        }
    }

    render(){
        if(this.mode === 'launch'){
            renderLaunchNavbar();
        }else if(this.mode === 'game'){
            renderGameNavbar();
        }
    }
    
}

function renderLaunchNavbar(){
    // TODO: Render the initial navbar
    console.log("Starting renderLaunchNavbar");
    let navbar = document.querySelector('.navbar');
    let launch_navbar_container = document.createElement('div');
    launch_navbar_container.classList.add('launch-navbar-container');
    navbar.appendChild(launch_navbar_container);


    let logo_container = document.createElement('div');
    logo_container.classList.add('logo-container');
    let logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = '#';
    logo.alt = 'Logo';
    logo_container.appendChild(logo);
    launch_navbar_container.appendChild(logo_container);

    let title_container = document.createElement('div');
    title_container.classList.add('title-container');
    let title_text = document.createElement('h1');
    title_text.innerText = 'Tick Tack Toe';
    title_container.appendChild(title_text);
    launch_navbar_container.appendChild(title_container);

    let game_rule_form = document.createElement('form');
    game_rule_form.classList.add('form-container');
    game_rule_form.action = '#';
    game_rule_form.method = 'GET';

    let game_rule_btn = document.createElement('input');
    game_rule_btn.id = 'btn-showRules';
    game_rule_btn.type = 'button';
    game_rule_btn.value = 'View Rules';
    game_rule_btn.setAttribute('aria-label', 'View Rules');
    game_rule_btn.classList.add('game-rule-btn');
    game_rule_form.appendChild(game_rule_btn);
    launch_navbar_container.appendChild(game_rule_form);
    console.log("Ending renderLaunchNavbar");

};



function renderGameNavbar(){
    // TODO: Render the game navbar, including scores and player names
}

function setupLaunchNavbar(){
    loadGameRules();
}

function loadGameRules() {

    fetch("../../assets/data/game-guide.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Data: ", data);
            gameRulesData = data;
            const showRulesButton = document.getElementById('btn-showRules');
            if (showRulesButton) {
                showRulesButton.addEventListener('click', function(event){
                    event.preventDefault();
                    getModal('gameRules')(gameRulesData)
                });
            }
        })
        .catch((error) => {
            console.error("Fetch error: ", error.message);
        });
    }

    function setupGameNavbar(){

    };
