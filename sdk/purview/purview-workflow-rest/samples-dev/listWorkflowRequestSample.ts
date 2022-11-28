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
 * This sample demonstrates how to Get all workflow requests, include user's sent/received/history requests
 *
 * @summary Get all workflow requests, include user's sent/received/history requests
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowRequest_Get.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowRequestGet() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const initialResponse = await client.path("/requests").get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

workflowRequestGet().catch(console.error);
