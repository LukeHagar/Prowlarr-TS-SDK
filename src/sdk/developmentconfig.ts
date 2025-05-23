/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { developmentConfigGetApiV1ConfigDevelopment } from "../funcs/developmentConfigGetApiV1ConfigDevelopment.js";
import { developmentConfigGetApiV1ConfigDevelopmentId } from "../funcs/developmentConfigGetApiV1ConfigDevelopmentId.js";
import { developmentConfigPutApiV1ConfigDevelopmentId } from "../funcs/developmentConfigPutApiV1ConfigDevelopmentId.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DevelopmentConfig extends ClientSDK {
  async putApiV1ConfigDevelopmentId(
    request: operations.PutApiV1ConfigDevelopmentIdRequest,
    options?: RequestOptions,
  ): Promise<models.DevelopmentConfigResource> {
    return unwrapAsync(developmentConfigPutApiV1ConfigDevelopmentId(
      this,
      request,
      options,
    ));
  }

  async getApiV1ConfigDevelopmentId(
    request: operations.GetApiV1ConfigDevelopmentIdRequest,
    options?: RequestOptions,
  ): Promise<models.DevelopmentConfigResource> {
    return unwrapAsync(developmentConfigGetApiV1ConfigDevelopmentId(
      this,
      request,
      options,
    ));
  }

  async getApiV1ConfigDevelopment(
    options?: RequestOptions,
  ): Promise<models.DevelopmentConfigResource> {
    return unwrapAsync(developmentConfigGetApiV1ConfigDevelopment(
      this,
      options,
    ));
  }
}
