// write your code here
//#### 1. Color Analyzer
const color = "red";

switch (color) {
  case "red":
    console.log("Red's a great color on you.");
    break;
  case "blue":
    console.log("Blue? Great choice.");
    break;
  case "green":
    console.log(" Ok. Green it is.");
    break;
  case "yellow":
    console.log("Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
}

//#### 2. Benotung
const grade = "A";
switch (grade) {
  case "A":
    console.log("Well done!");
    break;
  case "B":
    console.log("Good on you!");
    break;
  case "C":
    console.log("Good effort");
    break;
  case "D":
    console.log("Try harder next time...");
    break;

  default:
    console.log("Q2: Yikes...");
    break;
}

//#### 3. Früchte
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Ausgabe Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Ausgabe Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Ausgabe Q3: Yep, oranges. Great choice.");
    break;

  case "strawberry":
    console.log("Ausgabe Q3:Mmmm...nothing better than strawberries.");
    break;

  default:
    console.log("Q3: PICK A FRUIT");
    break;
}

//#### 4. Prozent geladen

const percentageComplete = 0;
if (percentageComplete < 30) {
  console.log("Still a long way to go");
} else if (percentageComplete >= 20 && percentageComplete <= 50) {
  console.log("Slowly getting there");
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
  console.log("You can do it!");
} else if (percentageComplete >= 81 && percentageComplete <= 99) {
  console.log("Q4: This is the last push!");
} else if (percentageComplete == 100) {
  console.log("Q4: You're there. Well done!");
}
