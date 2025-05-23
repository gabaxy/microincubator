// mod\bacteria\web\src\challenges.js
import { speciesChallengeRanges } from './parameters.js';
import {} from './temp.js'

export const challenges = [
    // E. coli
    {
      id: 1,
      title: 'pH KRITIMAS! (7 → 5)',
      message: 'ĮSPĖJIMAS! Terpės pH nukrito iki 5. Kaip neutralizuoti terpę, kad nežūtų kolonija?',
      hint: 'Pagalvok apie susidarančias druskas ir švelnų pH kėlimą.',
      choices: ['Įpilti 0,1 M NaHCO₃','Įpilti 0,1 M NaOH'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! NaHCO₃ neutralizuoja HCl, susidaro NaCl ir CO₂ burbulai.',
      incorrectMessage: 'Neteisingai. NaOH būtų per stipri bazė – pH šuolis ir druskos perteklius.',
      correctMoreInfo: 'NaHCO₃ švelniai pakelia pH iki ~7 be staigių svyravimų, bakterijos išlieka gyvybingos ir toliau dauginasi optimaliai.',
      incorrectMoreInfo: 'Staigus NaOH dozavimas pakelia pH virš 8, druskos koncentracija per aukšta – E. coli ląstelės patiria šoką dėl osmosinio streso.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.5,
      gameOver:  false,
      points: 10
    },
    {
      id: 2,
      title: 'pH PAKILIMAS! (7 → 9)',
      message: 'ĮSPĖJIMAS! Terpės pH pakilo iki 9. Ką pilsite, atsižvelgdami į druskos susidarymą?',
      hint: 'Atsimink, kad stiprios ir silpnos rūgštys formuoja skirtingas druskas.',
      choices: ['0,1 M HCl','0,1 M H₂SO₄'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! HCl suteikia NaCl, greitai atstatydama pH.',
      incorrectMessage: 'Neteisingai. H₂SO₄ sudarytų Na₂SO₄, veikiantis lėtai ir gali susidaryti toksiški anijonai.',
      correctMoreInfo: 'HCl greitai pakoreguoja pH iki ~7, druska tirpsta, pH stabilus, bakterijos nepraranda gyvybingumo.',
      incorrectMoreInfo: 'H₂SO₄ formuoja sieros druskas (Na₂SO₄), kurios kaupiasi ir slopina dauginimąsi, dalis ląstelių žūva toksiškoje terpėje.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.5,
      gameOver:  false,
      points: 10
    },
    {
      id: 3,
      title: 'OSMO STRESAS! (0,9 % → 2 % NaCl)',
      message: 'ĮSPĖJIMAS! Druskos kiekis padidėjo iki 2 % NaCl – bakterijos dehidratuojasi. Kaip palaikyti aktyvų vandens kiekį (aₖ) be papildomos druskos?',
      hint: 'Ieškok osmoreguliatorių, kurie nepakeičia druskos lygio.',
      choices: ['Įpilti 5 % glicerolio','Įpilti 2 % glikolio'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Glicerolis didina aₖ be pernelyg osmosinio streso.',
      incorrectMessage: 'Neteisingai. Glikolis mažiau osmoreguliuoja ląstelę.',
      correctMoreInfo: 'Glicerolis kaupiasi ląstelėje, kompensuoja druskos osmosinį slėgį, ląstelės išlaiko turgorą ir auga toliau šiek tiek sulėtėję.',
      incorrectMoreInfo: 'Glikolio atveju osmoreguliacija prasta, dauguma ląstelių praranda vandenį, iki 60 % kolonijos suyra dėl dehidratacijos.',
      correctMultiplier: 0.9,
      deathFractionCorrect: 0.1,
      incorrectMultiplier: 0.3,
      deathFractionIncorrect: 0.6,
      gameOver:  false,
      points: 10
    },
    {
      id: 4,
      title: 'DEGUONIES STOKA!',
      message: 'ĮSPĖJIMAS! Dangtis uždarytas – deguonies kiekis žemas. Kaip jį padidinti išlaikant sterilumą?',
      hint: 'Pagalvok apie fizinius būdus perkelti O₂ į terpę.',
      choices: ['Įdėti deguonies difuzorių plaukute','Įpilti dujų buferį (NaHCO₃)'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Difuzorius aeruoja terpę, pH nekintant.',
      incorrectMessage: 'Neteisingai. NaHCO₃ tik pakeis pH, bet neduos O₂. Augimas sustojo.',
      correctMoreInfo: 'Deguonies difuzorius švelniai prisotina terpę O₂, fermentacijos greitis atsinaujina, ląstelės auga toliau.',
      incorrectMoreInfo: 'NaHCO₃ keičia pH į šarminę pusę, bet deguonies nepadaugėja, anaerobinės dalys žūva, augimas užsibaigia.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.0,
      deathFractionIncorrect: 0.5,
      gameOver:  false,
      points: 10
    },
    {
      id: 5,
      title: 'TEMPERATŪROS NUOKRYPIS (20 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra nukrito iki 20 °C – augimas sulėtėjo. Kaip koreguoti?',
      hint: 'E. coli optimali temperatūra ~37 °C.',
      choices: ['Įjungti šildytuvą iki 37 °C','Kelti iki 25 °C ir palaukti'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! 37 °C optimaliai aktyvina fermentus.',
      incorrectMessage: 'Neteisingai. 25 °C vis dar per arti ribos, augimas lėtas.',
      correctMoreInfo: 'Temperatūra grįžta į optimalų intervalą, fermentai veikia pilnu tempu ir kolonijos atsigamina pagal įprastą grafiką.',
      incorrectMoreInfo: 'Pakėlus tik iki 25 °C fermentų aktyvumas tebėra ribotas, dalis bakterijų lieka „miegančios“ fazėje.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.0,
      gameOver:  false,
      points: 10
    },
    {
      id: 6,
      title: 'TEMPERATŪROS ŠUOLIS (45 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra pakilo iki 45 °C – fermentai denatūruojasi. Ką daryti?',
      hint: 'Išvengti staigių temperatūros pokyčių gali apsaugoti baltymus.',
      choices: ['Sumažinti palaipsniui iki 37 °C','Greitai vėsinti iki 20 °C'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Lėtas atvėsinimas apsaugo baltymus nuo denatūracijos.',
      incorrectMessage: 'Neteisingai. Staigus vėsinimas sukelia šoką ir suardys membranas.',
      correctMoreInfo: 'Temperatūra palaipsniui krenta, baltymai nepatiria šoko ir neagreguoja, bakterijos išlieka gyvybingos.',
      incorrectMoreInfo: 'Staigus atvėsinimas sukelia termokokinį šoką, ląstelių membranos įtrūksta ir žūva iki 25 %.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.75,
      deathFractionIncorrect: 0.25,
      gameOver:  false,
      points: 10
    },
    {
      id: 7,
      title: 'METABOLITŲ KAUPIMAS (acetatas)',
      message: 'ĮSPĖJIMAS! Terpėje kaupiasi acetatas, rūgštindamas pH. Kokį buferį naudoti?',
      hint: 'Pasirink neutralių pH buferį, ne rūgštinį.',
      choices: ['0,1 M Tris–HCl pH 7,2','0,1 M citrato buferį pH 5,0'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Tris stabilizuoja pH ~7 be toksiškų anijonų.',
      incorrectMessage: 'Neteisingai. Citratas dar sumažintų pH.',
      correctMoreInfo: 'Tris buferis palaiko neutralią terpę, acetatas nesikaupia, fermentai veikia įprastai.',
      incorrectMoreInfo: 'Citratas net silpnas rūgštis dar sumažina pH, bakterijos sustoja augti ir dalis žūva acidifikacijoje.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.5,
      gameOver:  false,
      points: 10
    },
    {
      id: 8,
      title: 'MAISTO TRŪKSTA!',
      message: 'GYVYBĖ AR MIRTIS! Peptonų liko mažai. Ką dėti vietoje jų?',
      hint: 'Bakterijos remiasi peptonais kaip azoto šaltiniu.',
      choices: ['1 % gliukozės','1 % bulvių ekstrakto'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Gliukozė – greitas angliavandenų šaltinis, palaikantis augimą.',
      incorrectMessage: 'Neteisingai. Bulvių ekstraktas turėtų būti buferiuojamas.',
      correctMoreInfo: 'Gliukozė greitai metabolizuojama, teikia energiją, dalis ląstelių persijungia į aktyvų augimą.',
      incorrectMoreInfo: 'Bulvių ekstraktas neturi pakankamai aminorūgščių, fermentai sulėtėja, kolonija po kelių iteracijų nustoja augti → GAME OVER.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.0,
      deathFractionIncorrect: 1.0,
      gameOver:  true,
      points: 15
    },
    {
      id: 9,
      title: 'AGARO KONSISTENCIJA',
      message: 'ĮSPĖJIMAS! Agar per tirštas – judėjimas ribotas. Kaip praskiedžiant sumažinti konsistenciją?',
      hint: 'Mažesnė agar koncentracija – mažesnis gelio standumas.',
      choices: ['Sumaišyti su 0,5 % agar buljonu','Įpilti 0,1 % agar papildomai'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Praskiedimas skiedžia gelį, bet palaiko barjerą.',
      incorrectMessage: 'Neteisingai. Papildomas agar tik sutirštins.',
      correctMoreInfo: 'Praskiedimas sumažina gelio standumą, bakterijos gali laisviau judėti ir plisti.',
      incorrectMoreInfo: 'Papildomas agar didina klampumą, judėjimas sutrinka, kolonijos negali plisti.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.0,
      gameOver:  false,
      points: 10
    },
    {
      id: 10,
      title: 'GREITAS pH TITRAVIMAS',
      message: 'ĮSPĖJIMAS! reikia greitai pakoreguoti pH. Koks buferis tinka?',
      hint: 'HEPES ypač veiksmingas ~pH 7,2.',
      choices: ['HEPES pH 7,2','ACE tris pH 8,0'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! HEPES greitai stabilizuoja pH ~7,2.',
      incorrectMessage: 'Neteisingai. Tris pH 8 bus per aukštas.',
      correctMoreInfo: 'HEPES turi tinkamą pKa, leidžia staigiai pasiekti pH 7,2, bakterijos lieka gyvybingos.',
      incorrectMoreInfo: 'Tris pakelia pH arti 8, fermentai silpnėja, iki 40 % ląstelių žūsta.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.0,
      gameOver:  false,
      points: 10
    },
  
    // Listeria monocytogenes
    {
      id: 11,
      title: 'pH KRITIMAS! (7 → 4,5)',
      message: 'ĮSPĖJIMAS! Terpės pH nukrito iki 4,5. Kaip stabilizuoti terpę, kad Listeria išliktų gyvybingos?',
      hint: 'Listeria gali augti pH nuo 4,5 iki 9,0, bet optimalus pH yra apie 7,0.',
      choices: ['Įpilti 0,1 M NaHCO₃', 'Įpilti 0,1 M NaOH'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! NaHCO₃ švelniai pakelia pH, išlaikant terpės stabilumą.',
      incorrectMessage: 'Neteisingai. NaOH gali per greitai pakelti pH, sukeldamas stresą ląstelėms.',
      correctMoreInfo: 'NaHCO₃ veikia kaip buferis, palaikydamas pH artimą optimaliam Listeria augimui.',
      incorrectMoreInfo: 'Staigus pH pokytis gali sukelti ląstelių šoką ir sumažinti gyvybingumą.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.3,
      gameOver: false,
      points: 10
    },
    {
      id: 12,
      title: 'TEMPERATŪROS ŠUOLIS! (37 °C → 45 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra pakilo iki 45 °C. Kaip išvengti fermentų denatūracijos?',
      hint: 'Listeria auga nuo -0,4 °C iki 45 °C, bet optimali temperatūra yra apie 30–37 °C.',
      choices: ['Palaipsniui atvėsinti iki 37 °C', 'Greitai atvėsinti iki 37 °C'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Palaipsnis atvėsinimas leidžia ląstelėms prisitaikyti.',
      incorrectMessage: 'Neteisingai. Staigus temperatūros pokytis gali sukelti šoką.',
      correctMoreInfo: 'Lėtas atvėsinimas sumažina stresą ir leidžia fermentams išlaikyti funkcionalumą.',
      incorrectMoreInfo: 'Staigus temperatūros kritimas gali sukelti baltymų denatūraciją ir ląstelių žūtį.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.6,
      deathFractionIncorrect: 0.4,
      gameOver: false,
      points: 10
    },
    {
      id: 13,
      title: 'DEGUONIES STOKA!',
      message: 'ĮSPĖJIMAS! Terpėje sumažėjo deguonies kiekis. Kaip užtikrinti Listeria augimą?',
      hint: 'Listeria yra fakultatyvinis anaerobas, bet deguonis pagerina augimą.',
      choices: ['Įdėti deguonies difuzorių', 'Palikti terpę anaerobinėje aplinkoje'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Deguonies difuzorius pagerina augimo sąlygas.',
      incorrectMessage: 'Neteisingai. Anaerobinė aplinka gali sulėtinti augimą.',
      correctMoreInfo: 'Deguonies padidinimas skatina metabolizmą ir spartesnį augimą.',
      incorrectMoreInfo: 'Nors Listeria gali augti be deguonies, augimo greitis sumažėja.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.7,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
    {
      id: 14,
      title: 'DRUSKOS STRESAS! (0,5 % → 10 % NaCl)',
      message: 'ĮSPĖJIMAS! Druskos koncentracija padidėjo iki 10 %. Kaip išlaikyti Listeria gyvybingumą?',
      hint: 'Listeria gali toleruoti aukštą druskos koncentraciją, bet osmoreguliacija svarbi.',
      choices: ['Įpilti 5 % glicerolio', 'Praskiesti terpę distiliuotu vandeniu'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Glicerolis padeda osmoreguliacijai.',
      incorrectMessage: 'Neteisingai. Staigus praskiedimas gali sukelti osmosinį šoką.',
      correctMoreInfo: 'Glicerolis veikia kaip osmoreguliatorius, padedantis ląstelėms prisitaikyti prie druskos streso.',
      incorrectMoreInfo: 'Staigus druskos koncentracijos sumažėjimas gali pažeisti ląstelių membranas.',
      correctMultiplier: 0.9,
      deathFractionCorrect: 0.1,
      incorrectMultiplier: 0.4,
      deathFractionIncorrect: 0.5,
      gameOver: false,
      points: 10
    },
    {
      id: 15,
      title: 'MAISTO TRŪKUMAS!',
      message: 'ĮSPĖJIMAS! Terpėje sumažėjo maistinių medžiagų. Ką pridėti norint palaikyti augimą?',
      hint: 'Listeria reikalauja anglies ir azoto šaltinių.',
      choices: ['Pridėti 1 % peptonų', 'Pridėti 1 % gliukozės'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Peptonai suteikia reikalingų aminorūgščių.',
      incorrectMessage: 'Neteisingai. Gliukozė suteikia energijos, bet trūksta azoto šaltinio.',
      correctMoreInfo: 'Peptonai aprūpina Listeria būtinomis aminorūgštimis ir azotu.',
      incorrectMoreInfo: 'Be pakankamo azoto šaltinio, baltymų sintezė sutrinka, stabdydama augimą.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.3,
      gameOver: false,
      points: 10
    },
    {
      id: 16,
      title: 'pH PAKILIMAS! (7 → 9)',
      message: 'ĮSPĖJIMAS! Terpės pH pakilo iki 9. Kaip stabilizuoti pH?',
      hint: 'Naudokite buferį, kuris palaiko pH apie 7.',
      choices: ['Pridėti 0,1 M HCl', 'Pridėti 0,1 M citrato buferio pH 5,0'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! HCl greitai sumažina pH.',
      incorrectMessage: 'Neteisingai. Citrato buferis gali per daug sumažinti pH.',
      correctMoreInfo: 'HCl leidžia tiksliai sureguliuoti pH iki optimalaus lygio.',
      incorrectMoreInfo: 'Per didelis pH sumažėjimas gali sukelti rūgštinį stresą.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.6,
      deathFractionIncorrect: 0.4,
      gameOver: false,
      points: 10
    },
    {
      id: 17,
      title: 'ŠALDYMO STRESAS! (4 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra nukrito iki 4 °C. Kaip užtikrinti Listeria augimą?',
      hint: 'Listeria gali augti žemoje temperatūroje, bet lėtai.',
      choices: ['Padidinti temperatūrą iki 30 °C', 'Palikti esamą temperatūrą'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Aukštesnė temperatūra skatina spartesnį augimą.',
      incorrectMessage: 'Neteisingai. Žemoje temperatūroje augimas labai lėtas.',
      correctMoreInfo: 'Optimalioje temperatūroje fermentai veikia efektyviau, skatinant augimą.',
      incorrectMoreInfo: 'Žemoje temperatūroje metabolizmas sulėtėja, stabdydamas augimą.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
    {
      id: 18,
      title: 'ŽEMAS aᵥ! SAUSRA LĄSTELĖMS',
      message: 'Aplinka tapo per sausa – aᵥ (vandens aktyvumas) sumažėjo. Listeria sunkiai dauginasi. Kaip padidinti aᵥ?',
      hint: 'Nepakeisk osmosinio slėgio druskomis!',
      choices: ['Įpilti 5 % glicerolio', 'Įpilti 0,5 % NaCl'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Glicerolis padidina aᵥ be osmosinio šoko.',
      incorrectMessage: 'Neteisingai. NaCl tik dar labiau sumažins aᵥ.',
      correctMoreInfo: 'Glicerolis padeda išlaikyti vandens aktyvumą ląstelėse, skatina jų metabolizmą ir padeda atsigauti augimui.',
      incorrectMoreInfo: 'NaCl padidina osmosinį slėgį, sausina aplinką – Listeria dar labiau dehidratuojasi ir nustoja daugintis.',
      correctMultiplier: 0.95,
      deathFractionCorrect: 0.05,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.4,
      gameOver: false,
      points: 10
    },
   
    {
      id: 19,
      title: 'H2O2 ŠOKAS! (GYVYBĖS AR MIRTIES)',
      message: 'GYVYBĖ AR MIRTIS! Terpėje aptikta vandenilio peroksido (H₂O₂). Jis gali pažeisti ląsteles oksidaciniu stresu!',
      hint: 'Listeria gamina katalazę, kuri skaido H₂O₂, bet tik ribotais kiekiais.',
      choices: ['Įdėti katalazės fermento', 'Išplauti terpę distiliuotu vandeniu'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Katalazė neutralizuoja H₂O₂ ir apsaugo ląsteles.',
      incorrectMessage: 'Neteisingai. Skalavimas gali pažeisti ląsteles arba neišspręsti problemos.',
      correctMoreInfo: 'Katalazė skaido H₂O₂ į vandenį ir deguonį, mažindama oksidacinį stresą.',
      incorrectMoreInfo: 'Distiliuotas vanduo gali praskiesti H₂O₂, bet ne visada veiksmingai. Be to, jis gali mechaniškai pažeisti ląsteles.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.0,
      deathFractionIncorrect: 1.0,
      gameOver: true,
      points: 15
    },
    {
      id: 20,
      title: 'GENŲ EKSPRESIJOS STIMULIACIJA!',
      message: 'Norint ištirti virulencijos faktorių, reikia padidinti prfA geno raišką. Kaip tai padaryti?',
      hint: 'prfA yra aktyvuojamas esant kūno temperatūrai.',
      choices: ['Padidinti temperatūrą iki 37 °C', 'Įtraukti kofaktorių, aktyvuojantį promotorių'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! 37 °C aktyvina prfA geną.',
      incorrectMessage: 'Neteisingai. Kofaktoriai nėra žinomi šio geno reguliatoriai.',
      correctMoreInfo: 'prfA transliacija padidėja esant 37 °C – tai viena iš virulencijos aktyvacijos strategijų.',
      incorrectMoreInfo: 'Šio geno reguliacija priklauso nuo temperatūros, ne nuo specifinių kofaktorių.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.6,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
  
    // Staphylococcus aureus
    {
      id: 21,
      title: 'pH KRITIMAS! (6 → 5)',
      message: 'ĮSPĖJIMAS! Terpės pH nukrito iki 5. Koks buferis padės išsaugoti augimą?',
      hint: 'MES buferis veikia švelniai pH ~6.',
      choices: ['0,1 M MES buferis pH 6,0', '0,1 M citrato buferis pH 4,5'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! MES buferis stabilizuoja pH ~6,0 be druskos pertekliaus.',
      incorrectMessage: 'Neteisingai. Citratas dar labiau žemins pH.',
      correctMoreInfo: 'MES buferis palaiko švelnų pH kritimą, Staph fermentai lieka aktyvūs.',
      incorrectMoreInfo: 'Citratas per rūgštus, ląstelės patiria acidifikacijos šoką ir žūva.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.4,
      deathFractionIncorrect: 0.4,
      gameOver: false,
      points: 10
    },
  
    {
      id: 22,
      title: 'pH PAKILIMAS! (9,5 → 7,5)',
      message: 'ĮSPĖJIMAS! pH pakilo iki 9,5. Ką darysite, kad saugiai sumažintumėte pH?',
      hint: 'Rinkis silpną rūgštį druskos kiekiui riboti.',
      choices: ['0,05 M HCl', '0,05 M trikloracto rūgštis'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! HCl greitai sukuria pH 7,5 ir formuoja NaCl.',
      incorrectMessage: 'Neteisingai. Trikloracto rūgštis pernelyg stipri ir toksiška.',
      correctMoreInfo: 'HCl greitai atstatys pH į tinkamą intervalą, druskos kiekis toleruojamas.',
      incorrectMoreInfo: 'Trikloracto rūgštis veikia kaip toksiška medžiaga, ląstelės denatūruojasi.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.7,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
  
    {
      id: 23,
      title: 'DEGUONIES STOKA!',
      message: 'ĮSPĖJIMAS! Kultūra uždaryta – O₂ trūksta. Ką naudosite anaerobinei fazei?',
      hint: 'Thioglikolato buferis – klasika anaerobams.',
      choices: ['Na₂S₂O₄ reduktorius', 'NaHCO₃ tirpalas'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Thioglikolatas sukuria redukcinę terpę be pH pasikeitimų.',
      incorrectMessage: 'Neteisingai. NaHCO₃ tik keičia pH, bet nedidina O₂.',
      correctMoreInfo: 'Thioglikolatas pašalina deguonį, Staph pereina prie fermentacijos ir auga anaerobiškai.',
      incorrectMoreInfo: 'NaHCO₃ nesuteikia deguonies, aerobinės dalys žūva.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.3,
      deathFractionIncorrect: 0.0,
      gameOver: false,
      points: 10
    },
   
    {
      id: 24,
      title: 'TEMPERATŪROS ŠUOLIS (42 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra pakilo iki 42 °C. Kaip saugiai atšaldyti?',
      hint: 'Lėtas atvėsinimas mažina šoką.',
      choices: ['Lėtai vėsinti iki 37 °C', 'Staigiai vėsinti iki 25 °C'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Lėtinis atvėsinimas apsaugo baltymus.',
      incorrectMessage: 'Neteisingai. Staigus šokas gali pažeisti membranas.',
      correctMoreInfo: 'Temperatūra krenta švelniai, baltymai neaggreguoja, ląstelės išlieka gyvybingos.',
      incorrectMoreInfo: 'Staigus atvėsinimas sukelia plėšomąjį stresą, daug žūva.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.1,
      deathFractionIncorrect: 0.6,
      gameOver: false,
      points: 10
    },
    
    {
      id: 25,
      title: 'HALOTOLERANCIJA (NaCl 15 %)',
      message: 'ĮSPĖJIMAS! Druskos koncentracija pasiekė 15 %. Kaip sumažinti osmosinį stresą?',
      hint: 'Staph mėgsta sorbitolio tipus osmoreguliacijai.',
      choices: ['Įpilti 5 % sorbitolio', 'Įpilti 5 % glicerolio'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Sorbitolis efektyviai osmoreguliuoja S. aureus.',
      incorrectMessage: 'Neteisingai. Glicerolis mažiau permeabili ląstelei.',
      correctMoreInfo: 'Sorbitolis kaupiasi ląstelėje ir palaiko turgorą, Staph auga toliau nors lėtai.',
      incorrectMoreInfo: 'Glicerolis nepakankamai efektyvus, dalis ląstelių žūva.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
  
    {
      id: 26,
      title: 'LIPIDŲ KAUPIMASIS',
      message: 'GYVYBĖ AR MIRTIS! Terpėje kaupiasi lipidų perteklius. Ką pridėsite?',
      hint: 'Rinkis neardantį surfaktantą.',
      choices: ['0,1 % Tween 80', '0,1 % SDS'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Tween 80 emulguoja lipidus neerzinant ląstelių.',
      incorrectMessage: 'Neteisingai. SDS ardys membranas.',
      correctMoreInfo: 'Tween 80 švelniai emulsuoja riebalus, leidžia ląstelėms išlikti sveikoms.',
      incorrectMoreInfo: 'SDS pažeidžia membraną ir žudo ląsteles.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.0,
      deathFractionIncorrect: 1.0,
      gameOver: true,
      points: 15
    },
  
    {
      id: 27,
      title: 'PLASMIDĖS TRANSFORMACIJA',
      message: 'ĮSPĖJIMAS! Norite įterpti plazmidę ankstyvoje fazėje. Ką daryti?',
      hint: 'Paruošimas CaCl₂ yra standartinė E. coli procedūra.',
      choices: ['Inkubuoti 30 min su CaCl₂ prieš EP', 'Iškart naudoti elektroporaciją'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! CaCl₂ padidina membranos permeabilumą transformacijai.',
      incorrectMessage: 'Neteisingai. Elektroporacija be paruošimo mažiau efektyvi.',
      correctMoreInfo: 'CaCl₂ neutralizuoja membranos krūvį ir leidžia DNR patekti į ląstelę.',
      incorrectMoreInfo: 'Be CaCl₂ ląstelės nėra paruoštos, elektroporacija žudo daug ląstelių.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.4,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
  
    {
      id: 28,
      title: 'FERMENTŲ pH DEPENDENCIJA',
      message: 'ĮSPĖJIMAS! Fermentų aktyvumas mažėja pH 8. Koks buferis tiktų?',
      hint: 'Fosfato buferis veikia ~pH 7.',
      choices: ['0,1 M fosfato buferis pH 7', '0,1 M Tris pH 8'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Fosfatas palaiko pH ~7 optimaliam aktyvumui.',
      incorrectMessage: 'Neteisingai. Tris keičia pH per daug aukštai.',
      correctMoreInfo: 'Fosfatas stabilizuoja pH, fermentai veikia maksimaliai.',
      incorrectMoreInfo: 'Tris sukelia per šarminę terpę, fermentai inaktyvuojasi.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.7,
      deathFractionIncorrect: 0.3,
      gameOver: false,
      points: 10
    },
  
    {
      id: 29,
      title: 'OKSIDACINIS STRESAS (H₂O₂)',
      message: 'ĮSPĖJIMAS! Pridėta 0,5 mM H₂O₂. Ką dėti, kad sumažintumėte stresą?',
      hint: 'Mn²⁺ yra katalazės ko-faktorius.',
      choices: ['0,1 mM MnCl₂', '0,1 mM MgCl₂'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Mn²⁺ aktyvina katalazę, neutralizuodama H₂O₂.',
      incorrectMessage: 'Neteisingai. Mg²⁺ neturi poveikio katalazės veiklai.',
      correctMoreInfo: 'Mn²⁺ sudaro enzimo aktyvų centrą, greitai skaidomas H₂O₂.',
      incorrectMoreInfo: 'Mg²⁺ nėra ko-faktorius, H₂O₂ kaupiasi ir žudo ląsteles.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.3,
      deathFractionIncorrect: 0.5,
      gameOver: false,
      points: 10
    },
  
    {
      id: 30,
      title: 'FERMENTŲ INHIBICIJA',
      message: 'ĮSPĖJIMAS! Pastebėta fermentų inhibicija dėl metalų jonų perteklius. Ką pridėsite?',
      hint: 'EDTA jungia metalų jonus.',
      choices: ['1 mM EDTA tirpalas', '1 mM CaCl₂ tirpalas'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! EDTA suriša perteklius metalų jonus, mažina inhibiciją ir atstato fermentų aktyvumą.',
      incorrectMessage: 'Neteisingai. CaCl₂ gali sustiprinti inhibiciją.',
      correctMoreInfo: 'EDTA efektyviai chelatuoja metalus ir apsaugo fermentus.',
      incorrectMoreInfo: 'CaCl₂ prideda papildomų metalų, didina inhibiciją.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.3,
      gameOver: false,
      points: 10
    },
   
    //Penicillium spp.
    {
      id: 31,
      title: 'ANGIAVANDENIŲ TRŪKSTA',
      message: 'ĮSPĖJIMAS! Terpėje nėra C šaltinio. Ką dedate?',
      hint: 'Pirmas žingsnis – greitas cukrus.',
      choices: ['0,5 % gliukozės', '0,5 % riebalų'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Gliukozė – pagrindinis greitas C šaltinis.',
      incorrectMessage: 'Neteisingai. Riebalai metabolizuojami per lėtai.',
      correctMoreInfo: 'Gliukozė greitai įsisavinama, teikia energiją ir auga.',
      incorrectMoreInfo: 'Riebalai reikalauja sudėtingos apdirbimo, augimas sustoja.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.6,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
  
    {
      id: 32,
      title: 'pH PAKILIMAS! (8 → 6)',
      message: 'ĮSPĖJIMAS! pH pakilo iki 8. Ką įpilti?',
      hint: 'Silpna rūgštis – geriau saikingam pH koregavimui.',
      choices: ['0,1 M HCl', '0,1 M H₂SO₄'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! HCl grąžina pH į ~6.',
      incorrectMessage: 'Neteisingai. H₂SO₄ pernelyg toksiška.',
      correctMoreInfo: 'HCl greitai neutralizuoja, sporų formavimasis minimalus.',
      incorrectMoreInfo: 'H₂SO₄ formuoja sieros druskas, pelėsis denatūruojasi.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.2,
      deathFractionIncorrect: 0.5,
      gameOver: false,
      points: 10
    },
  
    {
      id: 33,
      title: 'ŽEMA TEMPERATŪRA (15 °C)',
      message: 'ĮSPĖJIMAS! Temperatūra nukrito iki 15 °C – augimas sulėtėjo. Ar kelti iki 28 °C?',
      hint: 'Pelėsiai mėgsta 25–30 °C intervalą.',
      choices: ['Taip, iki 28 °C', 'Ne, palikti 15 °C'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! 28 °C optimaliai aktyvina fermentus.',
      incorrectMessage: 'Neteisingai. 15 °C sporos nustoja bręsti.',
      correctMoreInfo: 'Temperatūra pakeliama, hifai auga toliau.',
      incorrectMoreInfo: '15 °C sulėtina metabolizmą iki minimumo.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.0,
      gameOver: false,
      points: 10
    },
  
    {
      id: 34,
      title: 'DRĖGMĖS TRŪKSTA (a_w < 0,85)',
      message: 'ĮSPĖJIMAS! Vandens aktyvumas < 0,85 – augimas sustoja. Ką dėti?',
      hint: 'Glicerolis dažnas palaikant drėgmę.',
      choices: ['10 % glicerolio', '10 % sacharozės'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Glicerolis efektyviau didina a_w.',
      incorrectMessage: 'Neteisingai. Sacharozė mažiau permeanti.',
      correctMoreInfo: 'Glicerolis pritraukia vandenį, hifai tęsia augimą.',
      incorrectMoreInfo: 'Sacharozė nepakankamai pritraukia vandenį.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.6,
      deathFractionIncorrect: 0.1,
      gameOver: false,
      points: 10
    },
    
    {
      id: 35,
      title: 'KONSISTENCIJOS KEITIMAS',
      message: 'ĮSPĖJIMAS! Agar per kietas – sporos neišsiskiria. Kaip praskiedus?',
      hint: 'Mažesnė agar koncentracija – mažesnis gelio standumas.',
      choices: ['Sumaišyti su 0,5 % buljonu', 'Įpilti papildomą agar 1 %'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Praskiedus gelį, bet palaikant struktūrą.',
      incorrectMessage: 'Neteisingai. Papildomas agar dar labiau sustiprins.',
      correctMoreInfo: 'Buljono praskiedimas sumažina gelio standumą.',
      incorrectMoreInfo: 'Papildomas agar dar labiau sustiprins gelį.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.2,
      deathFractionIncorrect: 0.4,
      gameOver: false,
      points: 10
    },
  
    {
      id: 36,
      title: 'AZOTO ŠALTINIO TRŪKSTA',
      message: 'ĮSPĖJIMAS! Buljone nėra peptono. Ką pridėti?',
      hint: 'Peptonai – tradicinis azoto šaltinis.',
      choices: ['0,5 % peptono', '0,5 % gliukozės'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Peptonai teikia azotą sporų formavimuisi.',
      incorrectMessage: 'Neteisingai. Gliukozė tik angliavandenis.',
      correctMoreInfo: 'Peptonai suteikia amino grupes, sporuliacija vystosi normaliai.',
      incorrectMoreInfo: 'Gliukozė neturi azoto, sporos nebręsta.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.3,
      deathFractionIncorrect: 0.5,
      gameOver: false,
      points: 10
    },
  
    {
      id: 37,
      title: 'KONKURENCIJA IŠ DIRVOŽEMIO',
      message: 'ĮSPĖJIMAS! Dirvožemio fragmentai atnešė kitų mikroorganizmų. Ką dėti?',
      hint: 'Chloramfenikolis dažnai selektyvus pelėsiams.',
      choices: ['Chloramfenikolį 50 µg/ml', 'Ampiciliną 100 µg/ml'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Chloramfenikolis slopina bakterijas, bet leidžia pelėsiui augti.',
      incorrectMessage: 'Neteisingai. Ampicilinas veikia ir pelėsius.',
      correctMoreInfo: 'Chloramfenikolis selektyviai slopina bakterijas, sporos auga be konkurencijos.',
      incorrectMoreInfo: 'Ampicilinas slopina abiejų grupių sintezę, sporos neauga.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.7,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    },
    {
      id: 38,
      title: 'SPORŲ PERTEKLIUS',
      message: 'GYVYBĖ AR MIRTIS! Sporuliacija per intensyvi – sporos sankaupos. Ką daryti?',
      hint: 'Panagrinėk švelnius emulgatorius sporoms.',
      choices: ['Įpilti 0,05 % Tween 80', 'Įpilti 0,05 % SDS'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Tween 80 gerai skiedžia sporų sankaupas.',
      incorrectMessage: 'Neteisingai. SDS ardys membranas.',
      correctMoreInfo: 'Tween 80 sumažina sporų lipnumą, jos pasklinda tolygiai.',
      incorrectMoreInfo: 'SDS pažeidžia membranas ir žudo ląsteles.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.0,
      deathFractionIncorrect: 1.0,
      gameOver: true,
      points: 15
    },
  
    {
      id: 39,
      title: 'RŪGŠTUS KVAPAS',
      message: 'ĮSPĖJIMAS! Intensyvus rūgštus kvapas (gliukonatas). Kaip koreguoti?',
      hint: 'Kalcio karbonatas dažnai padeda šalinti rūgštį.',
      choices: ['0,1 M CaCO₃', '0,1 M MgCO₃'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! CaCO₃ formuoja gliukonato kalcio nuosėdas.',
      incorrectMessage: 'Neteisingai. MgCO₃ mažiau tirpsta.',
      correctMoreInfo: 'CaCO₃ neutralizuoja rūgštį ir šalinami kvapai.',
      incorrectMoreInfo: 'MgCO₃ netirpsta pakankamai, kvapas lieka.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.8,
      deathFractionIncorrect: 0.1,
      gameOver: false,
      points: 10
    },
  
    {
      id: 40,
      title: 'TOKSIŠKI METABOLITAI',
      message: 'ĮSPĖJIMAS! Kaupiasi kenksmingi metabolitai. Ką daryti?',
      hint: 'SDA pakeitimas – paprastas būdas „atgaivinti“ terpę.',
      choices: ['Pakeisti terpę į šviežią SDA', 'Pridėti EDTA 0,01 M'],
      correctChoiceIndex: 0,
      correctMessage: 'Teisingai! Nauja SDA pašalina senus metabolitus.',
      incorrectMessage: 'Neteisingai. EDTA neveikia metabolitų neutralizavimo.',
      correctMoreInfo: 'Šviežia SDA tiekiama be kenksmingų junginių.',
      incorrectMoreInfo: 'EDTA chelatuoja metalus, bet metabolitai kaupiasi toliau.',
      correctMultiplier: 1.0,
      deathFractionCorrect: 0.0,
      incorrectMultiplier: 0.5,
      deathFractionIncorrect: 0.2,
      gameOver: false,
      points: 10
    }
  ];

  export function displayChallenge(challenge, onComplete, scene, killFn) {

    const modal = document.createElement('div');
    modal.id = 'challenge-modal';
  
    const content = document.createElement('div');
    content.classList.add('challenge-modal-content');
    modal.appendChild(content);
  
    // title
    const titleElem = document.createElement('h2');
    titleElem.classList.add('challenge-title');
    titleElem.textContent = challenge.title;
    content.appendChild(titleElem);
  
    // message + hint
    const msgWrap = document.createElement('div');
    msgWrap.classList.add('challenge-message-wrap');
    const msgElem = document.createElement('p');
    msgElem.textContent = challenge.message;
    msgWrap.appendChild(msgElem);
    const hintIcon = document.createElement('span');
    hintIcon.classList.add('hint-icon','bottom-hint');
    hintIcon.textContent = '❓';
    hintIcon.dataset.tooltip = challenge.hint || '';
    msgWrap.appendChild(hintIcon);
    content.appendChild(msgWrap);
  
    // choices
    const choicesDiv = document.createElement('div');
    choicesDiv.classList.add('challenge-choices');
    challenge.choices.forEach((choiceText, idx) => {
      const btn = document.createElement('button');
      btn.classList.add('challenge-button');
      btn.textContent = choiceText;
      btn.addEventListener('click', () => {
        const correct = idx === challenge.correctChoiceIndex;
  
        // apply multipliers & points
        window.growthMultiplier *= correct
          ? challenge.correctMultiplier
          : challenge.incorrectMultiplier;
        window.hiddenPoints += correct
          ? challenge.points
          : -challenge.points;
  
        // kill fraction if needed
        const deathFrac = correct
          ? challenge.deathFractionCorrect
          : challenge.deathFractionIncorrect;
        if (deathFrac > 0) {
          killFn(scene, deathFrac);
        }
  
        // remove choice buttons
        choicesDiv.remove();
  
        // show result message
        const resultElem = document.createElement('h3');
        resultElem.textContent = correct
          ? challenge.correctMessage
          : challenge.incorrectMessage;
        content.appendChild(resultElem);
  
        // actions: continue + info
        const actions = document.createElement('div');
        actions.classList.add('challenge-actions');
  
        const contBtn = document.createElement('button');
        contBtn.classList.add('challenge-button','continue-btn');
        contBtn.textContent = 'Tęsti';
        contBtn.addEventListener('click', () => {
          modal.remove();
          const tempChallenges = [5, 6, 12, 24, 33];
          if (tempChallenges.includes(challenge.id)) {
            const tempMap = {
              5:  { correct: 37, incorrect: 25 },
              6:  { correct: 37, incorrect: 20 },
              12: { correct: 37, incorrect: 37 },
              24: { correct: 37, incorrect: 25 },
              33: { correct: 28, incorrect: 15 }
            };
            const { correct, incorrect } = tempMap[challenge.id];
            const newTemp = (idx === challenge.correctChoiceIndex) ? correct : incorrect;
            window.thermometer.updateTemperature(newTemp);
            window.temperature = newTemp;
          }
          if (!correct && challenge.gameOver) {
            window.gameOverModal();
          } else {
            onComplete();
          }
        });
        actions.appendChild(contBtn);
  
        const infoBtn = document.createElement('button');
        infoBtn.classList.add('challenge-button','info-btn');
        infoBtn.textContent = 'i';
        infoBtn.dataset.tooltip = correct
          ? challenge.correctMoreInfo
          : challenge.incorrectMoreInfo;
        actions.appendChild(infoBtn);
  
        content.appendChild(actions);
      });
      choicesDiv.appendChild(btn);
    });
    content.appendChild(choicesDiv);
    document.getElementById('game').appendChild(modal);
  }
  
  export function triggerScheduledChallenges(queue, onComplete, scene, killFn) {
    if (queue.length === 0) {
      onComplete();
      return;
    }
    const challenge = queue[0];
    displayChallenge(
      challenge,
      () => triggerScheduledChallenges(queue.slice(1), onComplete, scene, killFn),
      scene,
      killFn
    );
  }
  
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  export function getSpeciesChallenges(speciesKey) {
    const range = speciesChallengeRanges[speciesKey];
    if (!range) return [];
    const [min, max] = range;
    const list = challenges.filter(c => c.id >= min && c.id <= max);
    return shuffleArray(list);
  }
  