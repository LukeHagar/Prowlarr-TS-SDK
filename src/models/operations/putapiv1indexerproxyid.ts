/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PutApiV1IndexerproxyIdRequest = {
  forceSave?: boolean | undefined;
  id: string;
  indexerProxyResource?: models.IndexerProxyResource | undefined;
};

/** @internal */
export const PutApiV1IndexerproxyIdRequest$inboundSchema: z.ZodType<
  PutApiV1IndexerproxyIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  forceSave: z.boolean().default(false),
  id: z.string(),
  IndexerProxyResource: models.IndexerProxyResource$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "IndexerProxyResource": "indexerProxyResource",
  });
});

/** @internal */
export type PutApiV1IndexerproxyIdRequest$Outbound = {
  forceSave: boolean;
  id: string;
  IndexerProxyResource?: models.IndexerProxyResource$Outbound | undefined;
};

/** @internal */
export const PutApiV1IndexerproxyIdRequest$outboundSchema: z.ZodType<
  PutApiV1IndexerproxyIdRequest$Outbound,
  z.ZodTypeDef,
  PutApiV1IndexerproxyIdRequest
> = z.object({
  forceSave: z.boolean().default(false),
  id: z.string(),
  indexerProxyResource: models.IndexerProxyResource$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    indexerProxyResource: "IndexerProxyResource",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutApiV1IndexerproxyIdRequest$ {
  /** @deprecated use `PutApiV1IndexerproxyIdRequest$inboundSchema` instead. */
  export const inboundSchema = PutApiV1IndexerproxyIdRequest$inboundSchema;
  /** @deprecated use `PutApiV1IndexerproxyIdRequest$outboundSchema` instead. */
  export const outboundSchema = PutApiV1IndexerproxyIdRequest$outboundSchema;
  /** @deprecated use `PutApiV1IndexerproxyIdRequest$Outbound` instead. */
  export type Outbound = PutApiV1IndexerproxyIdRequest$Outbound;
}

export function putApiV1IndexerproxyIdRequestToJSON(
  putApiV1IndexerproxyIdRequest: PutApiV1IndexerproxyIdRequest,
): string {
  return JSON.stringify(
    PutApiV1IndexerproxyIdRequest$outboundSchema.parse(
      putApiV1IndexerproxyIdRequest,
    ),
  );
}

export function putApiV1IndexerproxyIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<PutApiV1IndexerproxyIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutApiV1IndexerproxyIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutApiV1IndexerproxyIdRequest' from JSON`,
  );
}
