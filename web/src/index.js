// mod\bacteria\web\src\index.js

import { startGame } from './main.js';

const keyMap = {
  water:      'ecoli',
  sink:        'listeria',
  palm:        'staph',
  bread:       'penicillium'
};

const intro = document.getElementById('intro-wrapper');
const game  = document.getElementById('game');

document.querySelectorAll('.choice').forEach(el => {
  el.addEventListener('click', () => {
    const speciesKey = keyMap[el.dataset.bac];
    intro.style.display = 'none';
    game.style.display  = 'block';
    startGame(speciesKey);
  });
});
