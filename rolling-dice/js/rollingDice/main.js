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

let Roll = () => {
  getRandomInt(1, 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Die = (value) => {
    return {
      Value: value
    }
  }

  let dieString = parseInt(Die)


  switch (Value) {
    case 1:
      dieString = "\u2680";
      break;
    case 2:
      dieString = "\u2681";
      break;
    case 3:
      dieString = "\u2682";
      break;
    case 4:
      dieString = "\u2683";
      break;
    case 5:
      dieString = "\u2684";
      break;
    case 6:
      dieString = "\u2685";
      break;
  }
  return dieString
}



  }
main();