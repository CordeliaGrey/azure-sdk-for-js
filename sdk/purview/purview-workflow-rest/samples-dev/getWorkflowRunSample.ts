// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  GetWorkflowRunParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a workflow run.
 *
 * @summary Get a workflow run.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowRun_Get.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowRunGet() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const workflowRunId = "04334a74-3400-11ed-a261-0242ac120002";
  const options: GetWorkflowRunParameters = {
    queryParameters: { withDetails: false }
  };
  const result = await client
    .path("/runs/{workflowRunId}", workflowRunId)
    .get(options);
  console.log(result);
}

workflowRunGet().catch(console.error);
