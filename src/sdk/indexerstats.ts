/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { indexerStatsGetApiV1Indexerstats } from "../funcs/indexerStatsGetApiV1Indexerstats.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class IndexerStats extends ClientSDK {
  async getApiV1Indexerstats(
    request: operations.GetApiV1IndexerstatsRequest,
    options?: RequestOptions,
  ): Promise<models.IndexerStatsResource> {
    return unwrapAsync(indexerStatsGetApiV1Indexerstats(
      this,
      request,
      options,
    ));
  }
}
