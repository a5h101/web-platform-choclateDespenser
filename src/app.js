let chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100
//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {
  if (count <= 0) return 'Number cannot be zero/negative';
  for (let i = 0; i < count; i++) chocolates.unshift(color);
  return chocolates;
}
//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  if (chocolates.length < number)
    return 'Insufficient chocolates in the dispenser';
  if (number <= 0) return 'Number cannot be zero/negative';
  let removedChocs = [];
  for (let i = 0; i < number; i++) removedChocs.push(chocolates.shift());
  return removedChocs;
}
//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, number) {
  if (chocolates.length < number)
    return 'Insufficient chocolates in the dispenser';
  if (number <= 0) return 'Number cannot be zero/negative';
  let choc = [];
  for (let i = 0; i < number; i++) choc.push(chocolates.pop());
  return choc;
}
//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (chocolates.length < number)
    return 'Insufficient chocolates in the dispenser';
  if (number <= 0) return 'Number cannot be zero/negative';
  let choc2 = [];
  for (let i = 0; i < number; i++) choc2.push(chocolates.pop(color));
  return choc2;
}
//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  let color1 = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
 let  colorCount1 = [];
  color1.forEach((x) => {
    let c = 0;
    chocolates.forEach((y) => {
      if (y === x) c++;
    });
    if (c > 0) colorCount1.push(c);
  });
  return colorCount1;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  let color = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
 let colorCount = [];
  color.forEach((x) => {
    let c = 0;
    chocolates.forEach((y) => {
      if (y === x) c++;
   });
    colorCount.push(c);
  });
 x=colorCount;
  // console.log(colorCount)
for(let i=0;i<x.length;i++){
    let t;
    for(let j=0;j<x.length-1;j++){
        if(x[j]<x[j+1]){
         t=x[j];
         x[j]=x[j+1];
         x[j+1]=t;
        t=color[j];
        color[j]=color[j+1];
        color[j+1]=t;
        }
    }
}
//  console.log(x)
x.forEach((x)=>{
    if(x===0)
    color.pop()
})
//  console.log(color)
   return color
}
//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates,number, color, finalColor){
  if (number<=0)
    return 'Number cannot be zero/negative';
    if(color==finalColor)
      return "Can't replace the same chocolates"
  let c=0;
  for(let i=0;i<chocolates.length;i++){
    if(c<=number){
    if(chocolates[i]===color)
        chocolates[i]=finalColor
        c++;
    }
  else
  break
}
return chocolates
}
//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  if(color==finalColor)
    return "Can't replace the same chocolates"
  let countOfFinalColorChocolates=0;
  // console.log("st here")
  // console.log(chocolates)
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]===color){
     chocolates[i]=finalColor
        countOfFinalColorChocolates++;
    }
    }
    // console.log(color)
    // console.log(finalColor)
    // console.log(chocolates)
    // console.log(countOfFinalColorChocolates)
 return [countOfFinalColorChocolates, chocolates]
}
//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
