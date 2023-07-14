var game = {};

function setup() {
  // Create a canvas that fits the width of the screen
  var canvasWidth = min(windowWidth, windowHeight) * 0.99;
  var canvas = createCanvas(canvasWidth, canvasWidth);
  canvas.parent("container");
  textFont("VT323");
  // CENTER Mode
  textAlign(CENTER);
  rectMode(CENTER);

  // 0 = start menu
  // 1 = about
  // 2 = day screen
  // 3 = game
  // 4 = pause menu
  game["version"] = "v0.1";
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
      "cost": 800
    },
    {
      "name": "Buy Liquor License",
      "description": "Unlocks beer + table + star.",
      "cost": 1500
    },
    {
      "name": "Renovate",
      "description": "Achieve 5 stars!",
      "cost": 2000
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
      "color": color("#F5631F")
    },
    {
      "name": "fries",
      "color": color("#DA362A")
    },
    {
      "name": "soda",
      "color": color("#1F8EA7")
    },
    {
      "name": "burger",
      "color": color("#9B5A10")
    },
    {
      "name": "salad",
      "color": color("#55A944")
    },
    {
      "name": "beer",
      "color": color("#E7CF55")
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
  game["customerPatienceLength"] = width/5;
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
    [game["03-Table1"][0] + width/4, game["03-Table1"][1]],
    [game["03-Table2"][0] + width/4, game["03-Table2"][1]],
    [game["03-Table3"][0] + width/4, game["03-Table3"][1]],
    [game["03-Table4"][0] + width/4, game["03-Table4"][1]],
    [game["03-FoodWings"][0] - width/5, width/2+width/20]
  ];
  game["lucinaDims"] = [width/10, width/5];

  game["customerProfiles"] = [
    {
      "name": "Red",
      "color": color(255, 0, 0)
    },
    {
      "name": "Green",
      "color": color(0, 255, 0)
    },
    {
      "name": "Blue",
      "color": color(0, 0, 255)
    }
  ];
  game["customerDims"] = [width/10, width/5];
  game["customerOrderDims"] = [width*7/180, width*7/180];

  frameRate(game["fps"]);
}

function draw() {
  background(20);
  // Set the background color
  switch(game["state"]) {
    case 0:
      drawStartMenu();
      break;
    case 1:
      drawAbout();
      break;
    case 2:
      drawDay();
      break;
    case 3:
      drawHooters();
      break;
    case 4:
      drawPauseMenu();
      break;
  }

}

function mouseClicked() {
  switch(game["state"]) {
    case 0:
      if (isMouseInRectArray(game["00-PlayButton"])) {
        game["state"] = 2;
      }
      if (isMouseInRectArray(game["00-AboutButton"])) {
        game["state"] = 1;
      }
      break;
    case 1:
      if (isMouseInRectArray(game["01-LeaveAboutButton"])) {
        game["state"] = 0;
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
      }
      break;
    case 3:
      // Food is tapped
      for (var i = 0; i < game["foodOptions"].length; i += 1) {
        if (game["foodOptions"][i] == 1 && isMouseInRectArray(game["foodButtons"][i])) {
          // Toggle between 0 and 1
          game["foodCollected"][i] = 1 - game["foodCollected"][i];
          game["lucinaCurrentPosition"] = game["tables"].length;
        }
      }
      // Table is tapped
      for (var i = 0; i < game["tables"].length; i += 1) {
        if (game["tables"][i] == 1 && isMouseInRectArray(game["tableButtons"][i])) {
          if (!isArrayAllZero(game["foodCollected"]) && game["tableCustomers"][i] != null) {
            game["lucinaCurrentPosition"] = i;
            // Correct order given
            if (arrayEquals(game["foodCollected"], game["tableCustomerOrders"][i])) {
              var orderAmount = getCustomerOrderEarnings(game["tableCustomerOrders"][i]);
              var tipPercent =  game["tablesOccupied"][i] / game["customersPatienceMax"][i]
              var tipAmount = Math.floor(tipPercent * orderAmount * game["maxTipPercent"]);
              var totalAmount = orderAmount + tipAmount;
              game["foodCollected"] = [0, 0, 0, 0, 0, 0];
              game["tablesOccupied"][i] = 0;
              game["tableCustomerSatisfied"][i] = true;
              game["money"] += totalAmount;
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
  fill(255);
  strokeWeight(0);
  textSize(width/10);
  text("Hooters Lucina", width/2, width/3);

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
  textSize(width/15);
  text("The Hooters Lucina game", width/2, width/9);
  text("was developed by Yoostink.", width/2, width/9 + width/15);

  text("Tap the food buttons to collect.", width/2, width/9 + width*3/15);
  text("Tap the table to deliver the food.", width/2, width/9 + width*4/15);
  text("Customers won't accept wrong orders.", width/2, width/9 + width*5/15);
  text("They leave when they wait too long.", width/2, width/9 + width*6/15);
  text("Serve quickly to maximize tips.", width/2, width/9 + width*7/15);
  text("Purchase upgrades to progress.", width/2, width/9 + width*8/15);
  text("Earn 5 stars to win!", width/2, width/9 + width*9/15);

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

  for (var i = 0; i < game["foodOptions"].length; i += 1) {
    drawFoodButton(i, game["foodOptions"], game["foodCollected"], game["foodButtons"], game["foodObjects"]);
  }

  for (var i = 0; i < game["tables"].length; i += 1) {
    drawTableButton(i, game["tables"], game["tableButtons"]);
  }

  drawLucina(game["lucinaCurrentPosition"], game["lucinaPositions"], game["lucinaDims"]);

  for (var i = 0; i < game["tableCustomers"].length; i += 1) {
    drawCustomer(i, game["tableCustomers"], game["tableButtons"], game["customerDims"], game["tableCustomerOrders"], game["foodObjects"], game["customerOrderDims"], game["tablesOccupied"], game["customersPatienceMax"], game["customerPatienceLength"]);
  }

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
          }
          else {
            game["customersAngered"] += 1;
            game["customerLeaveMessages"][i] = { "message": "💢", "countdown": game["customerLeaveDelay"], "color": color(255, 0, 0) };
          }
          game["customerLeaveObjects"][i] = { "customer": game["tableCustomers"][i], "countdown": game["customerLeaveDelay"] };
          game["tableCustomers"][i] = null;
          game["tablesOccupied"][i] = getTableDelay(i, game["tables"], game["fps"]);
          game["tableCustomerSatisfied"][i] = false;
          game["customersPatienceMax"][i] = null;
        }
      }
    }
  }

  for (var i = 0; i < game["tablesOccupied"].length; i += 1) {
    drawCustomerLeaveObject(i, game["customerLeaveObjects"], game["tableButtons"], game["tableCustomers"], game["customerDims"]);
  }

  for (var i = 0; i < game["tablesOccupied"].length; i += 1) {
    drawCustomerLeaveMessage(i, game["customerLeaveMessages"], game["tableButtons"]);
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
      drawRectBorderArray(foodButtons[foodIndex], width/100, -1, foodObjects[foodIndex]["color"], foodObjects[foodIndex]["name"], width/15, foodObjects[foodIndex]["color"], width/64, width/20);
    }
    else {
      drawRectBorderArray(foodButtons[foodIndex], width/100, foodObjects[foodIndex]["color"], foodObjects[foodIndex]["color"], foodObjects[foodIndex]["name"], width/15, 20, width/64, width/20);
    }
  }
}

function drawTableButton(tableIndex, tables, tableButtons) {
  if (tables[tableIndex] == 1) {
    drawRectFilledArray(tableButtons[tableIndex], 255 - tableIndex*40, "", 0, 0, 0);
  }
}

function drawLucina(currentPosition, positions, dims) {
  var lucinaArr = [positions[currentPosition][0], positions[currentPosition][1], dims[0], dims[1]];
  drawRectFilledArray(lucinaArr, color(0, 0, 255), "", 0, 0, 0);
}

function drawCustomer(customerIndex, tableCustomers, tableButtons, customerDims, tableCustomerOrders, foodObjects, customerOrderDims, tablesOccupied, customersPatienceMax, customerPatienceLength) {
  if (tableCustomers[customerIndex] != null) {
    var customerArr = [customerDims[0]/2, tableButtons[customerIndex][1], customerDims[0], customerDims[1]];
    drawRectFilledArray(customerArr, tableCustomers[customerIndex]["color"], "", 0, 0, 0);

    drawCustomerOrder(customerArr, tableCustomerOrders[customerIndex], foodObjects, customerOrderDims);
    drawCustomerPatience(customerArr, tablesOccupied[customerIndex], customersPatienceMax[customerIndex], customerPatienceLength, customerOrderDims);
  }
}

function drawCustomerOrder(customerArr, tableCustomerOrder, foodObjects, customerOrderDims) {
  var foodCounter = 0;
  for (var i = 0; i < tableCustomerOrder.length; i += 1) {
    if (tableCustomerOrder[i] == 1) {
      foodCounter += 1;
      var orderArr = [customerArr[0] + (foodCounter+1)*customerOrderDims[0], customerArr[1]-customerOrderDims[1], customerOrderDims[0], customerOrderDims[1]];
      drawRectFilledArray(orderArr, foodObjects[i]["color"], "", 0, 0, 0);
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
  var patienceMaxArr = [customerArr[0] + customerOrderDims[0]*1.5, customerArr[1], customerPatienceLength, width/50];
  var patienceCurrArr = [customerArr[0] + customerOrderDims[0]*1.5, customerArr[1], patienceLength, width/50];
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
    drawRectFilledArray(customerArr, customerLeaveObject["customer"]["color"], "", 0, 0, 0);
    customerLeaveObject["countdown"] -= 1;

    if (customerLeaveObject["countdown"] <= 0) {
      customerLeaveObjects[customerIndex] = null;
    }
  }
}

function drawPauseButton(arr) {
  drawRectBorderArray(arr, width/200, -1, 255, "||", width/25, 255, width/100, width/50);
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
      min = 18 * fps;
      max = 24 * fps;
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