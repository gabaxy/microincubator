// mod\bacteria\web\src\temp.js

import { SpeciesSimulationParameters } from './parameters.js';

export function createThermometer(speciesKey) {
  const container = document.getElementById("thermometer-container");
  container.innerHTML = "";

  const scale = document.createElement("div");
  scale.classList.add("thermometer-scale");
  for (let t = 50; t >= -15; t -= 5) {
    const tick = document.createElement("div");
    tick.classList.add("thermometer-tick");
    tick.textContent = t;
    scale.appendChild(tick);
  }
  container.appendChild(scale);

  const fill = document.createElement("div");
  fill.classList.add("thermometer-fill");
  container.appendChild(fill);

  const label = document.createElement("div");
  label.classList.add("thermometer-label");
  container.appendChild(label);

  function updateTemperature(temp) {
    let percentage = ((temp + 20) / 65) * 91;
    percentage = Math.max(0, Math.min(100, percentage));
    fill.style.height = percentage + "%";

    let fillColor = "#ffa500";
    const growthTemp = SpeciesSimulationParameters[speciesKey]?.optimalTemp ?? 20;

    if (temp >= growthTemp - 2 && temp <= growthTemp + 3) {
      fillColor = "#00ff00";
    } else if (temp < growthTemp - 10) {
      fillColor = "#0000ff";
    } else if (temp >= growthTemp + 10) {
      fillColor = "#ff0000";
    }
    fill.style.backgroundColor = fillColor;
    label.textContent = temp + "°C";
  }

  const defaultTemp = SpeciesSimulationParameters[speciesKey]?.optimalTemp ?? 20;
  updateTemperature(defaultTemp);

  return { updateTemperature };
}
