function main() {
  console.log("Let's roll some dice, baby!")
  console.log("-------------")
  for (let i = 0; i < 10; i++) {
    let die1 = Roll()
    let die2 = Roll();

    const message = `(${die1} + ${die2}) === (${die1.value} + {die2.value})`
    if (die1.value === die2.value) {
      message = " DOUBLES!";
    }
    console.log(message)
  }

}

main();