// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a workflow definition.
 *
 * @summary Delete a workflow definition.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowDefinition_Delete.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowDefinitionDelete() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const workflowDefinitionId = "4afb5752-e47f-43a1-8ba7-c696bf8d2745";
  const result = await client
    .path("/definitions/{workflowDefinitionId}", workflowDefinitionId)
    .delete();
  console.log(result);
}

workflowDefinitionDelete().catch(console.error);
