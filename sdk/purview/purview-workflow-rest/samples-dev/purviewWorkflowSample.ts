// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, {
  PurviewWorkflowClient
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This is a simple sample on how to create client and please add your own code below
 *
 */
const endpoint = process.env["ENDPOINT"] || "";

async function main() {
  const credential = new DefaultAzureCredential();
  const client: PurviewWorkflowClient = createClient(endpoint, credential);
  const result = !!client ? "Success" : "Fail";
  console.log(result, " to create client.");
  // Add your own code here
}

main().catch(console.error);
