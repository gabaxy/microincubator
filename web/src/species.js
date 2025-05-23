// mod\bacteria\web\src\species.js

import { RodBacteria } from './species/rods.js';
import { StaphBacteria } from './species/staph.js';
import { Penicillium } from './species/penicillium.js';

const speciesInstances = new Map();

export function createSpeciesInstance(scene, speciesKey) {
  if (speciesInstances.has(speciesKey)) {
    return speciesInstances.get(speciesKey);
  }

  let instance;
  switch (speciesKey) {
    case 'ecoli':
    case 'listeria':
      instance = new RodBacteria(scene, speciesKey);
      break;
    case 'staph':
      instance = new StaphBacteria(scene);
      break;
    case 'penicillium':
      instance = new Penicillium(scene);
      break;
    default:
      throw new Error(`Unknown speciesKey: ${speciesKey}`);
  }

  speciesInstances.set(speciesKey, instance);
  return instance;
}

export function growSpecies(speciesKey, growthRate, growthMultiplier) {
  const instance = speciesInstances.get(speciesKey);
  if (!instance) return;
  instance.grow(growthRate, growthMultiplier);
}

export function divideSpecies(speciesKey) {
  const instance = speciesInstances.get(speciesKey);
  if (!instance) return;
  if (typeof instance.divide === 'function') {
    instance.divide();
  }
}

export function killAllSpecies(speciesKey) {
  const instance = speciesInstances.get(speciesKey);
  if (!instance) return;
  if (typeof instance.killAll === 'function') {
    instance.killAll();
  }
}

export function killFractionSpecies(speciesKey, fraction) {
  const instance = speciesInstances.get(speciesKey);
  if (!instance) return;
  if (typeof instance.killFraction === 'function') {
    instance.killFraction(fraction);
  }
}

export function resetSpecies() {
  speciesInstances.clear();
}
