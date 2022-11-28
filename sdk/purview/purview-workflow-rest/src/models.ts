// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** RequestPayload */
export interface RequestPayloadParent {
  /** The target value which need involve workflow to operate. */
  targetValue?: string;
  requestType:
    | "RequestPayload"
    | "CreateTermRequest"
    | "DeleteTermRequest"
    | "GrantDataAccessRequest"
    | "ImportTermsRequest"
    | "UpdateTermRequest"
    | "UpdateAssetAttributesRequest";
}

/** ApprovalResponseComment */
export interface ApprovalResponseComment {
  /** The comment of approving or rejecting an approval request. */
  comment?: string;
}

/** ApprovalReassignCommand */
export interface ApprovalReassignCommand {
  /** The request body of reassigning an approval request. */
  reassignments?: Array<ApprovalReassignment>;
}

/** ApprovalReassignment */
export interface ApprovalReassignment {
  /** Reassign approval request from AAD user or AAD group. */
  reassignFrom: string;
  /** Reassign approval request to AAD user or AAD group. */
  reassignTo: string;
}

/** TaskUpdateCommand */
export interface TaskUpdateCommand {
  /** The new status will be used to update the task. */
  newStatus: string;
  /** The comment when update a task. */
  comment?: string;
}

/** TaskReassignCommand */
export interface TaskReassignCommand {
  /** The request body of reassigning a task request. */
  reassignments?: Array<TaskReassignment>;
}

/** TaskReassignment */
export interface TaskReassignment {
  /** Reassign task request from AAD user or AAD group. */
  reassignFrom: string;
  /** Reassign task request to AAD user or AAD group. */
  reassignTo: string;
}

/** WorkflowRunCancelReply */
export interface WorkflowRunCancelReply {
  /** The comment of canceling a workflow run. */
  comment?: string;
}

/** GatewayReferenceObject */
export interface GatewayReferenceObjectParent {
  type: "GatewayReferenceObject" | "CollectionReference" | "PathReference";
}

/** The workflow definition create or update payload. */
export interface WorkflowDefinitionCreateOrUpdateCommand {
  /** The workflow scenario type. */
  scenarioType:
    | "CreateTerm"
    | "UpdateTerm"
    | "DeleteTerm"
    | "ImportTerms"
    | "GrantDataAccess"
    | "UpdateAssetAttributes";
  /** The associated entities object list. */
  boundScopes: Array<GatewayReferenceObject>;
  /** The workflow name of workflow definition. */
  workflowName: string;
  /** Whether the workflow definition enabled or not. */
  isEnabled: boolean;
  /** The workflow definition detail. */
  definition?: Record<string, unknown>;
  /** Description of a workflow definition. */
  description: string;
}

export interface CreateTermRequestWebRequest extends RequestPayloadParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "CreateTermRequest";
}

export interface DeleteTermRequestWebRequest extends RequestPayloadParent {
  glossaryTermId?: string;
  forceDeleteChildren?: boolean;
  requestType: "DeleteTermRequest";
}

export interface GrantDataAccessWebRequest extends RequestPayloadParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "GrantDataAccessRequest";
}

export interface ImportTermsRequestWebRequest extends RequestPayloadParent {
  fileName: string;
  /** Base64 encoded file content used to import terms in batch. */
  fileContent: string;
  requestType: "ImportTermsRequest";
}

export interface UpdateTermRequestWebRequest extends RequestPayloadParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "UpdateTermRequest";
}

export interface UpdateAssetAttributesWebRequest extends RequestPayloadParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "UpdateAssetAttributesRequest";
}

export interface CollectionReference extends GatewayReferenceObjectParent {
  referenceName: string;
  type: "CollectionReference";
}

export interface PathReference extends GatewayReferenceObjectParent {
  referenceName: string;
  referenceSource: string;
  type: "PathReference";
}

/** RequestPayload */
export type RequestPayload =
  | CreateTermRequestWebRequest
  | DeleteTermRequestWebRequest
  | GrantDataAccessWebRequest
  | ImportTermsRequestWebRequest
  | UpdateTermRequestWebRequest
  | UpdateAssetAttributesWebRequest;
/** GatewayReferenceObject */
export type GatewayReferenceObject = CollectionReference | PathReference;
