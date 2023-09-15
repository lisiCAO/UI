/**
 * --------------------------------------------------------------
 * Balloon Typing Game - A fun and interactive typing game.
 * 
 * Author: Lisi Cao - Team ForxTrot
 * Date: September 15, 2023
 * Version: 1.0.0
 * 
 * Copyright (C) 2023 Team ForxTrot. All rights reserved.
 * 
 */

// Configuration for the Phaser game.
let gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "gameArea",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let spawnRate = 0.02; // default building rate
let balloonSpeed = -100; // default rising rate
let game = new Phaser.Game(gameConfig); // import Phaser Gmae framework
let balloons = [];
let score = 0;

function preload() {
  // Loading basic resources. Replace these with game assets.
  this.load.image("balloon", "path_to_balloon_image.png");
}

function create() {
  // Called once at the beginning
  this.input.keyboard.on("keydown", checkBalloon);

  let isPaused = false; // initial: not pause
  document.getElementById("pauseButton").addEventListener("click", function () {
    if (!isPaused) {
      game.scene.pause("default"); // pause scene;
      document.getElementById("pauseButton").innerText = "Resume Game";
    } else {
      game.scene.resume("default"); // resume scene;
      document.getElementById("pauseButton").innerText = "Pause Game";
    }
    isPaused = !isPaused; // swich state
  });
  // create score table
  scoreText = this.add.text(10, 10, "Score: 0", {
    fontSize: "32px",
    fill: "#fff",
  });

  // creates timers
  timerText = this.add.text(gameConfig.width - 200, 10, "Time: 60s", {
    fontSize: "32px",
    fill: "#fff",
  });

  // set 60 s timers
  gameTimer = this.time.addEvent({
    delay: 1000,
    callback: updateTime,
    callbackScope: this,
    loop: false, // no loop
    repeat: 59, // repeat each second
  });
}

function updateTime() {
    let timeLeft = Math.floor(gameTimer.getOverallRemainingSeconds());
    timerText.setText('Time: ' + timeLeft + 's');
    if (timeLeft <= 0) {
        gameTimer.remove();
        endGame();  // call ending function to end game
    }
}

function endGame() {
    game.scene.pause('default');  // pause the game
    document.getElementById('finalScore').innerText = score;  // set final score.

    // Save score to LocalStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a); // from large to small
    if (leaderboard.length > 10) leaderboard.length = 10;  // keep ten recordings
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    $('#endGameModal').modal('show');  // show modal
}


function update() {
  // Called 60 times per second (or as per the frame rate of the game)
  spawnBalloon.call(this);
  // Update position of text on balloons
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    if (balloon.balloonText) {
      balloon.balloonText.x = balloon.x;
      balloon.balloonText.y = balloon.y;
    }
  }
}

function spawnBalloon() {
    if (Math.random() < spawnRate) { // use spawnRate to controle the appearance of balloons
        let x = Math.random() * gameConfig.width;
        let balloon = this.physics.add.image(x, gameConfig.height, "balloon");
        balloon.setVelocityY(balloonSpeed); // use balloonSpeed to control the speed of rising
    

    balloon.character = String.fromCharCode(
      97 + Math.floor(Math.random() * 26)
    ); // Assigns a random letter

    let balloonText = this.add.text(balloon.x, balloon.y, balloon.character, {
      fontSize: "32px",
      fill: "#fff",
    });
    balloonText.setOrigin(0.5); // center the text
    balloon.balloonText = balloonText; // Attach the text object to the balloon for future reference

    balloons.push(balloon);
  }
}

function checkBalloon(event) {
  let char = event.key;
  for (let i = balloons.length - 1; i >= 0; i--) {
    // iterate from the end
    if (balloons[i].character === char) {
      balloons[i].balloonText.destroy(); // destroy the text object
      balloons[i].destroy(); // destroy the balloon
      balloons.splice(i, 1); // remove from balloons array
      score++;
      scoreText.setText("Score: " + score);
    }
  }
}

document.getElementById('startButton').addEventListener('click', function() {
    const difficulty = document.getElementById('difficultySelector').value;

    // Set game difficulty based on selection.
    switch(difficulty) {
        case 'easy':
            spawnRate = 0.01;
            balloonSpeed = -50;
            break;
        case 'medium':
            spawnRate = 0.02;
            balloonSpeed = -100;
            break;
        case 'hard':
            spawnRate = 0.03;
            balloonSpeed = -150;
            break;
    }

    $('#game-modal').modal('hide');
    game.scene.start('default'); // Start the Phaser game scene.
});

document.getElementById("endButton").addEventListener("click", function () {
  // reload the page for ending the game
  location.reload();

  // window.location.href = 'homepage_url';
});

  document.getElementById("leaderboardButton").addEventListener("click", function () {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    let leaderboardHTML = '';

    for (let i = 0; i < leaderboard.length; i++) {
        leaderboardHTML += `<li>${i + 1}. Score: ${leaderboard[i]}</li>`;
    }

    document.getElementById('leaderboardList').innerHTML = leaderboardHTML;
    $('#leaderboardModal').modal('show');  // show leadertable
});
