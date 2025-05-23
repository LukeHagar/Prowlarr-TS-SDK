/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type PostApiV1NotificationActionNameRequest = {
  name: string;
  notificationResource?: models.NotificationResource | undefined;
};

/** @internal */
export const PostApiV1NotificationActionNameRequest$inboundSchema: z.ZodType<
  PostApiV1NotificationActionNameRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  NotificationResource: models.NotificationResource$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "NotificationResource": "notificationResource",
  });
});

/** @internal */
export type PostApiV1NotificationActionNameRequest$Outbound = {
  name: string;
  NotificationResource?: models.NotificationResource$Outbound | undefined;
};

/** @internal */
export const PostApiV1NotificationActionNameRequest$outboundSchema: z.ZodType<
  PostApiV1NotificationActionNameRequest$Outbound,
  z.ZodTypeDef,
  PostApiV1NotificationActionNameRequest
> = z.object({
  name: z.string(),
  notificationResource: models.NotificationResource$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    notificationResource: "NotificationResource",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiV1NotificationActionNameRequest$ {
  /** @deprecated use `PostApiV1NotificationActionNameRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostApiV1NotificationActionNameRequest$inboundSchema;
  /** @deprecated use `PostApiV1NotificationActionNameRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostApiV1NotificationActionNameRequest$outboundSchema;
  /** @deprecated use `PostApiV1NotificationActionNameRequest$Outbound` instead. */
  export type Outbound = PostApiV1NotificationActionNameRequest$Outbound;
}

export function postApiV1NotificationActionNameRequestToJSON(
  postApiV1NotificationActionNameRequest:
    PostApiV1NotificationActionNameRequest,
): string {
  return JSON.stringify(
    PostApiV1NotificationActionNameRequest$outboundSchema.parse(
      postApiV1NotificationActionNameRequest,
    ),
  );
}

export function postApiV1NotificationActionNameRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostApiV1NotificationActionNameRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiV1NotificationActionNameRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostApiV1NotificationActionNameRequest' from JSON`,
  );
}
