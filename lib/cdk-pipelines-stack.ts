import { aws_apigateway as apiGateway, aws_lambda as lambda, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { TableViewer } from 'cdk-dynamo-table-viewer';
import { Construct } from 'constructs';
import { HitCounter } from './hitcounter';

export class ExpertsClubPipelinesStack extends Stack {
  public readonly hcViewerUrl: CfnOutput;
  public readonly hcEndpoint: CfnOutput;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const stackName = "ExpertsClub";

    const helloWithCounter = new HitCounter(this, stackName);

    new apiGateway.LambdaRestApi(this, `${stackName}Endpoint`, {
      handler: helloWithCounter.handler
    });

    new TableViewer(this, `${stackName}ViewCounter`, {
      title: 'Hello Hits',
      table: helloWithCounter.table,
      sortBy: '-hits'
    });
  }
}

