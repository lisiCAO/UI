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
let spawnRate = 0.02; // 默认出现率
let balloonSpeed = -100; // 默认上升速度
let game = new Phaser.Game(gameConfig);
let balloons = [];
let score = 0;

function preload() {
  // Loading basic resources. Replace these with your game assets.
  this.load.image("balloon", "path_to_balloon_image.png");
}

function create() {
  // Called once at the beginning
  this.input.keyboard.on("keydown", checkBalloon);

  let isPaused = false; // 初始状态：游戏未暂停
  document.getElementById("pauseButton").addEventListener("click", function () {
    if (!isPaused) {
      game.scene.pause("default"); // 暂停当前场景，假设场景的key是'default'
      document.getElementById("pauseButton").innerText = "Resume Game";
    } else {
      game.scene.resume("default"); // 恢复当前场景
      document.getElementById("pauseButton").innerText = "Pause Game";
    }
    isPaused = !isPaused; // 切换暂停状态
  });
  // 创建分数文本
  scoreText = this.add.text(10, 10, "Score: 0", {
    fontSize: "32px",
    fill: "#fff",
  });

  // 创建计时器文本
  timerText = this.add.text(gameConfig.width - 200, 10, "Time: 60s", {
    fontSize: "32px",
    fill: "#fff",
  });

  // 设置60秒计时器
  gameTimer = this.time.addEvent({
    delay: 1000,
    callback: updateTime,
    callbackScope: this,
    loop: false, // 不需要循环
    repeat: 59, // 重复59次
  });
}

function updateTime() {
    let timeLeft = Math.floor(gameTimer.getOverallRemainingSeconds());
    timerText.setText('Time: ' + timeLeft + 's');
    if (timeLeft <= 0) {
        gameTimer.remove();
        endGame();  // 调用游戏结束函数
    }
}

function endGame() {
    game.scene.pause('default');  // 暂停游戏
    document.getElementById('finalScore').innerText = score;  // 设置最终得分

    // Save score to LocalStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a); // 从大到小排序
    if (leaderboard.length > 10) leaderboard.length = 10;  // 只保留前10名
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    $('#endGameModal').modal('show');  // 显示模态框
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
    if (Math.random() < spawnRate) { // 使用 spawnRate 控制气球的出现率
        let x = Math.random() * gameConfig.width;
        let balloon = this.physics.add.image(x, gameConfig.height, "balloon");
        balloon.setVelocityY(balloonSpeed); // 使用 balloonSpeed 控制气球的上升速度
    

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
  // 这次我们不使用'break'，这样就可以检查和消除所有匹配的气球
  for (let i = balloons.length - 1; i >= 0; i--) {
    // 我们从后往前遍历数组，这样在移除元素时不会出问题
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
  // 如果您只是想重新加载页面来退出游戏，可以使用:
  location.reload();

  // 如果您有一个特定的主页或者其他页面，您想在退出游戏后导航到，使用:
  // window.location.href = 'your_homepage_url';
});

  document.getElementById("leaderboardButton").addEventListener("click", function () {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    let leaderboardHTML = '';

    for (let i = 0; i < leaderboard.length; i++) {
        leaderboardHTML += `<li>${i + 1}. Score: ${leaderboard[i]}</li>`;
    }

    document.getElementById('leaderboardList').innerHTML = leaderboardHTML;
    $('#leaderboardModal').modal('show');  // 显示排行榜模态框
});
