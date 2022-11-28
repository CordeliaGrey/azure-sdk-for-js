// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListWorkflowRequest200Response,
  ListWorkflowRequestDefaultResponse,
  GetApprovalRequest200Response,
  GetApprovalRequestDefaultResponse,
  ApproveApprovalRequest200Response,
  ApproveApprovalRequestDefaultResponse,
  RejectApprovalRequest200Response,
  RejectApprovalRequestDefaultResponse,
  ReassignApprovalRequest200Response,
  ReassignApprovalRequestDefaultResponse,
  GetTaskRequest200Response,
  GetTaskRequestDefaultResponse,
  UpdateTaskRequest200Response,
  UpdateTaskRequestDefaultResponse,
  ReassignTaskRequest200Response,
  ReassignTaskRequestDefaultResponse,
  ListWorkflowRun200Response,
  ListWorkflowRunDefaultResponse,
  GetWorkflowRun200Response,
  GetWorkflowRunDefaultResponse,
  TriggerWorkflowRun200Response,
  TriggerWorkflowRunDefaultResponse,
  CancelWorkflowRun200Response,
  CancelWorkflowRunDefaultResponse,
  ListWorkflowDefinition200Response,
  ListWorkflowDefinitionDefaultResponse,
  GetWorkflowDefinition200Response,
  GetWorkflowDefinitionDefaultResponse,
  CreateOrUpdateWorkflowDefinition200Response,
  CreateOrUpdateWorkflowDefinitionDefaultResponse,
  DeleteWorkflowDefinition204Response,
  DeleteWorkflowDefinitionDefaultResponse,
  ListWorkflowDefinitionRun200Response,
  ListWorkflowDefinitionRunDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /requests": ["200"],
  "GET /requests/approvals/{approvalRequestId}": ["200"],
  "POST /requests/approvals/{approvalRequestId}/approve": ["200"],
  "POST /requests/approvals/{approvalRequestId}/reject": ["200"],
  "POST /requests/approvals/{approvalRequestId}/reassign": ["200"],
  "GET /requests/tasks/{taskRequestId}": ["200"],
  "POST /requests/tasks/{taskRequestId}/change-status": ["200"],
  "POST /requests/tasks/{taskRequestId}/reassign": ["200"],
  "GET /runs": ["200"],
  "GET /runs/{workflowRunId}": ["200"],
  "POST /runs/{workflowRunId}/trigger": ["200"],
  "POST /runs/{workflowRunId}/cancel": ["200"],
  "GET /definitions": ["200"],
  "GET /definitions/{workflowDefinitionId}": ["200"],
  "PUT /definitions/{workflowDefinitionId}": ["200"],
  "DELETE /definitions/{workflowDefinitionId}": ["204"],
  "GET /definitions/{workflowDefinitionId}/runs": ["200"]
};

export function isUnexpected(
  response: ListWorkflowRequest200Response | ListWorkflowRequestDefaultResponse
): response is ListWorkflowRequestDefaultResponse;
export function isUnexpected(
  response: GetApprovalRequest200Response | GetApprovalRequestDefaultResponse
): response is GetApprovalRequestDefaultResponse;
export function isUnexpected(
  response:
    | ApproveApprovalRequest200Response
    | ApproveApprovalRequestDefaultResponse
): response is ApproveApprovalRequestDefaultResponse;
export function isUnexpected(
  response:
    | RejectApprovalRequest200Response
    | RejectApprovalRequestDefaultResponse
): response is RejectApprovalRequestDefaultResponse;
export function isUnexpected(
  response:
    | ReassignApprovalRequest200Response
    | ReassignApprovalRequestDefaultResponse
): response is ReassignApprovalRequestDefaultResponse;
export function isUnexpected(
  response: GetTaskRequest200Response | GetTaskRequestDefaultResponse
): response is GetTaskRequestDefaultResponse;
export function isUnexpected(
  response: UpdateTaskRequest200Response | UpdateTaskRequestDefaultResponse
): response is UpdateTaskRequestDefaultResponse;
export function isUnexpected(
  response: ReassignTaskRequest200Response | ReassignTaskRequestDefaultResponse
): response is ReassignTaskRequestDefaultResponse;
export function isUnexpected(
  response: ListWorkflowRun200Response | ListWorkflowRunDefaultResponse
): response is ListWorkflowRunDefaultResponse;
export function isUnexpected(
  response: GetWorkflowRun200Response | GetWorkflowRunDefaultResponse
): response is GetWorkflowRunDefaultResponse;
export function isUnexpected(
  response: TriggerWorkflowRun200Response | TriggerWorkflowRunDefaultResponse
): response is TriggerWorkflowRunDefaultResponse;
export function isUnexpected(
  response: CancelWorkflowRun200Response | CancelWorkflowRunDefaultResponse
): response is CancelWorkflowRunDefaultResponse;
export function isUnexpected(
  response:
    | ListWorkflowDefinition200Response
    | ListWorkflowDefinitionDefaultResponse
): response is ListWorkflowDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | GetWorkflowDefinition200Response
    | GetWorkflowDefinitionDefaultResponse
): response is GetWorkflowDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | CreateOrUpdateWorkflowDefinition200Response
    | CreateOrUpdateWorkflowDefinitionDefaultResponse
): response is CreateOrUpdateWorkflowDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | DeleteWorkflowDefinition204Response
    | DeleteWorkflowDefinitionDefaultResponse
): response is DeleteWorkflowDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | ListWorkflowDefinitionRun200Response
    | ListWorkflowDefinitionRunDefaultResponse
): response is ListWorkflowDefinitionRunDefaultResponse;
export function isUnexpected(
  response:
    | ListWorkflowRequest200Response
    | ListWorkflowRequestDefaultResponse
    | GetApprovalRequest200Response
    | GetApprovalRequestDefaultResponse
    | ApproveApprovalRequest200Response
    | ApproveApprovalRequestDefaultResponse
    | RejectApprovalRequest200Response
    | RejectApprovalRequestDefaultResponse
    | ReassignApprovalRequest200Response
    | ReassignApprovalRequestDefaultResponse
    | GetTaskRequest200Response
    | GetTaskRequestDefaultResponse
    | UpdateTaskRequest200Response
    | UpdateTaskRequestDefaultResponse
    | ReassignTaskRequest200Response
    | ReassignTaskRequestDefaultResponse
    | ListWorkflowRun200Response
    | ListWorkflowRunDefaultResponse
    | GetWorkflowRun200Response
    | GetWorkflowRunDefaultResponse
    | TriggerWorkflowRun200Response
    | TriggerWorkflowRunDefaultResponse
    | CancelWorkflowRun200Response
    | CancelWorkflowRunDefaultResponse
    | ListWorkflowDefinition200Response
    | ListWorkflowDefinitionDefaultResponse
    | GetWorkflowDefinition200Response
    | GetWorkflowDefinitionDefaultResponse
    | CreateOrUpdateWorkflowDefinition200Response
    | CreateOrUpdateWorkflowDefinitionDefaultResponse
    | DeleteWorkflowDefinition204Response
    | DeleteWorkflowDefinitionDefaultResponse
    | ListWorkflowDefinitionRun200Response
    | ListWorkflowDefinitionRunDefaultResponse
): response is
  | ListWorkflowRequestDefaultResponse
  | GetApprovalRequestDefaultResponse
  | ApproveApprovalRequestDefaultResponse
  | RejectApprovalRequestDefaultResponse
  | ReassignApprovalRequestDefaultResponse
  | GetTaskRequestDefaultResponse
  | UpdateTaskRequestDefaultResponse
  | ReassignTaskRequestDefaultResponse
  | ListWorkflowRunDefaultResponse
  | GetWorkflowRunDefaultResponse
  | TriggerWorkflowRunDefaultResponse
  | CancelWorkflowRunDefaultResponse
  | ListWorkflowDefinitionDefaultResponse
  | GetWorkflowDefinitionDefaultResponse
  | CreateOrUpdateWorkflowDefinitionDefaultResponse
  | DeleteWorkflowDefinitionDefaultResponse
  | ListWorkflowDefinitionRunDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
