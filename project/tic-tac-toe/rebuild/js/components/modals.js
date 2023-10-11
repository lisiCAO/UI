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

export function getModal(type){
    // TODO: Add event listeners for user interactions within setupModals
    if(type === 'launch'){
        return renderLaunchModal;
    }else if (type === 'game'){
        return renderLeaderboardModal;
    }else if(type === 'gameRules'){    
        return renderGameRulesModal;
    }
}

function renderLaunchModal(){
    const launcher = document.createElement('div');
    launcher.id = 'launcher';

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

    // 将整个 Launcher 插入到主体中的 'launch-container' div
    const launchContainer = document.querySelector('.launch-container');
    launchContainer.appendChild(launcher);
}

function renderLeaderboardModal() {
}

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
    
    gameRulesModal.style.display = 'block';
    document.querySelector(".launch-container").style.display = "none";
}


function closeBtnCreator(){
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'Close';
    return closeButton;
}

/**
 * 显示模态窗口并传递特定消息。
 * @param {string} message - 要显示的消息
 */
function showmodal(message){
    // show modal
}

/**
 * 隐藏模态窗口。
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

