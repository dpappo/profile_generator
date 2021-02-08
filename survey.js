const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userInput = {};
// console.log(userInput[name]);

rl.question("What's your name? Nicknames are also acceptable :)? ", (name) => {
  userInput[name] = name;
  rl.prompt();
  rl.question("What's an activity you like doing? ", (activity) => {
    userInput[activity] = activity;
    rl.prompt();
    rl.question("What do you listen to while doing that? ", (music) => {
      userInput[music] = music;
      rl.prompt();
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
        (meal) => {
          userInput[meal] = meal;
          rl.prompt();
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (food) => {
              userInput[food] = food;
              rl.prompt();
              rl.question(
                "Which sport is your absolute favourite? ",
                (sport) => {
                  userInput[sport] = sport;
                  rl.prompt();
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (superpower) => {
                      userInput[superpower] = superpower;
                      console.log(
                        `${name} enjoys ${activity}, especially when they listen to ${music}. ${name}'s favorite food is ${food}, which of course makes their favorite meal ${meal}. They enjoy ${sport}. And guess, what? They have a superpower; it's ${superpower}.`
                      );
                      process.exit(0);
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
