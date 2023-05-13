import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./emoji";

// function getEmojiDetail(emojipedia){
//   return (
//     <Emoji 
//      key={emojipedia.id}
//      emoji={emojipedia.emoji}
//      name={emojipedia.name}
//      meaning={emojipedia.meaning} />
//   )
// }

var emojipediaMeaning = emojipedia.map(function (emojipedia) {
  return emojipedia.meaning.substring(0, 100);
});
console.log(emojipediaMeaning);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojipedia) => (
          <Emoji
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;


// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// var newNumbers = numbers.map(function(num){
//   return num > 10;
// });
// //Filter - Create a new array by keeping the items that return true.
// var newNumbers = numbers.filter(function(num){
//   return num > 10;
// });



// //Reduce - Accumulate a value by doing something to each item in an array.
// console.log(newNumbers);

//  var newNumber= numbers.reduce(function(accumulator,currentNumbers){
//   return accumulator + currentNumbers;
// })

// console.log(newNumber);
// //Find - find the first item that matches from an array.


// const num = numbers.find(function(num){
//   return num > 10;
// })
// // itteration stop as it find the num
// console.log(num);
// //FindIndex - find the index of the first item that matches.
// const number = numbers.findIndex(function(num){
//   return num > 10;
// })
// // itteration stop as it find the num
// console.log(number);