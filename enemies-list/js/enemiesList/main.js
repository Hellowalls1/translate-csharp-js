function main() {
  console.log("My Enemies List!")
  console.log("----------------")

  for (let Enemy of enemies) {
    if (Enemy.IsReallyHated === true) {
      console.log(`${Enemy.firstName} ${Enemy.lastName} (Really, really dislike!)`)
    } else {
      console.log(`${Enemy.firstName} ${Enemy.lastName}`)
    }
  }
}

let enemies = [
  {
    firstName: "Joshua",
    lastName: "Flowers",
    Offenses: [
      "Being a jerk to me in elementary school",
      "Not being nice to me in elementary school"
    ],
    IsReallyHated: true
  },

  {
    firstName: "Darth",
    lastName: "Vader",
    Offenses: [
      "Cut off Luke's hand",
      "Murdered all those kids",
      "Unkind management practices"
    ],
    IsReallyHated: false
  },

  {
    firstName: "Betty",
    lastName: "Rudelady",
    Offenses: [
      "Phone calls in the theater",
      "Phone calls on the bus",
      "Phone calls in line at the grocery store",
      "Poor conversationalist"
    ],
    IsReallyHated: true
  },

  {
    firstName: "Leon",
    lastName: "Peck",
    Offenses: "Keeps giving me a hotplate",
    IsReallyHated: false
  }

]




main();