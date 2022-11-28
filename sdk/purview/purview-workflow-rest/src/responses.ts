// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  WorkflowRequestListOutput,
  ErrorResponseOutput,
  ApprovalRequestOutput,
  TaskRequestOutput,
  WorkflowRunListOutput,
  WorkflowRunOutput,
  WorkflowDefinitionMetadataListOutput,
  WorkflowDefinitionOutput
} from "./outputModels";

/** Get all workflow requests, include user's sent/received/history requests */
export interface ListWorkflowRequest200Response extends HttpResponse {
  status: "200";
  body: WorkflowRequestListOutput;
}

/** Get all workflow requests, include user's sent/received/history requests */
export interface ListWorkflowRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get an approval request by approvalRequestId */
export interface GetApprovalRequest200Response extends HttpResponse {
  status: "200";
  body: ApprovalRequestOutput;
}

/** Get an approval request by approvalRequestId */
export interface GetApprovalRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Approve an approval request. */
export interface ApproveApprovalRequest200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Approve an approval request. */
export interface ApproveApprovalRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Reject an approval request. */
export interface RejectApprovalRequest200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Reject an approval request. */
export interface RejectApprovalRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Reassign an approval request. */
export interface ReassignApprovalRequest200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Reassign an approval request. */
export interface ReassignApprovalRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a workflow task request. */
export interface GetTaskRequest200Response extends HttpResponse {
  status: "200";
  body: TaskRequestOutput;
}

/** Get a workflow task request. */
export interface GetTaskRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Update the status of a workflow task request. */
export interface UpdateTaskRequest200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Update the status of a workflow task request. */
export interface UpdateTaskRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Reassign a task request. */
export interface ReassignTaskRequest200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Reassign a task request. */
export interface ReassignTaskRequestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** List workflow runs. */
export interface ListWorkflowRun200Response extends HttpResponse {
  status: "200";
  body: WorkflowRunListOutput;
}

/** List workflow runs. */
export interface ListWorkflowRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a workflow run. */
export interface GetWorkflowRun200Response extends HttpResponse {
  status: "200";
  body: WorkflowRunOutput;
}

/** Get a workflow run. */
export interface GetWorkflowRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Trigger a workflow run for requestor */
export interface TriggerWorkflowRun200Response extends HttpResponse {
  status: "200";
  body: WorkflowRunOutput;
}

/** Trigger a workflow run for requestor */
export interface TriggerWorkflowRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Cancel a workflow run. */
export interface CancelWorkflowRun200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Cancel a workflow run. */
export interface CancelWorkflowRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** List all workflow definitions. */
export interface ListWorkflowDefinition200Response extends HttpResponse {
  status: "200";
  body: WorkflowDefinitionMetadataListOutput;
}

/** List all workflow definitions. */
export interface ListWorkflowDefinitionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Get a specific workflow definition. */
export interface GetWorkflowDefinition200Response extends HttpResponse {
  status: "200";
  body: WorkflowDefinitionOutput;
}

/** Get a specific workflow definition. */
export interface GetWorkflowDefinitionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Create or update a workflow definition. */
export interface CreateOrUpdateWorkflowDefinition200Response
  extends HttpResponse {
  status: "200";
  body: WorkflowDefinitionOutput;
}

/** Create or update a workflow definition. */
export interface CreateOrUpdateWorkflowDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Delete a workflow definition. */
export interface DeleteWorkflowDefinition204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Delete a workflow definition. */
export interface DeleteWorkflowDefinitionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** List workflow runs of a workflow definition */
export interface ListWorkflowDefinitionRun200Response extends HttpResponse {
  status: "200";
  body: WorkflowRunListOutput;
}

/** List workflow runs of a workflow definition */
export interface ListWorkflowDefinitionRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
