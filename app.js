const drinkTray = [];
const drinkType =["cola", "lemonade", "water"];

// this for loop bellow will run from 0 to 4
for (let i = 0; i < 5; i++) {
 if (i=== 0 || i===1) {
  // this will push when either of condition is true
  drinkTray.push(drinkType[0])
 }else if (i===2 || i===3) {
 // this will push when either of condition is true
  drinkTray.push(drinkType[1])
 }else{
// and this will run for 4 
drinkTray.push(drinkType[2])
 }
 
}