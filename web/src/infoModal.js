// src/infoModal.js

export function displayIntroInfo(info, onContinue) {
    const modal = document.createElement('div');
    modal.id = 'challenge-modal';
  
    const content = document.createElement('div');
    content.classList.add('challenge-modal-content');
  
    const titleElem = document.createElement('h2');
    titleElem.classList.add('challenge-title');
    titleElem.textContent = info.title;
    content.appendChild(titleElem);
  
    const msgWrap = document.createElement('div');
    msgWrap.classList.add('challenge-message-wrap');
  
    const msgElem = document.createElement('p');
    msgElem.textContent = info.message;
    msgWrap.appendChild(msgElem);
    content.appendChild(msgWrap);
  
    const actions = document.createElement('div');
    actions.classList.add('challenge-actions');
  
    const startBtn = document.createElement('button');
    startBtn.classList.add('challenge-button', 'continue-btn');
    startBtn.textContent = 'PRADĖTI';
    startBtn.addEventListener('click', () => {
      modal.remove();
      onContinue();
    });
    actions.appendChild(startBtn);
  
    content.appendChild(actions);
    modal.appendChild(content);
  
    document.getElementById('game').appendChild(modal);
  }
  