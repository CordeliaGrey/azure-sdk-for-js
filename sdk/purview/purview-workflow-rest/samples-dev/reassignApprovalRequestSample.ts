// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  ReassignApprovalRequestParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reassign an approval request.
 *
 * @summary Reassign an approval request.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/ApprovalRequest_Reassign.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function approvalRequestReassign() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const approvalRequestId = "11b0244b-70ea-4c6b-9d28-08f52de40f2f";
  const options: ReassignApprovalRequestParameters = {
    body: {
      reassignments: [
        {
          reassignFrom: "1c4e0c39-79ff-4f5f-b2c3-9e393e439e32",
          reassignTo: "518110b5-29de-48d4-bf14-6d0f7cfaf277"
        }
      ]
    }
  };
  const result = await client
    .path("/requests/approvals/{approvalRequestId}/reassign", approvalRequestId)
    .post(options);
  console.log(result);
}

approvalRequestReassign().catch(console.error);
