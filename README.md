# aws.dynamodb.lab

low-latency NoSQL database service

---

## Resources

- [Getting Started with Amazon DynamoDB](https://aws.amazon.com/dynamodb/getting-started/)
- [Getting Started with Node.js and DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html)
- [Class: AWS.DynamoDB](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)

## Usage

First, create a DynamoDB table called `People`.

Next, be sure to [install](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) the [AWS CLI](https://aws.amazon.com/cli)

Finally, follow the examples found in [index.js](https://github.com/mrtillman-0001/aws.dynamodb.lab/blob/main/index.js):

```js
const { DynamoDBPersonService } = require('./dynamodb.service');

const personService = new DynamoDBPersonService();

// add new person
personService.putPerson("Tony")
  .then(console.log).catch(console.log);

// update person last name
personService.updateLastName("Tony", "Montana")
  .then(console.log).catch(console.log);

// get person
personService.getPerson("Tony")
  .then(console.log).catch(console.log);

// delete person
personService.deletePerson("Tony")
  .then(console.log).catch(console.log);
```