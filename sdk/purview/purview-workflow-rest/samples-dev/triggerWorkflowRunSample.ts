// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  TriggerWorkflowRunParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Trigger a workflow run for requestor
 *
 * @summary Trigger a workflow run for requestor
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowRun_Trigger.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowRunTrigger() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const workflowRunId = "04334a74-3400-11ed-a261-0242ac120002";
  const options: TriggerWorkflowRunParameters = {
    body: {
      payload: {
        name: "sample_term",
        anchor: { glossaryGuid: "41065e8b-80af-4bae-afb8-13856b85444d" },
        attributes: {},
        nickName: "sample_term",
        status: "Draft"
      },
      requestType: "CreateTermRequest"
    }
  };
  const result = await client
    .path("/runs/{workflowRunId}/trigger", workflowRunId)
    .post(options);
  console.log(result);
}

workflowRunTrigger().catch(console.error);
