#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExpertsClubPipelinesStack } from '../lib/cdk-pipelines-stack';

const app = new cdk.App();


new ExpertsClubPipelinesStack(app, 'CdkWorkshopPipelineStack');
