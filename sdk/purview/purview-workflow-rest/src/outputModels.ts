// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** WorkflowRequestList */
export interface WorkflowRequestListOutput {
  /** The value of workflow request list. */
  value: Array<Record<string, unknown>>;
  /** The URL to get the next set of results. */
  nextLink?: string;
}

/** Default error response model */
export interface ErrorResponseOutput {
  /** Default error model */
  error?: ErrorModelOutput;
}

/** Default error model */
export interface ErrorModelOutput {
  /** Gets or sets the code. */
  code: string;
  /** Gets or sets the details. */
  details?: Array<ErrorModelOutput>;
  /** Gets or sets the messages. */
  message: string;
  /** Gets or sets the target. */
  target?: string;
}

/** The workflow approval request properties. */
export interface ApprovalRequestOutput extends WorkflowRequestOutputParent {
  /** The approval request id(GUID). */
  approvalId: string;
  /** ApprovalDetails */
  approval: ApprovalDetailsOutput;
  type: "approval";
}

/** ApprovalDetails */
export interface ApprovalDetailsOutput {
  /** The approval type of an approval request. */
  approvalType: string;
  /** The status of an approval request. */
  status: string;
  /** The list of approvers. */
  approvers: Record<string, Record<string, unknown>>;
}

/** The workflow request properties. */
export interface WorkflowRequestOutputParent {
  /** The workflow run id (GUID). */
  workflowRunId: string;
  /** The workflow definition id (GUID). */
  workflowDefinitionId: string;
  /** The person(GUID) who sent this workflow request. */
  requestorId: string;
  /** The submitted time of a workflow request. */
  submittedTime: string;
  /** The last update time of a workflow request. */
  lastUpdatedTime: string;
  /** RequestPayload */
  requestPayload: RequestPayloadOutput;
  type: "WorkflowRequest" | "approval" | "task";
}

/** RequestPayload */
export interface RequestPayloadOutputParent {
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

/** The workflow task request properties. */
export interface TaskRequestOutput extends WorkflowRequestOutputParent {
  /** The task request id(GUID). */
  taskRequestId: string;
  /** SimpleTaskDetail */
  taskDetail: SimpleTaskDetailOutput;
  type: "task";
}

/** SimpleTaskDetail */
export interface SimpleTaskDetailOutput {
  /** Task type. */
  taskType?: string;
  /** The task title of a task definition. */
  taskTitle: string;
  /** The task definition body detail. */
  taskBody: string;
  /** The person who has been assigned the task request. */
  assignedTo?: Array<string>;
  /** Task request status. */
  status:
    | "Not Started"
    | "In Progress"
    | "Completed"
    | "Canceled"
    | "InProgress"
    | "Failed"
    | "NotStarted"
    | "Canceling"
    | "CancellationFailed";
  /** The change history of a workflow task request. */
  changeHistory?: Array<Record<string, unknown>>;
}

/** WorkflowRunList */
export interface WorkflowRunListOutput {
  /** The value of workflow run list. */
  value: Array<WorkflowRunOutput>;
  /** The URL to get the next set of results. */
  nextLink?: string;
}

/** The workflow run properties. */
export interface WorkflowRunOutput {
  /** The workflow run id (GUID). */
  id: string;
  /** The workflow definition id (GUID). */
  workflowDefinitionId: string;
  /** Workflow run start time. */
  startTime: string;
  /** The person(GUID) who triggered the workflow run. */
  requestor: string;
  /** RequestPayload */
  requestPayload: RequestPayloadOutput;
  /** Workflow run status. */
  status:
    | "Not Started"
    | "In Progress"
    | "Completed"
    | "Canceled"
    | "InProgress"
    | "Failed"
    | "NotStarted"
    | "Canceling"
    | "CancellationFailed";
  /** The workflow definition of this workflow run. */
  definition?: Record<string, unknown>;
  /** WorkflowRunDetail */
  detail?: WorkflowRunDetailOutput;
  /** The time of workflow run completed. */
  endTime?: string;
  /** The time of workflow run be canceled. */
  cancelTime?: string;
  /** The comment when cancel a workflow run. */
  cancelComment?: string;
}

/** WorkflowRunDetail */
export interface WorkflowRunDetailOutput {
  /** TriggerDetail */
  trigger: TriggerDetailOutput;
  /** ActionDetail */
  actions: ActionDetailOutput;
}

/** TriggerDetail */
export interface TriggerDetailOutput {
  /** The start time of trigger in workflow run detail. */
  startTime: string;
  /** The status of trigger in workflow run detail. */
  status: Record<string, unknown>;
}

/** ActionDetail */
export interface ActionDetailOutput {
  /** The start time of actions. */
  startTime: string;
  /** The status of actions. */
  status: Record<string, unknown>;
  /** The output content of actions. */
  output?: Record<string, unknown>;
  /** The input content of actions. */
  input?: Record<string, unknown>;
}

/** WorkflowDefinitionMetadataList */
export interface WorkflowDefinitionMetadataListOutput {
  /** The value of workflow definition list. */
  value: Array<WorkflowDefinitionMetadataOutput>;
  /** The URL to get the next set of results. */
  nextLink?: string;
}

/** The workflow definition metadata, not include detailed definition. */
export interface WorkflowDefinitionMetadataOutput {
  /** The GUID of workflow definition. */
  id: string;
  /** The workflow scenario type. */
  scenarioType:
    | "CreateTerm"
    | "UpdateTerm"
    | "DeleteTerm"
    | "ImportTerms"
    | "GrantDataAccess"
    | "UpdateAssetAttributes";
  /** The associated entities object list. */
  boundScopes?: Array<GatewayReferenceObjectOutput>;
  /** The created time of a workflow definition. */
  createdTime: string;
  /** The person who created the workflow definition. */
  createdBy: string;
  /** The last update time of a workflow definition. */
  lastUpdateTime: string;
  /** The person who updated the workflow definition. */
  updatedBy: string;
  /** The workflow name of workflow definition. */
  workflowName: string;
  /** Whether the workflow definition enabled or not. */
  isEnabled: boolean;
  /** Description of a workflow definition. */
  description: string;
}

/** GatewayReferenceObject */
export interface GatewayReferenceObjectOutputParent {
  type: "GatewayReferenceObject" | "CollectionReference" | "PathReference";
}

/** The workflow definition. */
export interface WorkflowDefinitionOutput
  extends WorkflowDefinitionMetadataOutput {
  /** The workflow definition properties. */
  definition: Record<string, unknown>;
}

export interface CreateTermRequestWebRequestOutput
  extends RequestPayloadOutputParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "CreateTermRequest";
}

export interface DeleteTermRequestWebRequestOutput
  extends RequestPayloadOutputParent {
  glossaryTermId?: string;
  forceDeleteChildren?: boolean;
  requestType: "DeleteTermRequest";
}

export interface GrantDataAccessWebRequestOutput
  extends RequestPayloadOutputParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "GrantDataAccessRequest";
}

export interface ImportTermsRequestWebRequestOutput
  extends RequestPayloadOutputParent {
  fileName: string;
  /** Base64 encoded file content used to import terms in batch. */
  fileContent: string;
  requestType: "ImportTermsRequest";
}

export interface UpdateTermRequestWebRequestOutput
  extends RequestPayloadOutputParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "UpdateTermRequest";
}

export interface UpdateAssetAttributesWebRequestOutput
  extends RequestPayloadOutputParent {
  /** Any object */
  payload?: Record<string, unknown>;
  requestType: "UpdateAssetAttributesRequest";
}

export interface CollectionReferenceOutput
  extends GatewayReferenceObjectOutputParent {
  referenceName: string;
  type: "CollectionReference";
}

export interface PathReferenceOutput
  extends GatewayReferenceObjectOutputParent {
  referenceName: string;
  referenceSource: string;
  type: "PathReference";
}

/** The workflow request properties. */
export type WorkflowRequestOutput = ApprovalRequestOutput | TaskRequestOutput;
/** RequestPayload */
export type RequestPayloadOutput =
  | CreateTermRequestWebRequestOutput
  | DeleteTermRequestWebRequestOutput
  | GrantDataAccessWebRequestOutput
  | ImportTermsRequestWebRequestOutput
  | UpdateTermRequestWebRequestOutput
  | UpdateAssetAttributesWebRequestOutput;
/** GatewayReferenceObject */
export type GatewayReferenceObjectOutput =
  | CollectionReferenceOutput
  | PathReferenceOutput;
