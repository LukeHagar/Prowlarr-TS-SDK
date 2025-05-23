/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PostApiV1IndexerproxyRequest = {
  forceSave?: boolean | undefined;
  indexerProxyResource?: models.IndexerProxyResource | undefined;
};

/** @internal */
export const PostApiV1IndexerproxyRequest$inboundSchema: z.ZodType<
  PostApiV1IndexerproxyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  forceSave: z.boolean().default(false),
  IndexerProxyResource: models.IndexerProxyResource$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "IndexerProxyResource": "indexerProxyResource",
  });
});

/** @internal */
export type PostApiV1IndexerproxyRequest$Outbound = {
  forceSave: boolean;
  IndexerProxyResource?: models.IndexerProxyResource$Outbound | undefined;
};

/** @internal */
export const PostApiV1IndexerproxyRequest$outboundSchema: z.ZodType<
  PostApiV1IndexerproxyRequest$Outbound,
  z.ZodTypeDef,
  PostApiV1IndexerproxyRequest
> = z.object({
  forceSave: z.boolean().default(false),
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
export namespace PostApiV1IndexerproxyRequest$ {
  /** @deprecated use `PostApiV1IndexerproxyRequest$inboundSchema` instead. */
  export const inboundSchema = PostApiV1IndexerproxyRequest$inboundSchema;
  /** @deprecated use `PostApiV1IndexerproxyRequest$outboundSchema` instead. */
  export const outboundSchema = PostApiV1IndexerproxyRequest$outboundSchema;
  /** @deprecated use `PostApiV1IndexerproxyRequest$Outbound` instead. */
  export type Outbound = PostApiV1IndexerproxyRequest$Outbound;
}

export function postApiV1IndexerproxyRequestToJSON(
  postApiV1IndexerproxyRequest: PostApiV1IndexerproxyRequest,
): string {
  return JSON.stringify(
    PostApiV1IndexerproxyRequest$outboundSchema.parse(
      postApiV1IndexerproxyRequest,
    ),
  );
}

export function postApiV1IndexerproxyRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostApiV1IndexerproxyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiV1IndexerproxyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiV1IndexerproxyRequest' from JSON`,
  );
}
