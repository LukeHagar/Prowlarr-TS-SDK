/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PostApiV1DownloadclientTestRequest = {
  forceTest?: boolean | undefined;
  downloadClientResource?: models.DownloadClientResource | undefined;
};

/** @internal */
export const PostApiV1DownloadclientTestRequest$inboundSchema: z.ZodType<
  PostApiV1DownloadclientTestRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  forceTest: z.boolean().default(false),
  DownloadClientResource: models.DownloadClientResource$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "DownloadClientResource": "downloadClientResource",
  });
});

/** @internal */
export type PostApiV1DownloadclientTestRequest$Outbound = {
  forceTest: boolean;
  DownloadClientResource?: models.DownloadClientResource$Outbound | undefined;
};

/** @internal */
export const PostApiV1DownloadclientTestRequest$outboundSchema: z.ZodType<
  PostApiV1DownloadclientTestRequest$Outbound,
  z.ZodTypeDef,
  PostApiV1DownloadclientTestRequest
> = z.object({
  forceTest: z.boolean().default(false),
  downloadClientResource: models.DownloadClientResource$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    downloadClientResource: "DownloadClientResource",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiV1DownloadclientTestRequest$ {
  /** @deprecated use `PostApiV1DownloadclientTestRequest$inboundSchema` instead. */
  export const inboundSchema = PostApiV1DownloadclientTestRequest$inboundSchema;
  /** @deprecated use `PostApiV1DownloadclientTestRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostApiV1DownloadclientTestRequest$outboundSchema;
  /** @deprecated use `PostApiV1DownloadclientTestRequest$Outbound` instead. */
  export type Outbound = PostApiV1DownloadclientTestRequest$Outbound;
}

export function postApiV1DownloadclientTestRequestToJSON(
  postApiV1DownloadclientTestRequest: PostApiV1DownloadclientTestRequest,
): string {
  return JSON.stringify(
    PostApiV1DownloadclientTestRequest$outboundSchema.parse(
      postApiV1DownloadclientTestRequest,
    ),
  );
}

export function postApiV1DownloadclientTestRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostApiV1DownloadclientTestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiV1DownloadclientTestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiV1DownloadclientTestRequest' from JSON`,
  );
}
