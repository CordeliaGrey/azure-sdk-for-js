// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  ListWorkflowRunParameters,
  paginate
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List workflow runs.
 *
 * @summary List workflow runs.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowRun_List.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowRunHistoryList() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const options: ListWorkflowRunParameters = {
    queryParameters: {
      window: "30d",
      continuationToken: "",
      limit: 1000,
      sortKey: "submittedTime",
      isDescending: true
    }
  };
  const initialResponse = await client.path("/runs").get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

workflowRunHistoryList().catch(console.error);
