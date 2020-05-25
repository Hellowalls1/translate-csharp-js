function main() {
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
  ]
  console.log(names)

  for (let name of names) {
    console.log(name)
  }
  console.log()

  const newNames = names.filter((n) => n.startsWith("The"))

  console.log(newNames)

  for (let n of newNames) {
    console.log(n)
  }
}

main();