// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  ApproveApprovalRequestParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Approve an approval request.
 *
 * @summary Approve an approval request.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/ApprovalRequest_Approve.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function approvalRequestApprove() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const approvalRequestId = "98d98e2c-23fa-4157-a3f8-ff8ce5cc095c";
  const options: ApproveApprovalRequestParameters = {
    body: { comment: "Thanks for raising this!" }
  };
  const result = await client
    .path("/requests/approvals/{approvalRequestId}/approve", approvalRequestId)
    .post(options);
  console.log(result);
}

approvalRequestApprove().catch(console.error);
