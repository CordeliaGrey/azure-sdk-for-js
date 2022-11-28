// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  RejectApprovalRequestParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reject an approval request.
 *
 * @summary Reject an approval request.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/ApprovalRequest_Reject.json
 */

const endpoint = process.env["ENDPOINT"] || "";

async function approvalRequestReject() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const approvalRequestId = "98d98e2c-23fa-4157-a3f8-ff8ce5cc095c";
  const options: RejectApprovalRequestParameters = {
    body: { comment: "Thanks for raising this!" }
  };
  const result = await client
    .path("/requests/approvals/{approvalRequestId}/reject", approvalRequestId)
    .post(options);
  console.log(result);
}

approvalRequestReject().catch(console.error);
