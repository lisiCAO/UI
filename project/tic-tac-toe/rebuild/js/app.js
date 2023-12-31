/**
 * @file This file serves as the entry point for the Gravity Tic Tac Toe game application.
 * @description It initializes the game, imports necessary modules, and ties everything together.
 *
 *  * TODO:
 * - Add error handling and user feedback mechanisms
 * - Optimize for performance on slower devices
 *
 * @requires ./modules/gameLogic
 * @requires ./modules/utilities
 * @requires ./components/navbar
 * @requires ./components/game-board
 * @requires ./components/modals
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import MDN Import}
 */

// import parts of the app
import * as GameLogic from "./modules/gameLogic.js";
import { utilities } from "./modules/utilities.js";
import { Navbar } from "./components/navbar.js";
import * as GameBoard from "./components/game-board.js";
import * as Modals from "./components/modals.js";

// TODO: Implement the game's start and reset mechanisms here

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  console.log(utilities);
  console.log(utilities.launchModal);

  utilities.launchNavbar.render();
  console.log("renderLaunchNavbar is called");
  utilities.launchNavbar.setup();

  utilities.launchModal.show();
});
