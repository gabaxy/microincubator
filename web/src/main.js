// mod\bacteria\web\src\main.js

import { initPetriScene } from './petri.js';
import { createThermometer } from './temp.js';
import { getSpeciesChallenges, triggerScheduledChallenges } from './challenges.js';
import { RodBacteria } from './species/rods.js';
import { StaphBacteria } from './species/staph.js';
import { Penicillium } from './species/penicillium.js';
import { displayIntroInfo } from './infoModal.js';
import { SpeciesSimulationParameters, IntroInfo, AgarColors, SpeciesColors } from './parameters.js';

const dayCounter = document.getElementById('day-counter');
const growthFactorSpan = document.getElementById('growth-factor');

let sceneObjects;
let thermometer;
let stepsPassed = 0;
let challengeIndex = 0;
let stepTimeout;
let speciesKey = null;
let growthMultiplier = 1;
let bacteriaGrowthRate = 1;
let totalSteps = 0;
let stepDuration;
let challengesQueue = [];
let agar;

let currentBacteria = null;


window.growthMultiplier = growthMultiplier;
window.hiddenPoints = 0;

function gameOverModal() {
  const modal = document.createElement("div");
  modal.id = "gameover-modal"; 

  const header = document.createElement("h1");
  header.textContent = "Kolonija neišgyveno... :(";
  modal.appendChild(header);

  const score = document.createElement("p");
  score.textContent = `Surinkti taškai: ${window.hiddenPoints}`;
  modal.appendChild(score);

  const btn = document.createElement("button");
  btn.textContent = "Baigti";
  btn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  modal.appendChild(btn);

  document.body.appendChild(modal);
}

function endGame() {
  const modal = document.createElement("div");
  modal.id = "gameover-modal"; 

  const header = document.createElement("h1");
  header.textContent = "Bakterijų kolonija išgyveno!";
  modal.appendChild(header);

  const score = document.createElement("p");
  score.textContent = `Surinkti taškai: ${window.hiddenPoints}`;
  modal.appendChild(score);

  const btn = document.createElement("button");
  btn.textContent = "Baigti";
  btn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  modal.appendChild(btn);

  document.body.appendChild(modal);

  submitScore(window.hiddenPoints);
}

// don’t forget to expose them globally if you need elsewhere:
window.gameOverModal = gameOverModal;
window.endGame       = endGame;

export function createSpeciesInstance(scene, speciesKey) {
  const color = SpeciesColors[speciesKey] ?? 0xffffff;
  const speciesSim = SpeciesSimulationParameters[speciesKey];
  switch (speciesKey) {
    case 'ecoli':
    case 'listeria':
      return new RodBacteria(scene, color, speciesSim.totalSteps);
    case 'staph':
      return new StaphBacteria(scene, color);
    case 'penicillium':
      return new Penicillium(scene, color);
    default:
      throw new Error('Unknown species key: ' + speciesKey);
  }
}

function startGame(selectedSpecies) {
  speciesKey = selectedSpecies;
  agar = AgarColors[speciesKey];

  displayIntroInfo(IntroInfo[speciesKey], () => {
    launchScene();
  });
}

function launchScene() {
  stepDuration = SpeciesSimulationParameters[speciesKey].stepDuration;
  totalSteps = SpeciesSimulationParameters[speciesKey].totalSteps;
  growthMultiplier = 1;
  bacteriaGrowthRate = 1;
  stepsPassed = 0;
  challengeIndex = 0;
  window.growthMultiplier = growthMultiplier;
  window.hiddenPoints = 0;

  challengesQueue = getSpeciesChallenges(speciesKey);
  sceneObjects = initPetriScene(agar);
  thermometer = createThermometer(speciesKey);
  thermometer.updateTemperature(SpeciesSimulationParameters[speciesKey].optimalTemp);
  window.thermometer = thermometer;

  currentBacteria = createSpeciesInstance(sceneObjects.scene, speciesKey);

  updateUI();
  stepTimeout = setTimeout(updateStep, stepDuration);
}

function updateStep() {
  stepsPassed++;
  updateUI();

  currentBacteria.update();

  if (
    challengeIndex < challengesQueue.length &&
    stepsPassed === (challengeIndex + 1) * Math.floor(totalSteps / challengesQueue.length)
  ) {
    const challengeToShow = challengesQueue[challengeIndex];
    challengeIndex++;

    triggerScheduledChallenges(
      [challengeToShow],
      () => {
        continueSimulation();
      },
      sceneObjects.scene,
      (scene, fraction) => {
        if (fraction === 1) {
          currentBacteria.killAll();
          gameOverModal();
        } else if (fraction > 0) {
          currentBacteria.killFraction(fraction);
        }
      }
    );
  } else {
    continueSimulation();
  }
}

function continueSimulation() {
  if (bacteriaGrowthRate === 0 || growthMultiplier === 0) {
    currentBacteria.killAll();
    gameOverModal();
    return;
  }

  if (stepsPassed < totalSteps) {
    stepTimeout = setTimeout(updateStep, stepDuration);
  } else {
    endGame();
  }
}
let hrs;
function updateUI() {
  const sim = SpeciesSimulationParameters[speciesKey];
  hrs = (stepsPassed * sim.time) / 60;
  dayCounter.textContent = hrs.toFixed(2);
  growthFactorSpan.textContent = (window.growthMultiplier ?? 1).toFixed(2);
  if (thermometer) {
    const temp = window.temperature != null
    ? window.temperature
    : SpeciesSimulationParameters[speciesKey].optimalTemp;
    thermometer.updateTemperature(temp);
  }
}

export { startGame };
