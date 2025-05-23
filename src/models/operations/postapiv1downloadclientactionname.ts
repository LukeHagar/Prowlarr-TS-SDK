/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PostApiV1DownloadclientActionNameRequest = {
  name: string;
  downloadClientResource?: models.DownloadClientResource | undefined;
};

/** @internal */
export const PostApiV1DownloadclientActionNameRequest$inboundSchema: z.ZodType<
  PostApiV1DownloadclientActionNameRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  DownloadClientResource: models.DownloadClientResource$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "DownloadClientResource": "downloadClientResource",
  });
});

/** @internal */
export type PostApiV1DownloadclientActionNameRequest$Outbound = {
  name: string;
  DownloadClientResource?: models.DownloadClientResource$Outbound | undefined;
};

/** @internal */
export const PostApiV1DownloadclientActionNameRequest$outboundSchema: z.ZodType<
  PostApiV1DownloadclientActionNameRequest$Outbound,
  z.ZodTypeDef,
  PostApiV1DownloadclientActionNameRequest
> = z.object({
  name: z.string(),
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
export namespace PostApiV1DownloadclientActionNameRequest$ {
  /** @deprecated use `PostApiV1DownloadclientActionNameRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostApiV1DownloadclientActionNameRequest$inboundSchema;
  /** @deprecated use `PostApiV1DownloadclientActionNameRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostApiV1DownloadclientActionNameRequest$outboundSchema;
  /** @deprecated use `PostApiV1DownloadclientActionNameRequest$Outbound` instead. */
  export type Outbound = PostApiV1DownloadclientActionNameRequest$Outbound;
}

export function postApiV1DownloadclientActionNameRequestToJSON(
  postApiV1DownloadclientActionNameRequest:
    PostApiV1DownloadclientActionNameRequest,
): string {
  return JSON.stringify(
    PostApiV1DownloadclientActionNameRequest$outboundSchema.parse(
      postApiV1DownloadclientActionNameRequest,
    ),
  );
}

export function postApiV1DownloadclientActionNameRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiV1DownloadclientActionNameRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiV1DownloadclientActionNameRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostApiV1DownloadclientActionNameRequest' from JSON`,
  );
}
