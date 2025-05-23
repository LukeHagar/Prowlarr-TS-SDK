/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  ApplicationSyncLevel,
  ApplicationSyncLevel$inboundSchema,
  ApplicationSyncLevel$outboundSchema,
} from "./applicationsynclevel.js";
import {
  ApplyTags,
  ApplyTags$inboundSchema,
  ApplyTags$outboundSchema,
} from "./applytags.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type ApplicationBulkResource = {
  ids?: Array<number> | null | undefined;
  tags?: Array<number> | null | undefined;
  applyTags?: ApplyTags | undefined;
  syncLevel?: ApplicationSyncLevel | undefined;
};

/** @internal */
export const ApplicationBulkResource$inboundSchema: z.ZodType<
  ApplicationBulkResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  ids: z.nullable(z.array(z.number().int())).optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  applyTags: ApplyTags$inboundSchema.optional(),
  syncLevel: ApplicationSyncLevel$inboundSchema.optional(),
});

/** @internal */
export type ApplicationBulkResource$Outbound = {
  ids?: Array<number> | null | undefined;
  tags?: Array<number> | null | undefined;
  applyTags?: string | undefined;
  syncLevel?: string | undefined;
};

/** @internal */
export const ApplicationBulkResource$outboundSchema: z.ZodType<
  ApplicationBulkResource$Outbound,
  z.ZodTypeDef,
  ApplicationBulkResource
> = z.object({
  ids: z.nullable(z.array(z.number().int())).optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  applyTags: ApplyTags$outboundSchema.optional(),
  syncLevel: ApplicationSyncLevel$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationBulkResource$ {
  /** @deprecated use `ApplicationBulkResource$inboundSchema` instead. */
  export const inboundSchema = ApplicationBulkResource$inboundSchema;
  /** @deprecated use `ApplicationBulkResource$outboundSchema` instead. */
  export const outboundSchema = ApplicationBulkResource$outboundSchema;
  /** @deprecated use `ApplicationBulkResource$Outbound` instead. */
  export type Outbound = ApplicationBulkResource$Outbound;
}

export function applicationBulkResourceToJSON(
  applicationBulkResource: ApplicationBulkResource,
): string {
  return JSON.stringify(
    ApplicationBulkResource$outboundSchema.parse(applicationBulkResource),
  );
}

export function applicationBulkResourceFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationBulkResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationBulkResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationBulkResource' from JSON`,
  );
}
