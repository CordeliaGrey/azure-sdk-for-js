// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary router worker crud
 */
const JobRouter = require("../src").default;
require("dotenv").config();
const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// Update a router worker
async function updateRouterWorker() {
  // Create the Router Client
  const routerClient = JobRouter(connectionString);

  const id = "router-worker-123";

  const result = await routerClient.path("/routing/workers/{workerId}", id).patch({
    contentType: "application/merge-patch+json",
    body: {
      capacity: 100,
      queues: ["MainQueue", "SecondaryQueue"],
      labels: {},
      channels: [
        {
          channelId: "CustomChatChannel",
          capacityCostPerJob: 10,
        },
        {
          channelId: "CustomVoiceChannel",
          capacityCostPerJob: 100,
        },
      ],
    },
  });
  console.log("router worker: " + result);
}

updateRouterWorker().catch(console.error);
