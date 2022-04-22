#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExpertsClubStack } from '../lib/experts-club-stack';

const app = new cdk.App();


new ExpertsClubStack(app, 'CdkWorkshopPipelineStack');
