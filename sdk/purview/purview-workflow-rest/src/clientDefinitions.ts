// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListWorkflowRequestParameters,
  GetApprovalRequestParameters,
  ApproveApprovalRequestParameters,
  RejectApprovalRequestParameters,
  ReassignApprovalRequestParameters,
  GetTaskRequestParameters,
  UpdateTaskRequestParameters,
  ReassignTaskRequestParameters,
  ListWorkflowRunParameters,
  GetWorkflowRunParameters,
  TriggerWorkflowRunParameters,
  CancelWorkflowRunParameters,
  ListWorkflowDefinitionParameters,
  GetWorkflowDefinitionParameters,
  CreateOrUpdateWorkflowDefinitionParameters,
  DeleteWorkflowDefinitionParameters,
  ListWorkflowDefinitionRunParameters
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListWorkflowRequest {
  /** Get all workflow requests, include user's sent/received/history requests */
  get(
    options?: ListWorkflowRequestParameters
  ): StreamableMethod<
    ListWorkflowRequest200Response | ListWorkflowRequestDefaultResponse
  >;
}

export interface GetApprovalRequest {
  /** Get an approval request by approvalRequestId */
  get(
    options?: GetApprovalRequestParameters
  ): StreamableMethod<
    GetApprovalRequest200Response | GetApprovalRequestDefaultResponse
  >;
}

export interface ApproveApprovalRequest {
  /** Approve an approval request. */
  post(
    options: ApproveApprovalRequestParameters
  ): StreamableMethod<
    ApproveApprovalRequest200Response | ApproveApprovalRequestDefaultResponse
  >;
}

export interface RejectApprovalRequest {
  /** Reject an approval request. */
  post(
    options: RejectApprovalRequestParameters
  ): StreamableMethod<
    RejectApprovalRequest200Response | RejectApprovalRequestDefaultResponse
  >;
}

export interface ReassignApprovalRequest {
  /** Reassign an approval request. */
  post(
    options: ReassignApprovalRequestParameters
  ): StreamableMethod<
    ReassignApprovalRequest200Response | ReassignApprovalRequestDefaultResponse
  >;
}

export interface GetTaskRequest {
  /** Get a workflow task request. */
  get(
    options?: GetTaskRequestParameters
  ): StreamableMethod<
    GetTaskRequest200Response | GetTaskRequestDefaultResponse
  >;
}

export interface UpdateTaskRequest {
  /** Update the status of a workflow task request. */
  post(
    options: UpdateTaskRequestParameters
  ): StreamableMethod<
    UpdateTaskRequest200Response | UpdateTaskRequestDefaultResponse
  >;
}

export interface ReassignTaskRequest {
  /** Reassign a task request. */
  post(
    options: ReassignTaskRequestParameters
  ): StreamableMethod<
    ReassignTaskRequest200Response | ReassignTaskRequestDefaultResponse
  >;
}

export interface ListWorkflowRun {
  /** List workflow runs. */
  get(
    options?: ListWorkflowRunParameters
  ): StreamableMethod<
    ListWorkflowRun200Response | ListWorkflowRunDefaultResponse
  >;
}

export interface GetWorkflowRun {
  /** Get a workflow run. */
  get(
    options?: GetWorkflowRunParameters
  ): StreamableMethod<
    GetWorkflowRun200Response | GetWorkflowRunDefaultResponse
  >;
}

export interface TriggerWorkflowRun {
  /** Trigger a workflow run for requestor */
  post(
    options: TriggerWorkflowRunParameters
  ): StreamableMethod<
    TriggerWorkflowRun200Response | TriggerWorkflowRunDefaultResponse
  >;
}

export interface CancelWorkflowRun {
  /** Cancel a workflow run. */
  post(
    options: CancelWorkflowRunParameters
  ): StreamableMethod<
    CancelWorkflowRun200Response | CancelWorkflowRunDefaultResponse
  >;
}

export interface ListWorkflowDefinition {
  /** List all workflow definitions. */
  get(
    options?: ListWorkflowDefinitionParameters
  ): StreamableMethod<
    ListWorkflowDefinition200Response | ListWorkflowDefinitionDefaultResponse
  >;
}

export interface GetWorkflowDefinition {
  /** Get a specific workflow definition. */
  get(
    options?: GetWorkflowDefinitionParameters
  ): StreamableMethod<
    GetWorkflowDefinition200Response | GetWorkflowDefinitionDefaultResponse
  >;
  /** Create or update a workflow definition. */
  put(
    options: CreateOrUpdateWorkflowDefinitionParameters
  ): StreamableMethod<
    | CreateOrUpdateWorkflowDefinition200Response
    | CreateOrUpdateWorkflowDefinitionDefaultResponse
  >;
  /** Delete a workflow definition. */
  delete(
    options?: DeleteWorkflowDefinitionParameters
  ): StreamableMethod<
    | DeleteWorkflowDefinition204Response
    | DeleteWorkflowDefinitionDefaultResponse
  >;
}

export interface ListWorkflowDefinitionRun {
  /** List workflow runs of a workflow definition */
  get(
    options?: ListWorkflowDefinitionRunParameters
  ): StreamableMethod<
    | ListWorkflowDefinitionRun200Response
    | ListWorkflowDefinitionRunDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/requests' has methods for the following verbs: get */
  (path: "/requests"): ListWorkflowRequest;
  /** Resource for '/requests/approvals/\{approvalRequestId\}' has methods for the following verbs: get */
  (
    path: "/requests/approvals/{approvalRequestId}",
    approvalRequestId: string
  ): GetApprovalRequest;
  /** Resource for '/requests/approvals/\{approvalRequestId\}/approve' has methods for the following verbs: post */
  (
    path: "/requests/approvals/{approvalRequestId}/approve",
    approvalRequestId: string
  ): ApproveApprovalRequest;
  /** Resource for '/requests/approvals/\{approvalRequestId\}/reject' has methods for the following verbs: post */
  (
    path: "/requests/approvals/{approvalRequestId}/reject",
    approvalRequestId: string
  ): RejectApprovalRequest;
  /** Resource for '/requests/approvals/\{approvalRequestId\}/reassign' has methods for the following verbs: post */
  (
    path: "/requests/approvals/{approvalRequestId}/reassign",
    approvalRequestId: string
  ): ReassignApprovalRequest;
  /** Resource for '/requests/tasks/\{taskRequestId\}' has methods for the following verbs: get */
  (
    path: "/requests/tasks/{taskRequestId}",
    taskRequestId: string
  ): GetTaskRequest;
  /** Resource for '/requests/tasks/\{taskRequestId\}/change-status' has methods for the following verbs: post */
  (
    path: "/requests/tasks/{taskRequestId}/change-status",
    taskRequestId: string
  ): UpdateTaskRequest;
  /** Resource for '/requests/tasks/\{taskRequestId\}/reassign' has methods for the following verbs: post */
  (
    path: "/requests/tasks/{taskRequestId}/reassign",
    taskRequestId: string
  ): ReassignTaskRequest;
  /** Resource for '/runs' has methods for the following verbs: get */
  (path: "/runs"): ListWorkflowRun;
  /** Resource for '/runs/\{workflowRunId\}' has methods for the following verbs: get */
  (path: "/runs/{workflowRunId}", workflowRunId: string): GetWorkflowRun;
  /** Resource for '/runs/\{workflowRunId\}/trigger' has methods for the following verbs: post */
  (
    path: "/runs/{workflowRunId}/trigger",
    workflowRunId: string
  ): TriggerWorkflowRun;
  /** Resource for '/runs/\{workflowRunId\}/cancel' has methods for the following verbs: post */
  (
    path: "/runs/{workflowRunId}/cancel",
    workflowRunId: string
  ): CancelWorkflowRun;
  /** Resource for '/definitions' has methods for the following verbs: get */
  (path: "/definitions"): ListWorkflowDefinition;
  /** Resource for '/definitions/\{workflowDefinitionId\}' has methods for the following verbs: get, put, delete */
  (
    path: "/definitions/{workflowDefinitionId}",
    workflowDefinitionId: string
  ): GetWorkflowDefinition;
  /** Resource for '/definitions/\{workflowDefinitionId\}/runs' has methods for the following verbs: get */
  (
    path: "/definitions/{workflowDefinitionId}/runs",
    workflowDefinitionId: string
  ): ListWorkflowDefinitionRun;
}

export type PurviewWorkflowClient = Client & {
  path: Routes;
};
