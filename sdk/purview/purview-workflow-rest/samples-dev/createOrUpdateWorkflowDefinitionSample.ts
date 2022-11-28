// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPurviewWorkflowClient, {
  CreateOrUpdateWorkflowDefinitionParameters
} from "@azure-rest/purview-workflow";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a workflow definition.
 *
 * @summary Create or update a workflow definition.
 * x-ms-original-file: specification/purview/data-plane/Azure.Analytics.Purview.Workflow/preview/2022-05-01-preview/examples/WorkflowDefinition_CreateOrUpdate.json
 */
const endpoint = process.env["ENDPOINT"] || "";

async function workflowDefinitionCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const client = createPurviewWorkflowClient(endpoint, credential);
  const workflowDefinitionId = "4afb5752-e47f-43a1-8ba7-c696bf8d2745";
  const options: CreateOrUpdateWorkflowDefinitionParameters = {
    body: {
      description: "",
      boundScopes: [
        {
          type: "PathReference",
          referenceName:
            "/catalog/api/atlas/v2/glossary/04dc91ea-c4d4-4d31-a212-e3ff5cae4feb",
          referenceSource: "Catalog"
        }
      ],
      definition: {
        actions: {
          Condition: {
            type: "If",
            actions: {
              "Create glossary term": { type: "CreateTerm", runAfter: {} },
              "Send email notification": {
                type: "EmailNotification",
                inputs: {
                  parameters: {
                    emailMessage:
                      "Your request for Glossary Term @{triggerBody()['request']['term']['name']} is approved.",
                    emailRecipients: [
                      "@{triggerBody()['request']['requestor']}"
                    ],
                    emailSubject: "Glossary Term Create - APPROVED"
                  }
                },
                runAfter: { "Create glossary term": ["Succeeded"] }
              }
            },
            else: {
              actions: {
                "Send reject email notification": {
                  type: "EmailNotification",
                  inputs: {
                    parameters: {
                      emailMessage:
                        "Your request for Glossary Term @{triggerBody()['request']['term']['name']} is rejected.",
                      emailRecipients: [
                        "@{triggerBody()['request']['requestor']}"
                      ],
                      emailSubject: "Glossary Term Create - REJECTED"
                    }
                  },
                  runAfter: {}
                }
              }
            },
            expression: {
              and: [
                {
                  equals: [
                    "@outputs('Start and wait for an approval')['body/outcome']",
                    "Approved"
                  ]
                }
              ]
            },
            runAfter: { "Start and wait for an approval": ["Succeeded"] }
          },
          "Start and wait for an approval": {
            type: "Approval",
            inputs: {
              parameters: {
                approvalType: "PendingOnAll",
                assignedTo: ["4fda19f7-1a35-4bae-ab0b-7f4f080930b0"],
                title: "Approval Request for Create Glossary Term"
              }
            },
            runAfter: {}
          }
        },
        triggers: {
          "When term creation request is submitted": {
            type: "GlossaryTermTrigger"
          }
        }
      },
      isEnabled: true,
      scenarioType: "CreateTerm",
      workflowName: "Create glossary term"
    }
  };
  const result = await client
    .path("/definitions/{workflowDefinitionId}", workflowDefinitionId)
    .put(options);
  console.log(result);
}

workflowDefinitionCreateOrUpdate().catch(console.error);
