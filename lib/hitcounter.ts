import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class HitCounter extends Construct {
  public readonly handler: lambda.Function;
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new dynamodb.Table(this, `${id}Dynamo`, {
      partitionKey: {
        name: 'path',
        type: dynamodb.AttributeType.STRING 
      },
    });

    this.table = table;

    this.handler = new lambda.Function(this, `${id}Lambda`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        TABLE_NAME: table.tableName
      }
    });

    table.grantReadWriteData(this.handler);
  }
}
