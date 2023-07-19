var game = {};


function preload() {
  game["images"] = {};

  game["images"]["lucina_standing0"] = loadImage("https://i.imgur.com/3oHTid6.png");
  game["images"]["lucina_standing1"] = loadImage("https://i.imgur.com/o1gEvqD.png");
  game["images"]["lucina_kitchen0"] = loadImage("https://i.imgur.com/yhAo0de.png");
  game["images"]["lucina_kitchen1"] = loadImage("https://i.imgur.com/htUgoBJ.png");
  
  game["images"]["background"] = loadImage("https://i.imgur.com/dCzRM61.png");

  game["images"]["table"] = loadImage("https://i.imgur.com/q8gAxZN.png");
  game["images"]["chair"] = loadImage("https://i.imgur.com/dZlm7Ar.png");

  game["images"]["wings"] = loadImage("https://i.imgur.com/GMs8sXo.png");
  game["images"]["fries"] = loadImage("https://i.imgur.com/iO4BHva.png");
  game["images"]["soda"] = loadImage("https://i.imgur.com/5aeIcEG.png");
  game["images"]["burger"] = loadImage("https://i.imgur.com/HbQFdNm.png");
  game["images"]["salad"] = loadImage("https://i.imgur.com/fWb89IB.png");
  game["images"]["beer"] = loadImage("https://i.imgur.com/DyCNXll.png");

  game["images"]["chocolate_milk"] = loadImage("https://i.imgur.com/v9ZKZ6n.png");

  game["images"]["anna0"] = loadImage("https://i.imgur.com/ft3C2ov.png");
  game["images"]["anna1"] = loadImage("https://i.imgur.com/2fBT8md.png");

  game["images"]["fmorgan0"] = loadImage("https://i.imgur.com/3Y9z33G.png");
  game["images"]["fmorgan1"] = loadImage("https://i.imgur.com/61t3cB0.png");
  game["images"]["fmorgan2"] = loadImage("https://i.imgur.com/pPDMg7H.png");
  game["images"]["fmorgan3"] = loadImage("https://i.imgur.com/c1LwIR7.png");
  game["images"]["fmorgan4"] = loadImage("https://i.imgur.com/AM4cUl6.png");
  game["images"]["fmorgan5"] = loadImage("https://i.imgur.com/9wN4ukE.png");

  game["images"]["exalt"] = loadImage("https://i.imgur.com/HJkDZsn.png");

  game["images"]["mitama0"] = loadImage("https://i.imgur.com/NcZ5h20.png");
  game["images"]["mitama1"] = loadImage("https://i.imgur.com/tDj6jWj.png");
  game["images"]["mitama2"] = loadImage("https://i.imgur.com/XyLutTx.png");

  game["images"]["eeby0"] = loadImage("https://i.imgur.com/IfJ6io2.png");
  game["images"]["eeby1"] = loadImage("https://i.imgur.com/7qq9VCq.png");
  game["images"]["eeby2"] = loadImage("https://i.imgur.com/9vki7Sv.png");

  game["images"]["leonie0"] = loadImage("https://i.imgur.com/kZwqWaz.png");
  game["images"]["leonie1"] = loadImage("https://i.imgur.com/dqz9opC.png");
  game["images"]["leonie2"] = loadImage("https://i.imgur.com/Fb9nlWV.png");

  game["images"]["larcei0"] = loadImage("https://i.imgur.com/ME94obe.png");
  game["images"]["larcei1"] = loadImage("https://i.imgur.com/RZ60Sln.png");
  game["images"]["larcei2"] = loadImage("https://i.imgur.com/gWPfHu1.png");

  game["images"]["idunn0"] = loadImage("https://i.imgur.com/vZtuKpH.png");
  game["images"]["idunn1"] = loadImage("https://i.imgur.com/WsiNoen.png");
  game["images"]["idunn2"] = loadImage("https://i.imgur.com/x9KezqU.png");

  game["images"]["fir0"] = loadImage("https://i.imgur.com/snlrrqi.png");
  game["images"]["fir1"] = loadImage("https://i.imgur.com/QsyJUB0.png");
  game["images"]["fir2"] = loadImage("https://i.imgur.com/xbjLJXp.png");

  game["images"]["micaiah0"] = loadImage("https://i.imgur.com/3o038Ar.png");
  game["images"]["micaiah1"] = loadImage("https://i.imgur.com/8lRE9gN.png");
  game["images"]["micaiah2"] = loadImage("https://i.imgur.com/hPfxZtm.png");

  game["images"]["celica0"] = loadImage("https://i.imgur.com/BZP4Rsp.png");
  game["images"]["celica1"] = loadImage("https://i.imgur.com/Z0WnJL9.png");
  game["images"]["celica2"] = loadImage("https://i.imgur.com/R3s3MWH.png");

  game["images"]["edelgard0"] = loadImage("https://i.imgur.com/lvWWPbE.png");
  game["images"]["edelgard1"] = loadImage("https://i.imgur.com/P94AzZP.png");
  game["images"]["edelgard2"] = loadImage("https://i.imgur.com/BhKNpvI.png");

  game["images"]["ingrid0"] = loadImage("https://i.imgur.com/GlzAEup.png");
  game["images"]["ingrid1"] = loadImage("https://i.imgur.com/IXDQOYU.png");
  game["images"]["ingrid2"] = loadImage("https://i.imgur.com/WL3DtuI.png");

  game["images"]["triandra0"] = loadImage("https://i.imgur.com/6s7FCxB.png");
  game["images"]["triandra1"] = loadImage("https://i.imgur.com/zWBEWoN.png");
  game["images"]["triandra2"] = loadImage("https://i.imgur.com/tSTw2Gm.png");

  game["images"]["severa0"] = loadImage("https://i.imgur.com/L2dFZiD.png");
  game["images"]["severa1"] = loadImage("https://i.imgur.com/jCsS0Dy.png");
  game["images"]["severa2"] = loadImage("https://i.imgur.com/yGw9jh2.png");

  game["images"]["mrobin0"] = loadImage("https://i.imgur.com/7O8iVkI.png");
  game["images"]["mrobin1"] = loadImage("https://i.imgur.com/J9SO7TZ.png");
  game["images"]["mrobin2"] = loadImage("https://i.imgur.com/h3y9GZ1.png");

  game["images"]["frobin0"] = loadImage("https://i.imgur.com/VxadGMS.png");
  game["images"]["frobin1"] = loadImage("https://i.imgur.com/HPq2rNG.png");
  game["images"]["frobin2"] = loadImage("https://i.imgur.com/KbufwXY.png");

  game["images"]["ishtar0"] = loadImage("https://i.imgur.com/M1CBXnQ.png");
  game["images"]["ishtar1"] = loadImage("https://i.imgur.com/TSTj50M.png");
  game["images"]["ishtar2"] = loadImage("https://i.imgur.com/HMn0ZOV.png");

  game["images"]["caeda0"] = loadImage("https://i.imgur.com/4inSY8l.png");
  game["images"]["caeda1"] = loadImage("https://i.imgur.com/hzcvyzr.png");
  game["images"]["caeda2"] = loadImage("https://i.imgur.com/5juVn6t.png");

  game["images"]["eitri0"] = loadImage("https://i.imgur.com/CBaHoWI.png");
  game["images"]["eitri1"] = loadImage("https://i.imgur.com/UEl8bRB.png");
  game["images"]["eitri2"] = loadImage("https://i.imgur.com/DHyeNOp.png");

  game["images"]["silque0"] = loadImage("https://i.imgur.com/MOpUOsr.png");
  game["images"]["silque1"] = loadImage("https://i.imgur.com/xtIPmoN.png");
  game["images"]["silque2"] = loadImage("https://i.imgur.com/BI6WHwb.png");

  game["images"]["fcorrin0"] = loadImage("https://i.imgur.com/OcysA2J.png");
  game["images"]["fcorrin1"] = loadImage("https://i.imgur.com/D3X3gez.png");
  game["images"]["fcorrin2"] = loadImage("https://i.imgur.com/o4Ry8rq.png");

  game["images"]["charlotte0"] = loadImage("https://i.imgur.com/EEFP1Za.png");
  game["images"]["charlotte1"] = loadImage("https://i.imgur.com/9scL4GO.png");
  game["images"]["charlotte2"] = loadImage("https://i.imgur.com/PiKOPRu.png");

  game["images"]["camilla0"] = loadImage("https://i.imgur.com/sf9h8jE.png");
  game["images"]["camilla1"] = loadImage("https://i.imgur.com/Mfe0Q1I.png");
  game["images"]["camilla2"] = loadImage("https://i.imgur.com/gb2SJBB.png");

  game["images"]["marianne0"] = loadImage("https://i.imgur.com/mDuZb78.png");
  game["images"]["marianne1"] = loadImage("https://i.imgur.com/cPo3MGq.png");
  game["images"]["marianne2"] = loadImage("https://i.imgur.com/mhorKtp.png");

  game["images"]["aizawa0"] = loadImage("https://i.imgur.com/yNur1m8.png");
  game["images"]["aizawa1"] = loadImage("https://i.imgur.com/SL2JjHG.png");
  game["images"]["aizawa2"] = loadImage("https://i.imgur.com/Osb844q.png");

  game["images"]["flayn0"] = loadImage("https://i.imgur.com/kTzAhuR.png");
  game["images"]["flayn1"] = loadImage("https://i.imgur.com/IfXs89T.png");
  game["images"]["flayn2"] = loadImage("https://i.imgur.com/6jaf5Az.png");

  game["images"]["manuela0"] = loadImage("https://i.imgur.com/4Ks512b.png");
  game["images"]["manuela1"] = loadImage("https://i.imgur.com/ZOaORMb.png");
  game["images"]["manuela2"] = loadImage("https://i.imgur.com/JrSEMQv.png");

  game["images"]["nephenee0"] = loadImage("https://i.imgur.com/oEsdrXT.png");
  game["images"]["nephenee1"] = loadImage("https://i.imgur.com/jh3iNTm.png");
  game["images"]["nephenee2"] = loadImage("https://i.imgur.com/5fNTNAm.png");

  game["images"]["igrene0"] = loadImage("https://i.imgur.com/whYUgmY.png");
  game["images"]["igrene1"] = loadImage("https://i.imgur.com/OPlRCGp.png");
  game["images"]["igrene2"] = loadImage("https://i.imgur.com/WFzAOWh.png");

  game["images"]["sophia0"] = loadImage("https://i.imgur.com/LTakDSn.png");
  game["images"]["sophia1"] = loadImage("https://i.imgur.com/Ttc28zU.png");
  game["images"]["sophia2"] = loadImage("https://i.imgur.com/Q3Z6mT6.png");

  game["images"]["azura0"] = loadImage("https://i.imgur.com/PltPOVp.png");
  game["images"]["azura1"] = loadImage("https://i.imgur.com/j3JI2Ml.png");
  game["images"]["azura2"] = loadImage("https://i.imgur.com/H1QDH8D.png");

  game["images"]["dagr0"] = loadImage("https://i.imgur.com/MuIBpPU.png");
  game["images"]["dagr1"] = loadImage("https://i.imgur.com/uOAioZR.png");
  game["images"]["dagr2"] = loadImage("https://i.imgur.com/UFfDu0t.png");

  game["images"]["sonya0"] = loadImage("https://i.imgur.com/cZaOd4Y.png");
  game["images"]["sonya1"] = loadImage("https://i.imgur.com/QE7pGc7.png");
  game["images"]["sonya2"] = loadImage("https://i.imgur.com/zOjeZI3.png");

  game["images"]["lorenz0"] = loadImage("https://i.imgur.com/Eqt8w6j.png");
  game["images"]["lorenz1"] = loadImage("https://i.imgur.com/Zc0J9IF.png");
  game["images"]["lorenz2"] = loadImage("https://i.imgur.com/ordBxsg.png");

  game["images"]["fjorm0"] = loadImage("https://i.imgur.com/6l5a5Zy.png");
  game["images"]["fjorm1"] = loadImage("https://i.imgur.com/7wyRTKj.png");
  game["images"]["fjorm2"] = loadImage("https://i.imgur.com/06bJPGC.png");

  game["images"]["mia0"] = loadImage("https://i.imgur.com/bf8NoWu.png");
  game["images"]["mia1"] = loadImage("https://i.imgur.com/ZwzOSfs.png");
  game["images"]["mia2"] = loadImage("https://i.imgur.com/Vx0G5n0.png");

  game["images"]["fkris0"] = loadImage("https://i.imgur.com/ZVC5CLo.png");
  game["images"]["fkris1"] = loadImage("https://i.imgur.com/mMAKhVn.png");
  game["images"]["fkris2"] = loadImage("https://i.imgur.com/7qTASZA.png");

  game["images"]["kagero0"] = loadImage("https://i.imgur.com/NEjaLBn.png");
  game["images"]["kagero1"] = loadImage("https://i.imgur.com/9zonAdE.png");
  game["images"]["kagero2"] = loadImage("https://i.imgur.com/POhHRpZ.png");

  game["images"]["clarisse0"] = loadImage("https://i.imgur.com/H5AF61d.png");
  game["images"]["clarisse1"] = loadImage("https://i.imgur.com/7ffqmBA.png");
  game["images"]["clarisse2"] = loadImage("https://i.imgur.com/MzXqHw8.png");

  game["images"]["lysithea0"] = loadImage("https://i.imgur.com/rANCGh1.png");
  game["images"]["lysithea1"] = loadImage("https://i.imgur.com/XhbYWuU.png");
  game["images"]["lysithea2"] = loadImage("https://i.imgur.com/4dlxO8P.png");

  game["images"]["dorothea0"] = loadImage("https://i.imgur.com/QcsUwpV.png");
  game["images"]["dorothea1"] = loadImage("https://i.imgur.com/sp6YTnw.png");
  game["images"]["dorothea2"] = loadImage("https://i.imgur.com/Hp3WZ8C.png");

  game["images"]["alm0"] = loadImage("https://i.imgur.com/o5JVGFM.png");
  game["images"]["alm1"] = loadImage("https://i.imgur.com/kh5von0.png");
  game["images"]["alm2"] = loadImage("https://i.imgur.com/V6L9Dlr.png");

  game["images"]["seliph0"] = loadImage("https://i.imgur.com/aVnyhQU.png");
  game["images"]["seliph1"] = loadImage("https://i.imgur.com/yzAsgig.png");
  game["images"]["seliph2"] = loadImage("https://i.imgur.com/P6uuEs1.png");


  game["sounds"] = {};

  // Id (Like to Order) [cover song of Id by Yoostink]
  game["sounds"]["song"] = new Audio("https://dl.sndup.net/phg3/Id%20(Like%20to%20Order).mp3");
  game["sounds"]["song"].loop = true;
  game["sounds"]["click"] = new Audio("https://dl.sndup.net/wvny/click.mp3");
  game["sounds"]["click"].volume = 0.5;
  game["sounds"]["purchase"] = new Audio("https://dl.sndup.net/yscn/purchase.mp3");
  game["sounds"]["whoosh"] = new Audio("https://dl.sndup.net/r9ps/whoosh.mp3");
  game["sounds"]["whoosh"].volume = 0.6;
  game["sounds"]["satisfied"] = new Audio("https://dl.sndup.net/pc27/satisfied.mp3");
  game["sounds"]["angered"] = new Audio("https://dl.sndup.net/q3z6/angered.mp3");
  game["sounds"]["triumph"] = new Audio("https://dl.sndup.net/p342/triumph.mp3");
}

function setup() {
  // Create a canvas that fits the width of the screen
  var canvasWidth = min(windowWidth, windowHeight) * 0.99;
  var canvas = createCanvas(canvasWidth, canvasWidth);
  canvas.parent("container");
  textFont("VT323");
  // CENTER Mode
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // 0 = start menu
  // 1 = about
  // 2 = day screen
  // 3 = game
  // 4 = pause menu
  game["version"] = "v1.0";
  game["state"] = 0;
  game["fps"] = 60;
  game["day"] = 1;
  game["maxMoney"] = 999999999
  game["money"] = 0;
  game["score"] = 0;
  game["stars"] = 1;
  game["dayTimer"] = getDayTimer(game["stars"], game["fps"]);
  game["customersServed"] = 0;
  game["customersAngered"] = 0;
  game["frame"] = 0;
  game["click"] = 0;

  game["upgrades"] = [
    {
      "name": "N/A",
      "description": "You start here.",
      "cost": 0
    },
    {
      "name": "Buy Grill",
      "description": "Unlocks burger + table + star.",
      "cost": 200
    },
    {
      "name": "Upgrade Fridge",
      "description": "Unlocks salad + table + star.",
      "cost": 1000
    },
    {
      "name": "Buy Liquor License",
      "description": "Unlocks beer + table + star.",
      "cost": 2000
    },
    {
      "name": "Renovate",
      "description": "Achieve 5 stars!",
      "cost": 3000
    },
    {
      "name": "N/A",
      "description": "GAME OVER!",
      "cost": 0
    }
  ];

  // Starts [1, 1, 1, 0, 0, 0]
  game["foodOptions"] = [1, 1, 1, 0, 0, 0];
  game["foodCollected"] = [0, 0, 0, 0, 0, 0];
  game["foodObjects"] = [
    {
      "name": "wings",
      "color": color("#F5631F"),
      "image": game["images"]["wings"]
    },
    {
      "name": "fries",
      "color": color("#DA362A"),
      "image": game["images"]["fries"]
    },
    {
      "name": "soda",
      "color": color("#1F8EA7"),
      "image": game["images"]["soda"]
    },
    {
      "name": "burger",
      "color": color("#9B5A10"),
      "image": game["images"]["burger"]
    },
    {
      "name": "salad",
      "color": color("#55A944"),
      "image": game["images"]["salad"]
    },
    {
      "name": "beer",
      "color": color("#E7CF55"),
      "image": game["images"]["beer"]
    }
  ];

  // Starts [0, 1, 0, 0]
  game["tables"] = [0, 1, 0, 0];
  game["tablesOccupied"] = [null, null, null, null];
  resetTablesOccupied(game["tablesOccupied"]);

  game["tableCustomers"] = [null, null, null, null];
  game["tableCustomerSatisfied"] = [false, false, false, false];
  game["tableCustomerOrders"] = [null, null, null, null];
  game["customersPatienceMax"] = [null, null, null, null];
  game["customerPatienceLength"] = width/6;
  game["maxTipPercent"] = 0.4;

  game["customerLeaveDelay"] = game["fps"] * 2;
  game["customerLeaveObjects"] = [null, null, null, null];
  game["customerLeaveMessages"] = [null, null, null, null];

  game["00-PlayButton"] = [width/2, width/3 + width*2/6 - width/64, width/3, width/10];
  game["00-AboutButton"] = [width/2, width/3 + width/2 - width/64, width/3, width/10];
  
  game["01-LeaveAboutButton"] = [width/2, width/3 + width/2 - width/64, width/3, width/10];
  
  game["02-UpgradeButton"] = [width/2, width*2/3 + width/100, width/3, width/10];
  game["02-StartDayButton"] = [width/2, width/3 + width/2 - width/64, width/3, width/10];
  
  game["03-TopHUDBox"] = [width/2, width/20-width/40, width*1.5, width*3/20];
  game["03-TopHUDDay"] = [width/2 - width/3, width/20, width, width/10];
  game["03-TopHUDMoney"] = [width/2, width/20, width, width/10];
  game["03-TopHUDDayTimer"] = [width/2 + width/3, width/20, width, width/10];

  game["03-FoodWings"] = [width*222/240, width/20+width*31/240, width*17/120, width*17/120];
  game["03-FoodFries"] = [width*222/240, width/20+width*67/240, width*17/120, width*17/120];
  game["03-FoodSoda"] = [width*222/240, width/20+width*103/240, width*17/120, width*17/120];
  game["03-FoodBurger"] = [width*222/240, width/20+width*139/240, width*17/120, width*17/120];
  game["03-FoodSalad"] = [width*222/240, width/20+width*175/240, width*17/120, width*17/120];
  game["03-FoodBeer"] = [width*222/240, width/20+width*211/240, width*17/120, width*17/120];
  game["foodButtons"] = [
    game["03-FoodWings"],
    game["03-FoodFries"],
    game["03-FoodSoda"],
    game["03-FoodBurger"],
    game["03-FoodSalad"],
    game["03-FoodBeer"]
  ];

  game["03-Table1"] = [width/6, width/5+width/20, width/3, width/5];
  game["03-Table2"] = [width/6, width*2/5+width/20, width/3, width/5];
  game["03-Table3"] = [width/6, width*3/5+width/20, width/3, width/5];
  game["03-Table4"] = [width/6, width*4/5+width/20, width/3, width/5];
  game["tableButtons"] = [
    game["03-Table1"], 
    game["03-Table2"], 
    game["03-Table3"], 
    game["03-Table4"]
  ];

  game["03-Pause"] = [width/2, width*19/20, width/15, width/15];
  game["04-Resume"] = [width/2, width*19/20, width/15, width/15];

  game["lucinaCurrentPosition"] = 4;
  game["lucinaPositions"] = [
    [game["03-Table1"][0] + width*31/100, game["03-Table1"][1]],
    [game["03-Table2"][0] + width*31/100, game["03-Table2"][1]],
    [game["03-Table3"][0] + width*31/100, game["03-Table3"][1]],
    [game["03-Table4"][0] + width*31/100, game["03-Table4"][1]],
    [game["03-FoodWings"][0] - width/5, width/2+width/20]
  ];
  game["lucinaDims"] = [width/10, width/5];

  game["annaPosition"] = [game["lucinaPositions"][4][0], game["lucinaPositions"][4][1] + width/4];

  game["customerProfiles"] = [
    {
      "name": "Mitama",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["mitama0"],
      "satisfiedImage": game["images"]["mitama1"],
      "angeredImage": game["images"]["mitama2"]
    },
    {
      "name": "Eeby",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["eeby0"],
      "satisfiedImage": game["images"]["eeby1"],
      "angeredImage": game["images"]["eeby2"]
    },
    {
      "name": "Leonie",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["leonie0"],
      "satisfiedImage": game["images"]["leonie1"],
      "angeredImage": game["images"]["leonie2"]
    },
    {
      "name": "Larcei",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["larcei0"],
      "satisfiedImage": game["images"]["larcei1"],
      "angeredImage": game["images"]["larcei2"]
    },
    {
      "name": "Idunn",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["idunn0"],
      "satisfiedImage": game["images"]["idunn1"],
      "angeredImage": game["images"]["idunn2"]
    },
    {
      "name": "Fir",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["fir0"],
      "satisfiedImage": game["images"]["fir1"],
      "angeredImage": game["images"]["fir2"]
    },
    {
      "name": "Micaiah",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["micaiah0"],
      "satisfiedImage": game["images"]["micaiah1"],
      "angeredImage": game["images"]["micaiah2"]
    },
    {
      "name": "Celica",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["celica0"],
      "satisfiedImage": game["images"]["celica1"],
      "angeredImage": game["images"]["celica2"]
    },
    {
      "name": "Edelgard",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["edelgard0"],
      "satisfiedImage": game["images"]["edelgard1"],
      "angeredImage": game["images"]["edelgard2"]
    },
    {
      "name": "Ingrid",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["ingrid0"],
      "satisfiedImage": game["images"]["ingrid1"],
      "angeredImage": game["images"]["ingrid2"]
    },
    {
      "name": "Triandra",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["triandra0"],
      "satisfiedImage": game["images"]["triandra1"],
      "angeredImage": game["images"]["triandra2"]
    },
    {
      "name": "Severa",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["severa0"],
      "satisfiedImage": game["images"]["severa1"],
      "angeredImage": game["images"]["severa2"]
    },
    {
      "name": "M!Robin",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["mrobin0"],
      "satisfiedImage": game["images"]["mrobin1"],
      "angeredImage": game["images"]["mrobin2"]
    },
    {
      "name": "F!Robin",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["frobin0"],
      "satisfiedImage": game["images"]["frobin1"],
      "angeredImage": game["images"]["frobin2"]
    },
    {
      "name": "Ishtar",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["ishtar0"],
      "satisfiedImage": game["images"]["ishtar1"],
      "angeredImage": game["images"]["ishtar2"]
    },
    {
      "name": "Caeda",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["caeda0"],
      "satisfiedImage": game["images"]["caeda1"],
      "angeredImage": game["images"]["caeda2"]
    },
    {
      "name": "Eitri",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["eitri0"],
      "satisfiedImage": game["images"]["eitri1"],
      "angeredImage": game["images"]["eitri2"]
    },
    {
      "name": "Silque",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["silque0"],
      "satisfiedImage": game["images"]["silque1"],
      "angeredImage": game["images"]["silque2"]
    },
    {
      "name": "F!Corrin",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["fcorrin0"],
      "satisfiedImage": game["images"]["fcorrin1"],
      "angeredImage": game["images"]["fcorrin2"]
    },
    {
      "name": "Charlotte",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["charlotte0"],
      "satisfiedImage": game["images"]["charlotte1"],
      "angeredImage": game["images"]["charlotte2"]
    },
    {
      "name": "Camilla",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["camilla0"],
      "satisfiedImage": game["images"]["camilla1"],
      "angeredImage": game["images"]["camilla2"]
    },
    {
      "name": "Marianne",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["marianne0"],
      "satisfiedImage": game["images"]["marianne1"],
      "angeredImage": game["images"]["marianne2"]
    },
    {
      "name": "Aizawa",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["aizawa0"],
      "satisfiedImage": game["images"]["aizawa1"],
      "angeredImage": game["images"]["aizawa2"]
    },
    {
      "name": "Flayn",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["flayn0"],
      "satisfiedImage": game["images"]["flayn1"],
      "angeredImage": game["images"]["flayn2"]
    },
    {
      "name": "Manuela",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["manuela0"],
      "satisfiedImage": game["images"]["manuela1"],
      "angeredImage": game["images"]["manuela2"]
    },
    {
      "name": "Nephenee",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["nephenee0"],
      "satisfiedImage": game["images"]["nephenee1"],
      "angeredImage": game["images"]["nephenee2"]
    },
    {
      "name": "Igrene",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["igrene0"],
      "satisfiedImage": game["images"]["igrene1"],
      "angeredImage": game["images"]["igrene2"]
    },
    {
      "name": "Sophia",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["sophia0"],
      "satisfiedImage": game["images"]["sophia1"],
      "angeredImage": game["images"]["sophia2"]
    },
    {
      "name": "Azura",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["azura0"],
      "satisfiedImage": game["images"]["azura1"],
      "angeredImage": game["images"]["azura2"]
    },
    {
      "name": "Dagr",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["dagr0"],
      "satisfiedImage": game["images"]["dagr1"],
      "angeredImage": game["images"]["dagr2"]
    },
    {
      "name": "Sonya",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["sonya0"],
      "satisfiedImage": game["images"]["sonya1"],
      "angeredImage": game["images"]["sonya2"]
    },
    {
      "name": "Lorenz",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["lorenz0"],
      "satisfiedImage": game["images"]["lorenz1"],
      "angeredImage": game["images"]["lorenz2"]
    },
    {
      "name": "Fjorm",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["fjorm0"],
      "satisfiedImage": game["images"]["fjorm1"],
      "angeredImage": game["images"]["fjorm2"]
    },
    {
      "name": "Mia",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["mia0"],
      "satisfiedImage": game["images"]["mia1"],
      "angeredImage": game["images"]["mia2"]
    },
    {
      "name": "F!Kris",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["fkris0"],
      "satisfiedImage": game["images"]["fkris1"],
      "angeredImage": game["images"]["fkris2"]
    },
    {
      "name": "Kagero",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["kagero0"],
      "satisfiedImage": game["images"]["kagero1"],
      "angeredImage": game["images"]["kagero2"]
    },
    {
      "name": "Clarisse",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["clarisse0"],
      "satisfiedImage": game["images"]["clarisse1"],
      "angeredImage": game["images"]["clarisse2"]
    },
    {
      "name": "Lysithea",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["lysithea0"],
      "satisfiedImage": game["images"]["lysithea1"],
      "angeredImage": game["images"]["lysithea2"]
    },
    {
      "name": "Dorothea",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["dorothea0"],
      "satisfiedImage": game["images"]["dorothea1"],
      "angeredImage": game["images"]["dorothea2"]
    },
    {
      "name": "Alm",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["alm0"],
      "satisfiedImage": game["images"]["alm1"],
      "angeredImage": game["images"]["alm2"]
    },
    {
      "name": "Seliph",
      "color": color(255, 0, 0),
      "waitingImage": game["images"]["seliph0"],
      "satisfiedImage": game["images"]["seliph1"],
      "angeredImage": game["images"]["seliph2"]
    }
  ];

  //TEST SPECIFIC CHARACTER BY INDEX
  //game["customerProfiles"] = [game["customerProfiles"][40]];

  game["customerDims"] = [width/10, width/5];
  game["customerOrderDims"] = [width*9/180, width*9/180];

  frameRate(game["fps"]);
}

function draw() {
  // Set the background color
  switch(game["state"]) {
    case 0:
      background(20);
      drawStartMenu();
      break;
    case 1:
      background(20);
      drawAbout();
      break;
    case 2:
      game["sounds"]["song"].pause();
      background(20);
      drawDay();
      break;
    case 3:
      game["sounds"]["song"].play();
      background(color(46, 15, 1));
      drawHooters();
      break;
    case 4:
      game["sounds"]["song"].pause();
      background(20);
      drawPauseMenu();
      break;
  }
  game["frame"] += 1;
}

function mouseClicked() {
  switch(game["state"]) {
    case 0:
      if (isMouseInRectArray(game["00-PlayButton"])) {
        game["state"] = 2;
        playSound("click");
      }
      if (isMouseInRectArray(game["00-AboutButton"])) {
        game["state"] = 1;
        game["click"] = 0;
        playSound("click");
      }
      if (isMouseInRectArray([width/2, width*19/40, width/10, width/5])) {
        game["click"] += 1;
      }
      break;
    case 1:
      if (isMouseInRectArray(game["01-LeaveAboutButton"])) {
        game["state"] = 0;
        game["click"] = 0;
        playSound("click");
      }
      if (isMouseInRectArray([width/2, width/9 + width*8/15, width/5, width/5])) {
        game["click"] += 1;
      }
      break;
    case 2:
      if (isMouseInRectArray(game["02-UpgradeButton"]) && game["stars"] < 5) {
        var upgrade = game["upgrades"][game["stars"]];
        if (game["money"] >= upgrade["cost"]) {
          game["money"] -= upgrade["cost"];
          game["stars"] += 1;
          game["foodOptions"][game["stars"] + 1] = 1;

          switch(game["stars"]) {
            case 1:
              game["tables"] = [0, 1, 0, 0];
              break;
            case 2:
              game["tables"] = [0, 1, 1, 0];
              break;
            case 3:
              game["tables"] = [1, 1, 1, 0];
              break;
            case 4:
              game["tables"] = [1, 1, 1, 1];
              break;
            default:
              game["tables"] = [1, 1, 1, 1];
              break;
          }
          if (game["stars"] == 5) {
            playSound("triumph");
          }
          else {
            playSound("purchase");
          }
        }
      }
      // Reset values for new day
      if (isMouseInRectArray(game["02-StartDayButton"])) {
        resetTablesOccupied(game["tablesOccupied"]);
        game["tableCustomers"] = [null, null, null, null];
        game["tableCustomerSatisfied"] = [false, false, false, false];
        game["tableCustomerOrders"] = [null, null, null, null];
        game["customersPatienceMax"] = [null, null, null, null];
        game["customerLeaveObjects"] = [null, null, null, null];
        game["customerLeaveMessages"] = [null, null, null, null];
        game["foodCollected"] = [0, 0, 0, 0, 0, 0];
        game["dayTimer"] = getDayTimer(game["stars"], game["fps"]);
        game["lucinaCurrentPosition"] = 4;

        game["state"] = 3;
        playSound("click");
      }
      break;
    case 3:
      // Food is tapped
      for (var i = 0; i < game["foodOptions"].length; i += 1) {
        if (game["foodOptions"][i] == 1 && isMouseInRectArray(game["foodButtons"][i])) {
          // Toggle between 0 and 1
          game["foodCollected"][i] = 1 - game["foodCollected"][i];
          if (game["lucinaCurrentPosition"] < game["tables"].length) {
            playSound("whoosh");
          }
          game["lucinaCurrentPosition"] = game["tables"].length;
          playSound("click");
        }
      }
      // Table is tapped
      for (var i = 0; i < game["tables"].length; i += 1) {
        if (game["tables"][i] == 1 && isMouseInRectArray(game["tableButtons"][i])) {
          if (!isArrayAllZero(game["foodCollected"]) && game["tableCustomers"][i] != null) {
            game["lucinaCurrentPosition"] = i;
            playSound("whoosh");
            // Correct order given
            if (arrayEquals(game["foodCollected"], game["tableCustomerOrders"][i])) {
              var orderAmount = getCustomerOrderEarnings(game["tableCustomerOrders"][i]);
              var tipPercent =  game["tablesOccupied"][i] / game["customersPatienceMax"][i]
              var tipAmount = Math.floor(tipPercent * orderAmount * game["maxTipPercent"]);
              var totalAmount = orderAmount + tipAmount;

              if (game["tableCustomers"][i]["name"] == "M!Robin") {
                totalAmount = totalAmount * 2;
              }

              game["foodCollected"] = [0, 0, 0, 0, 0, 0];
              game["tablesOccupied"][i] = 0;
              game["tableCustomerSatisfied"][i] = true;
              game["money"] += totalAmount;
              if (game["money"] > game["maxMoney"]) {
                game["money"] = game["maxMoney"];
              }
              game["score"] += totalAmount;
              game["customerLeaveMessages"][i] = { "message": "+$"+ totalAmount, "countdown": game["customerLeaveDelay"], "color": color(0, 255, 0) };
            }
          }
        }
      }

      if (isMouseInRectArray(game["03-Pause"])) {
        game["state"] = 4;
      }
      break;
    case 4:
      if (isMouseInRectArray(game["04-Resume"])) {
        game["state"] = 3;
      }
      break;
  }
}

// state = 0
function drawStartMenu() {

  image(game["images"]["background"], width/2, width/2, width*2, width*2);

  stroke(0);
  strokeWeight(width/80);
  textSize(width/10);
  text("HOOTERS LUCINA", width/2, width/3 - width/10);
  text("THE GAME", width/2, width/3);

  fill(255);
  stroke(255);
  strokeWeight(0);

  if (game["click"] < 10) {
    if (game["frame"] % game["fps"] < game["fps"] * 0.5) {
      if (game["click"] % 2 == 0) {
        image(game["images"]["lucina_standing0"], width/2, width*19/40, width/10, width/5);
      }
      else {
        image(game["images"]["lucina_kitchen0"], width/2, width*19/40, width/10, width/5);
      }   
    }
    else {
      if (game["click"] % 2 == 0) {
        image(game["images"]["lucina_standing1"], width/2, width*19/40, width/10, width/5);
      }
      else {
        image(game["images"]["lucina_kitchen1"], width/2, width*19/40, width/10, width/5);
      }
    }
  }
  else {
    image(game["images"]["chocolate_milk"], width/2, width*19/40, width/5, width/5);
  }

  drawRectHoverArray(game["00-PlayButton"], "Play", width/15, 20, 255, width/64);

  drawRectHoverArray(game["00-AboutButton"], "About", width/15, 20, 255, width/64);

  fill(255);
  textSize(width/30);
  text(game["version"], width/2, width*19/20);
}

// state = 1
function drawAbout() {
  fill(255);
  strokeWeight(0);
  textSize(width/22);
  text("The Hooters Lucina game was developed by Yoostink.", width/2, width/9);

  text("Tap the food buttons on the right to collect food.", width/2, width/9 + width*2/15);
  text("Tap the table to deliver the order to the customer.", width/2, width/9 + width*3/15);
  text("Customers won't accept wrong orders and can leave.", width/2, width/9 + width*4/15);
  text("Serve quickly to maximize tips before the day ends.", width/2, width/9 + width*5/15);
  text("Purchase upgrades to earn stars. Earn 5 stars to win!", width/2, width/9 + width*6/15);

  if (game["click"] < 18) {
    image(game["images"]["fmorgan"+(game["click"]%6)], width/2, width/9 + width*8/15, width/5, width/5);
  }
  else {
    image(game["images"]["exalt"], width/2, width/9 + width*8/15, width/5, width/5);
  }

  drawRectHoverArray(game["01-LeaveAboutButton"], "Back", width/15, 20, 255, width/64);
}

// state = 2
function drawDay() {
  fill(255);
  strokeWeight(0);
  textSize(width/10);
  text("Day "+game["day"], width/2, width/4);

  textSize(width/15);
  text(starString(game["stars"]), width/2, width/9 + width*4/15);

  if (game["stars"] < 5) {
    text("$" + game["money"], width/2, width/9 + width*5/15);
    var upgrade = game["upgrades"][game["stars"]];
    text("Upgrade: " + upgrade["name"] + " [$" + upgrade["cost"] + "]", width/2, width/9 + width*6/15);
    text(upgrade["description"], width/2, width/9 + width*7/15);

    drawRectHoverArray(game["02-UpgradeButton"], "Upgrade", width/15, 20, 255, width/64);
    drawRectHoverArray(game["02-StartDayButton"], "Start Day", width/15, 20, 255, width/64);
  }
  else {
    text("Score: " + game["score"], width/2, width/9 + width*5/15);
    text(game["customersServed"] + " served", width/2, width/9 + width*6/15);
    text(game["customersAngered"] + " angered", width/2, width/9 + width*7/15);

    textSize(width/5);
    text("GAME OVER", width/2, width/9 + width*19/30);
    textSize(width/20);
    text("Thanks for playing!", width/2, width/9 + width*11/15);
    text("Take a screenshot and share!", width/2, width/9 + width*12/15);

    textSize(width/30);
    text(game["version"], width/2, width*29/30);
  }
}

// state = 3
function drawHooters() {
  fill(255);

  image(game["images"]["background"], width/2, width/2, width, width);

  for (var i = 0; i < game["foodOptions"].length; i += 1) {
    drawFoodButton(i, game["foodOptions"], game["foodCollected"], game["foodButtons"], game["foodObjects"]);
  }

  drawLucina(game["lucinaCurrentPosition"], game["lucinaPositions"], game["lucinaDims"]);

  for (var i = 0; i < game["tableCustomers"].length; i += 1) {
    drawCustomer(i, game["tableCustomers"], game["tableButtons"], game["customerDims"]);
  }

  for (var i = 0; i < game["tablesOccupied"].length; i += 1) {
    drawCustomerLeaveObject(i, game["customerLeaveObjects"], game["tableButtons"], game["tableCustomers"], game["customerDims"]);
  }

  for (var i = 0; i < game["tablesOccupied"].length; i += 1) {
    drawCustomerLeaveMessage(i, game["customerLeaveMessages"], game["tableButtons"]);
  }

  for (var i = 0; i < game["tables"].length; i += 1) {
    drawTableButton(i, game["tables"], game["tableButtons"]);
  }

  for (var i = 0; i < game["tableCustomers"].length; i += 1) {
    drawCustomerOrderAndPatience(i, game["tableCustomers"], game["tableButtons"], game["customerDims"], game["tableCustomerOrders"], game["foodObjects"], game["customerOrderDims"], game["tablesOccupied"], game["customersPatienceMax"], game["customerPatienceLength"]);
  }

  drawAnna(game["annaPosition"], game["lucinaDims"]);

  drawHUD();

  for (var i = 0; i < game["tablesOccupied"].length; i += 1) {
    if (game["tablesOccupied"][i] > 0) {
      game["tablesOccupied"][i] -= 1;
    }
    else {
      if (game["tables"][i] != 0) {
        // Customer will be assigned to an empty table
        if (game["tableCustomers"][i] == null) {
          assignCustomerToTable(game["customerProfiles"], i, game["tableCustomers"]);
          game["tablesOccupied"][i] = getCustomerPatience(game["stars"], game["fps"]);
          game["customersPatienceMax"][i] = game["tablesOccupied"][i];
          game["tableCustomerOrders"][i] = getCustomerOrder(game["stars"]);
        }
        // Customer leaves because their patience ran out or were served properly
        else {
          if (game["tableCustomerSatisfied"][i]) {
            game["customersServed"] += 1;
            game["customerLeaveObjects"][i] = { "customer": game["tableCustomers"][i], "countdown": game["customerLeaveDelay"], "satisfied": true, "image": game["tableCustomers"][i]["satisfiedImage"] };
            playSound("satisfied");
          }
          else {
            game["customersAngered"] += 1;
            game["customerLeaveMessages"][i] = { "message": "💢", "countdown": game["customerLeaveDelay"], "color": color(255, 0, 0) };
            game["customerLeaveObjects"][i] = { "customer": game["tableCustomers"][i], "countdown": game["customerLeaveDelay"], "satisfied": false, "image": game["tableCustomers"][i]["angeredImage"] };
            playSound("angered");
          }
          game["tableCustomers"][i] = null;
          game["tablesOccupied"][i] = getTableDelay(i, game["tables"], game["fps"]);
          game["tableCustomerSatisfied"][i] = false;
          game["customersPatienceMax"][i] = null;
        }
      }
    }
  }

  drawPauseButton(game["03-Pause"]);

  game["dayTimer"] -= 1;

  if (game["dayTimer"] <= 0) {
    game["state"] = 2;
    game["day"] += 1;
  }
}

function drawHUD() {
  drawRectBorderArray(game["03-TopHUDBox"], width/100, 20, 255, "", width/10, 255, width/40);
  drawRectFilledArray(game["03-TopHUDDay"], -1, "Day "+game["day"], width/10, 255, width/40);
  drawRectFilledArray(game["03-TopHUDMoney"], -1, "$"+game["money"], width/10, 255, width/40);
  drawRectFilledArray(game["03-TopHUDDayTimer"], -1, dayTimerString(game["dayTimer"], game["fps"], 3), width/10, 255, width/40);
}

function drawFoodButton(foodIndex, foodOption, foodCollected, foodButtons, foodObjects) {
  if (foodOption[foodIndex] == 1) {
    if (foodCollected[foodIndex] == 0) {
      drawRectBorderArray(foodButtons[foodIndex], width/100, 20, foodObjects[foodIndex]["color"], "", width/15, foodObjects[foodIndex]["color"], width/64, width/20);
      image(foodObjects[foodIndex]["image"], foodButtons[foodIndex][0], foodButtons[foodIndex][1], foodButtons[foodIndex][2]-width/30, foodButtons[foodIndex][3]-width/30)
    }
    else {
      drawRectBorderArray(foodButtons[foodIndex], width/100, foodObjects[foodIndex]["color"], foodObjects[foodIndex]["color"], "", width/15, 20, width/64, width/20);
      image(foodObjects[foodIndex]["image"], foodButtons[foodIndex][0], foodButtons[foodIndex][1], foodButtons[foodIndex][2]-width/60, foodButtons[foodIndex][3]-width/60)
    }
  }
}

function drawTableButton(tableIndex, tables, tableButtons) {
  if (tables[tableIndex] == 1) {
    //drawRectFilledArray(tableButtons[tableIndex], 255 - tableIndex*40, "", 0, 0, 0);
    image(game["images"]["table"], tableButtons[tableIndex][0]-width/40, tableButtons[tableIndex][1]-width*6/200, tableButtons[tableIndex][2]*1.3, tableButtons[tableIndex][3]*1.3);
  }
}

function drawLucina(currentPosition, positions, dims) {
  var lucinaArr = [positions[currentPosition][0], positions[currentPosition][1], dims[0], dims[1]];
  //drawRectFilledArray(lucinaArr, color(0, 0, 255), "", 0, 0, 0);

  if (currentPosition < 4) {
    if (game["frame"] % game["fps"] < game["fps"] * 0.5) {
      image(game["images"]["lucina_standing0"], lucinaArr[0], lucinaArr[1], lucinaArr[2], lucinaArr[3]);
    }
    else {
      image(game["images"]["lucina_standing1"], lucinaArr[0], lucinaArr[1], lucinaArr[2], lucinaArr[3]);
    }
  }
  else {
    if (game["frame"] % game["fps"] < game["fps"] * 0.5) {
      image(game["images"]["lucina_kitchen0"], lucinaArr[0], lucinaArr[1], lucinaArr[2], lucinaArr[3]);
    }
    else {
      image(game["images"]["lucina_kitchen1"], lucinaArr[0], lucinaArr[1], lucinaArr[2], lucinaArr[3]);
    }
  }
}

function drawAnna(annaPosition, lucinaDims) {
  if (game["money"] >= game["upgrades"][game["stars"]]["cost"]) {
    if (game["frame"] % game["fps"] < game["fps"] * 0.5) {
      image(game["images"]["anna0"], annaPosition[0], annaPosition[1], lucinaDims[0], lucinaDims[1]);
    }
    else {
      image(game["images"]["anna1"], annaPosition[0], annaPosition[1], lucinaDims[0], lucinaDims[1]);
    }
  }
}

function drawCustomer(customerIndex, tableCustomers, tableButtons, customerDims) {
  var customerArr = [customerDims[0]/2, tableButtons[customerIndex][1], customerDims[0], customerDims[1]];
  if (tableCustomers[customerIndex] != null) {
    //drawRectFilledArray(customerArr, tableCustomers[customerIndex]["color"], "", 0, 0, 0);
    image(tableCustomers[customerIndex]["waitingImage"], customerArr[0], customerArr[1]-width/40, customerArr[2], customerArr[3]);
  }
  else if (tableCustomers[customerIndex] == null && game["tables"][customerIndex] == 1) {
    image(game["images"]["chair"], customerArr[0], customerArr[1]-width/40, customerArr[2], customerArr[3]);
  }
}

function drawCustomerOrderAndPatience(customerIndex, tableCustomers, tableButtons, customerDims, tableCustomerOrders, foodObjects, customerOrderDims, tablesOccupied, customersPatienceMax, customerPatienceLength) {
  if (tableCustomers[customerIndex] != null) {
    var customerArr = [customerDims[0]/2, tableButtons[customerIndex][1], customerDims[0], customerDims[1]];

    drawCustomerOrder(customerArr, tableCustomerOrders[customerIndex], foodObjects, customerOrderDims);
    drawCustomerPatience(customerArr, tablesOccupied[customerIndex], customersPatienceMax[customerIndex], customerPatienceLength, customerOrderDims);
  }
}

function drawCustomerOrder(customerArr, tableCustomerOrder, foodObjects, customerOrderDims) {
  var foodCounter = 0;
  for (var i = 0; i < tableCustomerOrder.length; i += 1) {
    if (tableCustomerOrder[i] == 1) {
      foodCounter += 1;
      var orderArr = [customerArr[0] + (foodCounter+1)*customerOrderDims[0], customerArr[1]-customerOrderDims[1]-width*3/200, customerOrderDims[0], customerOrderDims[1]];
      //drawRectFilledArray(orderArr, foodObjects[i]["color"], "", 0, 0, 0);
      drawRectBorderArray(orderArr, 0, foodObjects[i]["color"], foodObjects[i]["color"], "", 0, 0, 0, borderRadius = width/50);
      image(foodObjects[i]["image"], orderArr[0], orderArr[1], orderArr[2]*0.9, orderArr[3]*0.9);
    }
  }
}

function drawCustomerPatience(customerArr, tableOccupied, customerPatienceMax, customerPatienceLength, customerOrderDims) {
  var percent = tableOccupied / customerPatienceMax;
  var barColor = color(0, 255, 0);
  if (percent <= 0.25) {
    barColor = color(255, 0, 0);
  }
  else if (percent <= 0.5) {
    barColor = color(255, 255, 0);
  }
  var patienceLength = percent * customerPatienceLength;
  //var patienceMaxArr = [customerArr[0] + customerOrderDims[0]*1.5, customerArr[1], customerPatienceLength, width/50];
  var patienceCurrArr = [customerArr[0] + customerOrderDims[0]*1.5, customerArr[1]-width*41/400, patienceLength, width/100];
  drawRectFilledArray(patienceCurrArr, barColor, "", 0, 0, 0, mode=CORNER);
}

function drawCustomerLeaveMessage(customerIndex, customerLeaveMessages, tableButtons) {
  var customerLeaveMessage = customerLeaveMessages[customerIndex];
  if (customerLeaveMessage != null) {
    var tableButton = tableButtons[customerIndex];
    var messageArr = [tableButton[0]-width/50, tableButton[1]-width/20, width/25, width/50];
    drawRectFilledArray(messageArr, -1, customerLeaveMessage["message"], width/25, customerLeaveMessage["color"], 0);
    customerLeaveMessage["countdown"] -= 1;

    if (customerLeaveMessage["countdown"] <= 0) {
      customerLeaveMessages[customerIndex] = null;
    }
  }
}

function drawCustomerLeaveObject(customerIndex, customerLeaveObjects, tableButtons, tableCustomers, customerDims) {
  var customerLeaveObject = customerLeaveObjects[customerIndex];
  if (customerLeaveObject != null) {
    var customerArr = [customerDims[0]/2, tableButtons[customerIndex][1], customerDims[0], customerDims[1]];
    image(customerLeaveObject["image"], customerArr[0], customerArr[1]-width/40, customerArr[2], customerArr[3]);

    //drawRectFilledArray(customerArr, customerLeaveObject["customer"]["color"], "", 0, 0, 0);

    customerLeaveObject["countdown"] -= 1;

    if (customerLeaveObject["countdown"] <= 0) {
      customerLeaveObjects[customerIndex] = null;
    }
  }
}

function drawPauseButton(arr) {
  drawRectBorderArray(arr, width/200, 20, 255, "||", width/25, 255, width/100, width/50);
}

// state = 4
function drawPauseMenu() {
  fill(255);
  strokeWeight(0);
  textSize(width/10);
  text("Paused", width/2, width/3);

  textSize(width/15);
  text("Score: " + game["score"], width/2, width/9 + width*6/15);
  text("Day " + game["day"], width/2, width/9 + width*7/15);
  text(starString(game["stars"]), width/2, width/9 + width*8/15);
  text(game["customersServed"] + " served", width/2, width/9 + width*9/15);
  text(game["customersAngered"] + " angered", width/2, width/9 + width*10/15);

  drawRectBorderArray(game["04-Resume"], width/200, -1, 255, "▶", width/25, 255, width/75, width/50);
}

function isMouseInRectArray(arr) {
  if (mouseX > (arr[0]-arr[2]/2)
    && mouseX < (arr[0]+arr[2]/2)
    && mouseY > (arr[1]-arr[3]/2)
    && mouseY < (arr[1]+arr[3]/2)) {
    return true;
  }
  return false;
}

function drawRectFilledArray(arr, color, txt, txtSize, txtColor, verticalOffset, mode=CENTER) {
  rectMode(mode);
  if (color < 0) {
    noFill();
  }
  else {
    fill(color);
  }
  stroke(color);
  strokeWeight(0);
  rect(arr[0], arr[1], arr[2], arr[3]);

  fill(txtColor);
  stroke(txtColor);
  textSize(txtSize);
  text(txt, arr[0], arr[1] + verticalOffset);
}

function drawRectBorderArray(arr, weight, color, borderColor, txt, txtSize, txtColor, verticalOffset, borderRadius = 0, mode=CENTER) {
  rectMode(mode);
  if (color < 0) {
    noFill();
  }
  else {
    fill(color);
  }
  stroke(borderColor);
  strokeWeight(weight);
  rect(arr[0], arr[1], arr[2], arr[3], borderRadius);

  fill(txtColor);
  stroke(txtColor);
  textSize(txtSize);
  strokeWeight(0);
  text(txt, arr[0], arr[1] + verticalOffset);
}

function drawRectHoverArray(arr, txt, txtSize, color1, color2, verticalOffset, mode=CENTER) {
  rectMode(mode);
  stroke(255);
  textSize(txtSize);
  if (isMouseInRectArray(arr)) {
    fill(color2);
    strokeWeight(width/100);
    rect(arr[0], arr[1], arr[2], arr[3]);
    fill(color1);
    strokeWeight(0);
    text(txt, arr[0], arr[1] + verticalOffset);
  }
  else {
    fill(color1);
    strokeWeight(width/100);
    rect(arr[0], arr[1], arr[2], arr[3]);
    fill(color2);
    strokeWeight(0);
    text(txt, arr[0], arr[1] + verticalOffset);
  }
}

function starString(stars) {
  var maxStars = 5;
  var starString = "";
  for (var i = 0; i < stars; i += 1) {
    starString += "★";
  }
  for (var i = 0; i < (maxStars - stars); i += 1) {
    starString += "☆"
  }
  return starString;
}

function dayTimerString(dayTimer, fps, digits) {
  var seconds = Math.ceil(dayTimer / fps);
  var secondsString = seconds.toString();
  while (secondsString.length < digits) {
    secondsString = "0" + secondsString;
  }
  return secondsString + "sec";
}

function isArrayAllZero(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] != 0) {
      return false;
    }
  }
  return true;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// https://flexiple.com/javascript/javascript-array-equality/
function arrayEquals(a, b) {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

function getTableDelay(tableIndex, tables, fps) {
  // min must be > game["customerLeaveDelay"]
  var min = fps * 4;
  var max = fps * 6;
  return tables[tableIndex] * (Math.floor(Math.random() * (max - min) + min));
}

function assignCustomerToTable(customerProfiles, tableIndex, tableCustomers) {
  var randomCustomerProfile = customerProfiles[Math.floor(Math.random() * customerProfiles.length)];
  tableCustomers[tableIndex] = randomCustomerProfile;
}

function getCustomerPatience(stars, fps) {
  var min = stars * fps;
  var max = stars * fps * 2;
  switch(stars) {
    case 1:
      min = 6 * fps;
      max = 9 * fps;
      break;
    case 2:
      min = 7 * fps;
      max = 10 * fps;
      break;
    case 3:
      min = 8 * fps;
      max = 12 * fps;
      break;
    case 4:
      min = 12 * fps;
      max = 16 * fps;
      break;
  }
  return patience = Math.floor(Math.random() * (max - min) + min);
}

function getCustomerOrder(stars) {
  var options = [];
  var order = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < (stars+2); i += 1) {
    options.push(i);
  }
  options = shuffle(options);

  var itemProbDistr = [1];
  switch(stars) {
    case 1:
      itemProbDistr = [1, 2, 2, 3];
      break;
    case 2:
      itemProbDistr = [1, 2, 2, 3, 3, 4];
      break;
    case 3:
      itemProbDistr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5];
      break;
    case 4:
      itemProbDistr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6];
      break;
  }
  var randomIndex = Math.floor(Math.random() * itemProbDistr.length);
  var numOfItems = itemProbDistr[randomIndex];

  for (var i = 0; i < numOfItems; i += 1) {
    var item = options.pop();
    order[item] = 1;
  }

  return order;
}

function getCustomerOrderEarnings(tableCustomerOrder) {
  var sum = 0;
  var itemCost = 5;
  for (var i = 0; i < tableCustomerOrder.length; i += 1) {
    sum += tableCustomerOrder[i] * itemCost;
  }
  return sum;
}

function resetTablesOccupied(tablesOccupied) {
  for (var i = 0; i < tablesOccupied.length; i += 1) {
    tablesOccupied[i] = getTableDelay(i, game["tables"], game["fps"]);
  }
}

function getDayTimer(stars, fps) {
  dayTimerMaxSeconds = 1;
  switch(stars) {
    case 1:
      dayTimerMaxSeconds = 100;
      break;
    case 2:
      dayTimerMaxSeconds = 100;
      break;
    case 3:
      dayTimerMaxSeconds = 100;
      break;
    case 4:
      dayTimerMaxSeconds = 100;
      break;
  }
  return fps * dayTimerMaxSeconds;
}

function playSound(name) {
  game["sounds"][name].currentTime = 0;
  game["sounds"][name].play();
}