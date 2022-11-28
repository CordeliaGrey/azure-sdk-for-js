// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  paginate
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List workflow runs of a workflow definition
 *
 * @summary List workflow runs of a workflow definition
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowDefinitionRun_List.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowDefinitionRunList() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const workflowDefinitionId = "a72ca247-d051-4cd5-aaa5-031be6bb0354";
  const initialResponse = await client
    .path("/definitions/{workflowDefinitionId}/runs", workflowDefinitionId)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

workflowDefinitionRunList().catch(console.error);
