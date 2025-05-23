// mod\bacteria\web\src\parameters.js

// rūšiai specifinės spalvos
export const AgarColors = {
  ecoli:       0xf5deb3, // LB agaras
  listeria:    0xecffbd, // bazinis Listeria agaras
  staph:       0xffe4b5, // Triptono sojų agaras
  penicillium: 0xfff8dc  // Sabouraud dekstrozės agaras
};

export const SpeciesColors = {
  ecoli:       0x3a86ff, // ryškiai mėlyna
  listeria:    0x1d3557, // tamsiai mėlyna
  staph:       0xffc300, // sodri geltona
  penicillium: 0x445950  // žalsvai melsva
};

// kiekvienai rūšiai specifiniai simuliacijos parametrai pagal augimo trukmę
export const SpeciesSimulationParameters = {
  ecoli:       { stepDuration: 1000, totalSteps: 54, optimalTemp: 37, time: 10 },
  listeria:    { stepDuration: 1000, totalSteps: 48, optimalTemp: 37, time: 30 }, 
  staph:       { stepDuration: 1000, totalSteps: 96, optimalTemp: 37, time: 15 },
  penicillium: { stepDuration: 1000, totalSteps: 72, optimalTemp: 20, time: 120 }
};

// iššūkių pasiskirstymas
export const speciesChallengeRanges = {
  ecoli:       [  1, 10 ],
  listeria:    [ 11, 20 ],
  staph:       [ 21, 29 ],
  penicillium: [ 30, 40 ]
};

export const IntroInfo = {
  ecoli: {
    title: 'Escherichia coli',
    message: `Pasiruošk greitam augimui!

Ši bakterija yra auginama gelsvame LB agare, o pati spindi ryškiai mėlyna spalva. 
Petri lėkštelėje viskas juda greitai – bakterijos dalijasi 3 kartus per valandą.

Tavęs laukia 10 iššūkių. Saugokis gyvybės ir mirties klausimo!
Jis gali nužudyti visą tavo koloniją!`
  },

  listeria: {
    title: 'Listeria monocytogenes',
    message: `Kruopšti, bet pavojinga.

Ši bakterija yra auginama žalsvame baziniame agare, o jos kolonijos tamsiai mėlynos. 
Augimas lėtas – tik kartą per valandą. Bet atsakyti teks greitai.

Tavęs laukia 10 iššūkių. Saugokis gyvybės ir mirties klausimo!
Jis gali nužudyti visą tavo koloniją!`
  },

  staph: {
    title: 'Staphylococcus aureus',
    message: `Auksinė klasika!

Ši bakterija gyvena ant gelsvai rudo triptozės sojos agaro, o pati šviečia auksu.
Augimas spartus – dalijasi 2 kartus per valandą. 

Tavęs laukia 10 iššūkių. Saugokis gyvybės ir mirties klausimo!
Jis gali nužudyti visą tavo koloniją!`
  },

  penicillium: {
    title: 'Penicillium spp.',
    message: `Lėtas, bet užtikrintas.

Grybas yra auginamas gelsvame Sabouraud agare, Žalsvai melsvi grybo hifai ir konidijos. 
Pelėsis - lėtas, dauginasi tik 4 kartus per parą, tad žaidimas trunka 6 greitas dienas.

Tavęs laukia 10 iššūkių. Saugokis gyvybės ir mirties klausimo!
Jis gali nužudyti visą tavo koloniją!`
  }
};




