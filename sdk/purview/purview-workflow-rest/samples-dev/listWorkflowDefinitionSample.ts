// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  ListWorkflowDefinitionParameters,
  paginate
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all workflow definitions.
 *
 * @summary List all workflow definitions.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowDefinitions_List.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowDefinitionsList() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const options: ListWorkflowDefinitionParameters = {
    queryParameters: { scenarioType: "CreateTerm" }
  };
  const initialResponse = await client.path("/definitions").get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

workflowDefinitionsList().catch(console.error);
