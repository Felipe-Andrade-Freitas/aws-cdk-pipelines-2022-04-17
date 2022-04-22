import { CfnOutput, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ExpertsClubStack } from "../experts-club-stack";

export class ExpertsClubPipelineStage extends Stage {
  public readonly hcEndpoint: CfnOutput;
  public readonly hcViewerUrl: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const rocketseatStack = new ExpertsClubStack(this, 'ExpertsClubStackWithPipeline');
    
    this.hcEndpoint = rocketseatStack.hcEndpoint;
    this.hcViewerUrl = rocketseatStack.hcViewerUrl;
  }
}