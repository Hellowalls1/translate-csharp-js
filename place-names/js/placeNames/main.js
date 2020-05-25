function main() {
  console.log("All Place Names")
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
  ]

  for (let name of names) {
    console.log(name)
  }

  console.log("")

  console.log("'The' Place Names")
  const newNames = names.filter((n) => n.startsWith("The"))


  for (let n of newNames) {
    console.log(n)
  }
}

main();