// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ApprovalResponseComment,
  ApprovalReassignCommand,
  TaskUpdateCommand,
  TaskReassignCommand,
  RequestPayload,
  WorkflowRunCancelReply,
  WorkflowDefinitionCreateOrUpdateCommand
} from "./models";

export interface ListWorkflowRequestQueryParamProperties {
  /** Filter items by workflow definition id list. */
  workflowDefinitionId?: Array<string>;
  /** Time window of filtering items. */
  window?: "1d" | "7d" | "30d" | "90d";
  /** The continuation token used for getting the next page of items. */
  continuationToken?: string;
  /** The page size to get the items at one time. */
  limit?: number;
  /** The key used for sorting the items. */
  sortKey?: "submittedTime" | "requestor";
  /** List items in an ascending order or a descending order by submitted time. */
  isDescending?: boolean;
  /** Filter items by workflow request type. */
  type?: Array<"approval" | "task" | "PathReference" | "CollectionReference">;
  /** Filter items by keyword in workflow name. */
  keyword?: string;
}

export interface ListWorkflowRequestQueryParam {
  queryParameters?: ListWorkflowRequestQueryParamProperties;
}

export type ListWorkflowRequestParameters = ListWorkflowRequestQueryParam &
  RequestParameters;
export type GetApprovalRequestParameters = RequestParameters;

export interface ApproveApprovalRequestBodyParam {
  /** The request body of reassigning an approval request. */
  body: ApprovalResponseComment;
}

export interface ApproveApprovalRequestMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ApproveApprovalRequestParameters = ApproveApprovalRequestMediaTypesParam &
  ApproveApprovalRequestBodyParam &
  RequestParameters;

export interface RejectApprovalRequestBodyParam {
  /** The request body of reassigning an approval request. */
  body: ApprovalResponseComment;
}

export interface RejectApprovalRequestMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type RejectApprovalRequestParameters = RejectApprovalRequestMediaTypesParam &
  RejectApprovalRequestBodyParam &
  RequestParameters;

export interface ReassignApprovalRequestBodyParam {
  /** The request body of reassigning an approval request. */
  body: ApprovalReassignCommand;
}

export interface ReassignApprovalRequestMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ReassignApprovalRequestParameters = ReassignApprovalRequestMediaTypesParam &
  ReassignApprovalRequestBodyParam &
  RequestParameters;
export type GetTaskRequestParameters = RequestParameters;

export interface UpdateTaskRequestBodyParam {
  /** Request body of updating workflow task request. */
  body: TaskUpdateCommand;
}

export interface UpdateTaskRequestMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type UpdateTaskRequestParameters = UpdateTaskRequestMediaTypesParam &
  UpdateTaskRequestBodyParam &
  RequestParameters;

export interface ReassignTaskRequestBodyParam {
  /** The request body of reassigning a task request. */
  body: TaskReassignCommand;
}

export interface ReassignTaskRequestMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ReassignTaskRequestParameters = ReassignTaskRequestMediaTypesParam &
  ReassignTaskRequestBodyParam &
  RequestParameters;

export interface ListWorkflowRunQueryParamProperties {
  /** Time window of filtering items. */
  window?: "1d" | "7d" | "30d" | "90d";
  /** The continuation token used for getting the next page of items. */
  continuationToken?: string;
  /** The page size to get the items at one time. */
  limit?: number;
  /** The key used for sorting the items. */
  sortKey?: "submittedTime" | "requestor";
  /** List items in an ascending order or a descending order by submitted time. */
  isDescending?: boolean;
  /** Filter workflow runs by workflow run status. */
  status?: Array<
    | "Not Started"
    | "In Progress"
    | "Completed"
    | "Canceled"
    | "InProgress"
    | "Failed"
    | "NotStarted"
    | "Canceling"
    | "CancellationFailed"
  >;
  /** Filter items by workflow definition id list. */
  workflowDefinitionId?: Array<string>;
}

export interface ListWorkflowRunQueryParam {
  queryParameters?: ListWorkflowRunQueryParamProperties;
}

export type ListWorkflowRunParameters = ListWorkflowRunQueryParam &
  RequestParameters;

export interface GetWorkflowRunQueryParamProperties {
  /** Return workflow run details with corresponding workflow definition when it is true. */
  withDetails?: boolean;
}

export interface GetWorkflowRunQueryParam {
  queryParameters?: GetWorkflowRunQueryParamProperties;
}

export type GetWorkflowRunParameters = GetWorkflowRunQueryParam &
  RequestParameters;

export interface TriggerWorkflowRunBodyParam {
  /** The request event payload to trigger workflow run. */
  body: RequestPayload;
}

export interface TriggerWorkflowRunMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type TriggerWorkflowRunParameters = TriggerWorkflowRunMediaTypesParam &
  TriggerWorkflowRunBodyParam &
  RequestParameters;

export interface CancelWorkflowRunBodyParam {
  /** Reply of canceling a workflow run. */
  body: WorkflowRunCancelReply;
}

export interface CancelWorkflowRunMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type CancelWorkflowRunParameters = CancelWorkflowRunMediaTypesParam &
  CancelWorkflowRunBodyParam &
  RequestParameters;

export interface ListWorkflowDefinitionQueryParamProperties {
  /** The workflow type for filtering purpose. */
  scenarioType?:
    | "CreateTerm"
    | "UpdateTerm"
    | "DeleteTerm"
    | "ImportTerms"
    | "GrantDataAccess"
    | "UpdateAssetAttributes";
}

export interface ListWorkflowDefinitionQueryParam {
  queryParameters?: ListWorkflowDefinitionQueryParamProperties;
}

export type ListWorkflowDefinitionParameters = ListWorkflowDefinitionQueryParam &
  RequestParameters;
export type GetWorkflowDefinitionParameters = RequestParameters;

export interface CreateOrUpdateWorkflowDefinitionBodyParam {
  /** The workflow definition. */
  body: WorkflowDefinitionCreateOrUpdateCommand;
}

export interface CreateOrUpdateWorkflowDefinitionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type CreateOrUpdateWorkflowDefinitionParameters = CreateOrUpdateWorkflowDefinitionMediaTypesParam &
  CreateOrUpdateWorkflowDefinitionBodyParam &
  RequestParameters;
export type DeleteWorkflowDefinitionParameters = RequestParameters;

export interface ListWorkflowDefinitionRunQueryParamProperties {
  /** Time window of filtering items. */
  window?: "1d" | "7d" | "30d" | "90d";
  /** The continuation token used for getting the next page of items. */
  continuationToken?: string;
  /** The page size to get the items at one time. */
  limit?: number;
  /** The key used for sorting the items. */
  sortKey?: "submittedTime" | "requestor";
  /** List items in an ascending order or a descending order by submitted time. */
  isDescending?: boolean;
  /** Filter workflow runs by workflow run status. */
  status?: Array<
    | "Not Started"
    | "In Progress"
    | "Completed"
    | "Canceled"
    | "InProgress"
    | "Failed"
    | "NotStarted"
    | "Canceling"
    | "CancellationFailed"
  >;
}

export interface ListWorkflowDefinitionRunQueryParam {
  queryParameters?: ListWorkflowDefinitionRunQueryParamProperties;
}

export type ListWorkflowDefinitionRunParameters = ListWorkflowDefinitionRunQueryParam &
  RequestParameters;
