/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves metric definitions for the given database account.
 *
 * @summary Retrieves metric definitions for the given database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBDatabaseAccountGetMetricDefinitions.json
 */
async function cosmosDbDatabaseAccountGetMetricDefinitions() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.databaseAccounts.listMetricDefinitions(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbDatabaseAccountGetMetricDefinitions().catch(console.error);
