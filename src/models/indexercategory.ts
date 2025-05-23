/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type IndexerCategory = {
  id?: number | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  subCategories?: Array<IndexerCategory> | null | undefined;
};

/** @internal */
export const IndexerCategory$inboundSchema: z.ZodType<
  IndexerCategory,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  subCategories: z.nullable(
    z.array(z.lazy(() => IndexerCategory$inboundSchema)),
  ).optional(),
});

/** @internal */
export type IndexerCategory$Outbound = {
  id?: number | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  subCategories?: Array<IndexerCategory$Outbound> | null | undefined;
};

/** @internal */
export const IndexerCategory$outboundSchema: z.ZodType<
  IndexerCategory$Outbound,
  z.ZodTypeDef,
  IndexerCategory
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  subCategories: z.nullable(
    z.array(z.lazy(() => IndexerCategory$outboundSchema)),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexerCategory$ {
  /** @deprecated use `IndexerCategory$inboundSchema` instead. */
  export const inboundSchema = IndexerCategory$inboundSchema;
  /** @deprecated use `IndexerCategory$outboundSchema` instead. */
  export const outboundSchema = IndexerCategory$outboundSchema;
  /** @deprecated use `IndexerCategory$Outbound` instead. */
  export type Outbound = IndexerCategory$Outbound;
}

export function indexerCategoryToJSON(
  indexerCategory: IndexerCategory,
): string {
  return JSON.stringify(IndexerCategory$outboundSchema.parse(indexerCategory));
}

export function indexerCategoryFromJSON(
  jsonString: string,
): SafeParseResult<IndexerCategory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndexerCategory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndexerCategory' from JSON`,
  );
}
