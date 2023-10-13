/**
 * @file Manages modal displays such as the winner announcement or game draw.
 * @description Contains functions to show, hide, or update modals.
 * 
 * TODO:
 * - Add animations or effects when showing modals
 * - Implement modals for other notifications like errors
 * 
 * @param {Object} player - Contains player details like name, score, etc.
 */

// TODO: Add a close or dismiss button logic for modals
import { utilities } from "../modules/utilities.js";

/** 
 * @description Returns an object with functions to show, hide, or render modals.
 * @param {string} type - The type of modal to show, hide, or render.
 * @returns {Object} An object with functions to show, hide, or render modals.
 * @example
 * const modals = getModals('launch');
 * modals.show();
 * modals.render();
 * modals.hide();
 */
export function getModals(type) {
    const api = {
        show: function(optionalData) {
            showModal(type, optionalData);
        },
        render: function(optionalData) {
            switch (type) {
                case 'launch':
                    renderLaunchModal();
                    break;
                case 'game':
                    renderLeaderboardModal();
                    break;
                case 'gameRules':
                    renderGameRulesModal(optionalData);
                    break;
                default:
                    console.log('Unknown modal type');
            }
        },
        hide: function() {
            hideModal(`.${type}-modal`);
        }
    };

    return api;
}
/* eslint-disable no-unused-vars */
let isGameRulesRendered = false;
let isLeaderboardRendered = false;
let isLaunchRendered = false;

/**
 * 渲染启动模态窗口。
 * @description 渲染启动模态窗口，包括玩家数量选择、符号选择、游戏板大小选择和按钮。
 */
function renderLaunchModal(){
    console.log("renderLaunchModal is called");
    let launchModal = document.querySelector('.launch-modal');
    let launcher = document.querySelector('#container'); 
    if(!launcher){
    // 创建 Launcher 容器
    launcher = document.createElement('div');
    launcher.id = 'container';
    launchModal.appendChild(launcher);
    }

    launcher.innerHTML = '';
 
    // 创建标题
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Game Launcher';
    launcher.appendChild(title);

    // 创建玩家数量选择部分
    const playerNumberSection = document.createElement('section');
    playerNumberSection.id = 'player-number-selection';
    ['2', '3'].forEach((number) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'player-number';
        input.value = number;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${number} Players`));
        playerNumberSection.appendChild(label);
    });
    launcher.appendChild(playerNumberSection);

    // 创建符号选择部分
    const symbolSection = document.createElement('section');
    symbolSection.id = 'symbol-selection';
    launcher.appendChild(symbolSection);

    // 创建游戏板大小选择部分
    const boardSizeSection = document.createElement('section');
    const boardSizeLabel = document.createElement('label');
    boardSizeLabel.htmlFor = 'board-size-selection';
    boardSizeLabel.textContent = 'Choose board size:';
    const boardSizeSelect = document.createElement('select');
    boardSizeSelect.id = 'board-size-selection';
    boardSizeSelect.name = 'board-size';
    ['easy', 'middle', 'hard'].forEach((level) => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level === 'easy' ? 'Easy (4x4)' : level === 'middle' ? 'Middle (7x7)' : 'Hard (10x10)';
        boardSizeSelect.appendChild(option);
    });
    boardSizeSection.appendChild(boardSizeLabel);
    boardSizeSection.appendChild(boardSizeSelect);
    launcher.appendChild(boardSizeSection);

    // 创建按钮
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'btn';
    ['Start Game', 'Leader Board'].forEach((buttonText) => {
        const button = document.createElement('button');
        button.id = buttonText === 'Start Game' ? 'start-game' : 'show-leaderboard';
        button.textContent = buttonText;
        buttonDiv.appendChild(button);
    });
    launcher.appendChild(buttonDiv);
    console.log('Launch modal is rendered');
    
}

/**
 * 渲染排行榜模态窗口。
 * @description 渲染排行榜模态窗口，包括玩家排名、玩家名称、玩家分数和按钮。
 */
function renderLeaderboardModal() {
    console.log('Leaderboard modal is rendered');
    // 创建 Leaderboard 容器
}

/**
 * 渲染游戏规则模态窗口。
 * @description 渲染游戏规则模态窗口，包括游戏规则、游戏规则的标题、游戏规则的内容和按钮。
 * @param {Object} gameRulesData - 包含游戏规则的数据。
 */
function renderGameRulesModal(gameRulesData) {
    let gameRulesModal = document.querySelector('.game-rule-modal');
    let gameRulesContainer = gameRulesModal.querySelector('.container');
    
    if (!gameRulesContainer) {
        gameRulesContainer = document.createElement('div');
        gameRulesContainer.classList.add('container');
        gameRulesModal.appendChild(gameRulesContainer);  
    }

    gameRulesContainer.innerHTML = '';

    let btnClose = closeBtnCreator();
    gameRulesContainer.appendChild(btnClose);

    btnClose.addEventListener('click', function() {
        hideModal('.game-rule-modal');
        getModals('launch').show();
    });
    
    gameRulesData.sections.forEach(section => {
        // 创建 section 容器
        const sectionElem = document.createElement('div');
        sectionElem.classList.add('section');
        
        // 添加标题
        if (section.title) {
            const title = document.createElement('h2');
            title.innerText = section.title;
            sectionElem.appendChild(title);
        }
        
        // 添加内容
        if (section.content) {
            const content = document.createElement('p');
            content.innerText = section.content;
            sectionElem.appendChild(content);
        }
        
        // 处理 subsections
        if (section.subsections) {
            const subSectionsContainer = document.createElement('div');
            subSectionsContainer.classList.add('subsections');
    
            section.subsections.forEach(sub => {
                const subSectionElem = document.createElement('div');
                subSectionElem.classList.add('subsection');
    
                // 添加子标题
                if (sub.title) {
                    const subTitle = document.createElement('h3');
                    subTitle.innerText = sub.title;
                    subSectionElem.appendChild(subTitle);
                }
    
                // 添加子内容
                if (sub.content) {
                    const subContent = document.createElement('p');
                    subContent.innerText = sub.content;
                    subSectionElem.appendChild(subContent);
                }
    
                subSectionsContainer.appendChild(subSectionElem);
            });
    
            sectionElem.appendChild(subSectionsContainer);
        }
        
        gameRulesContainer.appendChild(sectionElem);
    });
    console.log('Game rules modal is rendered');
}

/**
 * 创建关闭按钮。
 * @returns {HTMLButtonElement} - 返回一个关闭按钮。
 */
function closeBtnCreator(){
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'Close';
    return closeButton;
}

/**
 * 显示模态窗口。
 * @description 显示模态窗口，包括游戏规则、排行榜和启动模态窗口。
 * @param {String} type modal 的类型
 * @param {Object} optionalData 包含游戏规则的数据。
 */
function showModal(type, optionalData) {
    // 先隐藏所有可能打开的模态窗口
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.style.display = 'none';
    });

    // 根据 type 参数打开对应的模态窗口
    switch (type) {
        case 'gameRules':
            if (!isGameRulesRendered) {
                renderGameRulesModal(optionalData);
                isGameRulesRendered = true;
            }
            document.querySelector('.game-rule-modal').style.display = 'block';
            break;
        case 'leaderboard':
            if (!isLeaderboardRendered) {
                renderLeaderboardModal();
                isLeaderboardRendered = true;
            }
            document.querySelector('.leaderboard-modal').style.display = 'block';
            break;
        case 'launch':
            if (!isLaunchRendered) {
                renderLaunchModal();
                isLaunchRendered = true;
            }
            document.querySelector('.launch-modal').style.display = 'block';
            break;
        default:
            console.log('Unknown modal type');
    }
}


/**
 * 隐藏模态窗口。
 * @description 隐藏模态窗口。
 * @param {String} modalSelector modal 的选择器
 * @example
 * hideModal('.launch-modal');
 */
function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal) {
        modal.style.display = 'none';
    }
}


/**
 * 
 * @param {data} playerXScore 玩家X的有效操作
 * @param {data} playerOScore 玩家O的有效操作
 */
function updateStatusBoard(playerXScore, playerOScore){
    // 更新玩家的有效操作面板
}

