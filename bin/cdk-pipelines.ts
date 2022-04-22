#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExpertsClubPipelineStack } from '../lib/pipeline/pipeline-stack';

const app = new cdk.App();


new ExpertsClubPipelineStack(app, 'CdkWorkshopPipelineStack');
