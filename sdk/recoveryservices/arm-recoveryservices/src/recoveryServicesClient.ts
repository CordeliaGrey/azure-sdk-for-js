/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  VaultCertificatesImpl,
  RegisteredIdentitiesImpl,
  ReplicationUsagesImpl,
  PrivateLinkResourcesOperationsImpl,
  RecoveryServicesImpl,
  VaultsImpl,
  OperationsImpl,
  VaultExtendedInfoImpl,
  UsagesImpl
} from "./operations";
import {
  VaultCertificates,
  RegisteredIdentities,
  ReplicationUsages,
  PrivateLinkResourcesOperations,
  RecoveryServices,
  Vaults,
  Operations,
  VaultExtendedInfo,
  Usages
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { RecoveryServicesClientContext } from "./recoveryServicesClientContext";
import {
  RecoveryServicesClientOptionalParams,
  RecoveryServicesClientGetOperationStatusOptionalParams,
  RecoveryServicesClientGetOperationStatusResponse,
  RecoveryServicesClientGetOperationResultOptionalParams,
  RecoveryServicesClientGetOperationResultResponse
} from "./models";

export class RecoveryServicesClient extends RecoveryServicesClientContext {
  /**
   * Initializes a new instance of the RecoveryServicesClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription Id.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: RecoveryServicesClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.vaultCertificates = new VaultCertificatesImpl(this);
    this.registeredIdentities = new RegisteredIdentitiesImpl(this);
    this.replicationUsages = new ReplicationUsagesImpl(this);
    this.privateLinkResourcesOperations = new PrivateLinkResourcesOperationsImpl(
      this
    );
    this.recoveryServices = new RecoveryServicesImpl(this);
    this.vaults = new VaultsImpl(this);
    this.operations = new OperationsImpl(this);
    this.vaultExtendedInfo = new VaultExtendedInfoImpl(this);
    this.usages = new UsagesImpl(this);
  }

  /**
   * Gets the operation status for a resource.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param operationId
   * @param options The options parameters.
   */
  getOperationStatus(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: RecoveryServicesClientGetOperationStatusOptionalParams
  ): Promise<RecoveryServicesClientGetOperationStatusResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, vaultName, operationId, options },
      getOperationStatusOperationSpec
    );
  }

  /**
   * Gets the operation result for a resource.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param vaultName The name of the recovery services vault.
   * @param operationId
   * @param options The options parameters.
   */
  getOperationResult(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: RecoveryServicesClientGetOperationResultOptionalParams
  ): Promise<RecoveryServicesClientGetOperationResultResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, vaultName, operationId, options },
      getOperationResultOperationSpec
    );
  }

  vaultCertificates: VaultCertificates;
  registeredIdentities: RegisteredIdentities;
  replicationUsages: ReplicationUsages;
  privateLinkResourcesOperations: PrivateLinkResourcesOperations;
  recoveryServices: RecoveryServices;
  vaults: Vaults;
  operations: Operations;
  vaultExtendedInfo: VaultExtendedInfo;
  usages: Usages;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationStatus/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
