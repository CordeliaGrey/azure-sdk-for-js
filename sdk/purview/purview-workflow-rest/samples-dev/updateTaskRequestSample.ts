// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  UpdateTaskRequestParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the status of a workflow task request.
 *
 * @summary Update the status of a workflow task request.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/TaskRequest_Update.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function taskRequestUpdate() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const taskRequestId = "d5bd0215-df84-4245-8e18-3a8f012be376";
  const options: UpdateTaskRequestParameters = {
    body: { comment: "Thanks!", newStatus: "Completed" }
  };
  const result = await client
    .path("/requests/tasks/{taskRequestId}/change-status", taskRequestId)
    .post(options);
  console.log(result);
}

taskRequestUpdate().catch(console.error);
