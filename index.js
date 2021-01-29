const { DynamoDBPersonService } = require('./dynamodb.service');

const personService = new DynamoDBPersonService();

// add new person
personService.putPerson("Tony")
  .then(console.log).catch(console.log);

// update person last name
// personService.updateLastName("Tony", "Montana")
//  .then(console.log).catch(console.log);

// get person
// personService.getPerson("Tony")
//  .then(console.log).catch(console.log);

// delete person
// personService.deletePerson("Tony")
//  .then(console.log).catch(console.log);