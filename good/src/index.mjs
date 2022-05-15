import * as Person from './person.mjs'

function main() {
  const newPerson = Person.register({
    name: 'januswel',
    belongsTo: 'Engineering Management Office',
    isActive: true,
    needsToSendMail: false,
  })
  console.log(newPerson.id)
}

main()
