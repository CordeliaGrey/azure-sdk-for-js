// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PurviewWorkflowClient } from "../../src";
import { Recorder } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { createClient } from "./utils/recordedClient";
import { Context } from "mocha";

describe("Get workflow definition", () => {
  let recorder: Recorder;
  let client: PurviewWorkflowClient;
  let workflowDefinitionId: string;

  beforeEach(async function(this: Context) {
    recorder = new Recorder(this.currentTest);
    client = await createClient(recorder);
    workflowDefinitionId = "ba25ed0e-3364-4e8e-8385-c60e12f3e342";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("should get a specific workflow definition", async function() {
    const result = await client.path("/definitions/{workflowDefinitionId}", workflowDefinitionId).get();
    if (result.status !== "200") {
      assert.fail(`GET "/definitions/{workflowDefinitionId}" failed with ${result.status}`);
    }
    // console.log("Get the workflow name: ", result.body);
  });
});
