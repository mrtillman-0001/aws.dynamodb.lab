const {
  DynamoDBClient,
  GetItemCommand,
  UpdateItemCommand,
  PutItemCommand,
  DeleteItemCommand
} = require("@aws-sdk/client-dynamodb");

class DynamoDBServiceBase {
  constructor() {
    this._region = "us-east-1";
    this.client = new DynamoDBClient({
      region: this._region,
    });
  }
  async get(command) {
    return await this.client.send(command);
  }
  async put(command) {
    return await this.client.send(command);
  }
  async update(command) {
    return await this.client.send(command);
  }
  async delete(command) {
    return await this.client.send(command);
  }
}

class DynamoDBPersonService extends DynamoDBServiceBase {
  constructor(){
    super();
    this._tableName = "People";
  }

  async putPerson(name){
    const command = new PutItemCommand({
      TableName: this._tableName,
      Item: {
        name: {
          S: name,
        }
      },
    });
    return await this.put(command);
  }

  async getPerson(name){
    const command = new GetItemCommand({
      TableName: this._tableName,
      Key: {
        name: {
          S: name,
        },
      },
    });
    return await this.get(command);
  }

  async updateLastName(name, lastName){
    const command = new UpdateItemCommand({
      TableName: this._tableName,
      Key: {
        name: {
          S: name,
        },
      },
      ExpressionAttributeNames: {
        "#N": "lastName",
      },
      ExpressionAttributeValues: {
        ":n": {
          S: lastName,
        },
      },
      UpdateExpression: "SET #N = :n",
    });
    return await this.update(command);
  }

  async deletePerson(name){
    const command = new DeleteItemCommand({
      TableName: this._tableName,
      Key: {
        name: {
          S: name,
        },
      },
    });
    return await this.delete(command);
  }

}

module.exports.DynamoDBPersonService = DynamoDBPersonService;
