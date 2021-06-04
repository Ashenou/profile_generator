const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayOfQuestions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];
// displaySurvey(callBack);
let arrayOfAnswers = [];

const userQuestions = () => {
  let i = 0;
  rl.question(arrayOfQuestions[i], (answer) => {
    arrayOfAnswers.push(answer);
    i++;
    rl.question(arrayOfQuestions[i], (answer) => {
      arrayOfAnswers.push(answer);
      i++;
      rl.question(arrayOfQuestions[i], (answer) => {
        arrayOfAnswers.push(answer);
        i++;
        rl.question(arrayOfQuestions[i], (answer) => {
          arrayOfAnswers.push(answer);
          i++;
          rl.question(arrayOfQuestions[i], (answer) => {
            arrayOfAnswers.push(answer);
            i++;
            rl.question(arrayOfQuestions[i], (answer) => {
              arrayOfAnswers.push(answer);
              i++;
              rl.question(arrayOfQuestions[i], (answer) => {
                arrayOfAnswers.push(answer);
                rl.close();
                console.log(`${arrayOfAnswers[0]} Loves listening to ${arrayOfAnswers[2]} while ${arrayOfAnswers[1]}, devouring ${arrayOfAnswers[4]} for ${arrayOfAnswers[3]}, prefers ${arrayOfAnswers[5]} over any sport, and is amazing at ${arrayOfAnswers[6]}.`);
              });
            });
          });
        });
      });
    });
  });
};

userQuestions();

//   rl.question(question, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
//     return answer;
//   });
// };
