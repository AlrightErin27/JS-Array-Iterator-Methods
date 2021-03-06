// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"

// your code here
const foods = ["pizza", "tacos", "ice cream", "sushi"];
foods.forEach(function (food) {
  // console.log(food);
});

// (2) Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

const foodLevels = [
  { name: "Pizza", level: "very" },
  { name: "Tacos", level: "mostly" },
  { name: "Cottage Cheese", level: "not very" },
];

// your code here
foodLevels.forEach(function (foods) {
  // console.log(foods.name + " " + foods.level);
});
