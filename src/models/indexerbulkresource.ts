/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  ApplyTags,
  ApplyTags$inboundSchema,
  ApplyTags$outboundSchema,
} from "./applytags.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type IndexerBulkResource = {
  ids?: Array<number> | null | undefined;
  tags?: Array<number> | null | undefined;
  applyTags?: ApplyTags | undefined;
  enable?: boolean | null | undefined;
  appProfileId?: number | null | undefined;
  priority?: number | null | undefined;
  minimumSeeders?: number | null | undefined;
  seedRatio?: number | null | undefined;
  seedTime?: number | null | undefined;
  packSeedTime?: number | null | undefined;
  preferMagnetUrl?: boolean | null | undefined;
};

/** @internal */
export const IndexerBulkResource$inboundSchema: z.ZodType<
  IndexerBulkResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  ids: z.nullable(z.array(z.number().int())).optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  applyTags: ApplyTags$inboundSchema.optional(),
  enable: z.nullable(z.boolean()).optional(),
  appProfileId: z.nullable(z.number().int()).optional(),
  priority: z.nullable(z.number().int()).optional(),
  minimumSeeders: z.nullable(z.number().int()).optional(),
  seedRatio: z.nullable(z.number()).optional(),
  seedTime: z.nullable(z.number().int()).optional(),
  packSeedTime: z.nullable(z.number().int()).optional(),
  preferMagnetUrl: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type IndexerBulkResource$Outbound = {
  ids?: Array<number> | null | undefined;
  tags?: Array<number> | null | undefined;
  applyTags?: string | undefined;
  enable?: boolean | null | undefined;
  appProfileId?: number | null | undefined;
  priority?: number | null | undefined;
  minimumSeeders?: number | null | undefined;
  seedRatio?: number | null | undefined;
  seedTime?: number | null | undefined;
  packSeedTime?: number | null | undefined;
  preferMagnetUrl?: boolean | null | undefined;
};

/** @internal */
export const IndexerBulkResource$outboundSchema: z.ZodType<
  IndexerBulkResource$Outbound,
  z.ZodTypeDef,
  IndexerBulkResource
> = z.object({
  ids: z.nullable(z.array(z.number().int())).optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  applyTags: ApplyTags$outboundSchema.optional(),
  enable: z.nullable(z.boolean()).optional(),
  appProfileId: z.nullable(z.number().int()).optional(),
  priority: z.nullable(z.number().int()).optional(),
  minimumSeeders: z.nullable(z.number().int()).optional(),
  seedRatio: z.nullable(z.number()).optional(),
  seedTime: z.nullable(z.number().int()).optional(),
  packSeedTime: z.nullable(z.number().int()).optional(),
  preferMagnetUrl: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexerBulkResource$ {
  /** @deprecated use `IndexerBulkResource$inboundSchema` instead. */
  export const inboundSchema = IndexerBulkResource$inboundSchema;
  /** @deprecated use `IndexerBulkResource$outboundSchema` instead. */
  export const outboundSchema = IndexerBulkResource$outboundSchema;
  /** @deprecated use `IndexerBulkResource$Outbound` instead. */
  export type Outbound = IndexerBulkResource$Outbound;
}

export function indexerBulkResourceToJSON(
  indexerBulkResource: IndexerBulkResource,
): string {
  return JSON.stringify(
    IndexerBulkResource$outboundSchema.parse(indexerBulkResource),
  );
}

export function indexerBulkResourceFromJSON(
  jsonString: string,
): SafeParseResult<IndexerBulkResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndexerBulkResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndexerBulkResource' from JSON`,
  );
}
