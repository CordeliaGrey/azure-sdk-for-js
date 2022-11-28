// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  ReassignTaskRequestParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reassign a task request.
 *
 * @summary Reassign a task request.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/TaskRequest_Reassign.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function taskRequestReassign() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const taskRequestId = "70ef910d-3ab7-4cfb-a52a-4ddfbc522071";
  const options: ReassignTaskRequestParameters = {
    body: {
      reassignments: [
        {
          reassignFrom: "6a443b49-32ac-4187-a0fd-6d11688b0839",
          reassignTo: "c20f1cbc-eb59-4983-bbed-97531e639d2b"
        }
      ]
    }
  };
  const result = await client
    .path("/requests/tasks/{taskRequestId}/reassign", taskRequestId)
    .post(options);
  console.log(result);
}

taskRequestReassign().catch(console.error);
