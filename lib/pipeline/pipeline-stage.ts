import { ExpertsClubPipelinesStack } from '../cdk-pipelines-stack';
import { Stage, CfnOutput, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ExpertsClubPipelineStage extends Stage {
  public readonly hcViewerUrl: CfnOutput;
  public readonly hcEndpoint: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new ExpertsClubPipelinesStack(this, 'ExpertsClubPipelinesStack');

    this.hcEndpoint = service.hcEndpoint;
    this.hcViewerUrl = service.hcViewerUrl;
  }
}