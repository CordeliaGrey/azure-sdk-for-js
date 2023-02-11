// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const createPurviewWorkflowClient = require("@azure-rest/purview-workflow").default;
const { UsernamePasswordCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Reject an approval task.
 *
 * @summary Reject an approval task.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/RejectApprovalTask.json
 */
const endpoint = process.env["ENDPOINT"] || "";
const tenantId = process.env["TENANTID"] || "";
const clientId = process.env["CLIENTID"] || "";
const username = process.env["USERNAME"] || "";
const password = process.env["PASSWORD"] || "";

async function approvalRequestReject() {
  const credential = new UsernamePasswordCredential(tenantId, clientId, username, password);
  const client = createPurviewWorkflowClient(endpoint, credential);
  const taskId = "98d98e2c-23fa-4157-a3f8-ff8ce5cc095c";
  const options = {
    body: { comment: "Thanks for raising this!" },
  };
  const result = await client.path("/workflowtasks/{taskId}/reject-approval", taskId).post(options);
  console.log(result);
}

approvalRequestReject().catch(console.error);
