#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
})

var cmd = process.argv[2]
var note = process.argv[3]

switch (cmd) {

  case 'list':
    getAll()
      .then(listDrinks)
      .catch(logError)
      .finally(closeDB)
    break

    case 'add':
    addBevy(note)
      .then(getAll)
      .then(listDrinks)
      .catch(logError)
      .finally(closeDB)
    break

  default:
    console.log('no matched cases')
    closeDB()
    break
}

function listDrinks (drinks) {
  drinks.forEach(function (drink) { console.log(drink.beverage) })
}

function logError (err) {
  console.log('Dang, we exploded like a bomb: ', err)
}
function getAll () {
  return knex.raw('select * from "drinks"')
}

function addBevy (beverage) {
  return knex.raw('insert into "drinks" ("beverage") values ("' + beverage + '" );')
}

function closeDB () {
  knex.destroy()
}
