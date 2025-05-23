/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PostApiV1ApplicationsTestRequest = {
  forceTest?: boolean | undefined;
  applicationResource?: models.ApplicationResource | undefined;
};

/** @internal */
export const PostApiV1ApplicationsTestRequest$inboundSchema: z.ZodType<
  PostApiV1ApplicationsTestRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  forceTest: z.boolean().default(false),
  ApplicationResource: models.ApplicationResource$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ApplicationResource": "applicationResource",
  });
});

/** @internal */
export type PostApiV1ApplicationsTestRequest$Outbound = {
  forceTest: boolean;
  ApplicationResource?: models.ApplicationResource$Outbound | undefined;
};

/** @internal */
export const PostApiV1ApplicationsTestRequest$outboundSchema: z.ZodType<
  PostApiV1ApplicationsTestRequest$Outbound,
  z.ZodTypeDef,
  PostApiV1ApplicationsTestRequest
> = z.object({
  forceTest: z.boolean().default(false),
  applicationResource: models.ApplicationResource$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    applicationResource: "ApplicationResource",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiV1ApplicationsTestRequest$ {
  /** @deprecated use `PostApiV1ApplicationsTestRequest$inboundSchema` instead. */
  export const inboundSchema = PostApiV1ApplicationsTestRequest$inboundSchema;
  /** @deprecated use `PostApiV1ApplicationsTestRequest$outboundSchema` instead. */
  export const outboundSchema = PostApiV1ApplicationsTestRequest$outboundSchema;
  /** @deprecated use `PostApiV1ApplicationsTestRequest$Outbound` instead. */
  export type Outbound = PostApiV1ApplicationsTestRequest$Outbound;
}

export function postApiV1ApplicationsTestRequestToJSON(
  postApiV1ApplicationsTestRequest: PostApiV1ApplicationsTestRequest,
): string {
  return JSON.stringify(
    PostApiV1ApplicationsTestRequest$outboundSchema.parse(
      postApiV1ApplicationsTestRequest,
    ),
  );
}

export function postApiV1ApplicationsTestRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostApiV1ApplicationsTestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostApiV1ApplicationsTestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiV1ApplicationsTestRequest' from JSON`,
  );
}
