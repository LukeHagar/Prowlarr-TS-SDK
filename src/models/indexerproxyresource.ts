/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  Field,
  Field$inboundSchema,
  Field$Outbound,
  Field$outboundSchema,
} from "./field.js";
import {
  ProviderMessage,
  ProviderMessage$inboundSchema,
  ProviderMessage$Outbound,
  ProviderMessage$outboundSchema,
} from "./providermessage.js";

export type IndexerProxyResource = {
  id?: number | undefined;
  name?: string | null | undefined;
  fields?: Array<Field> | null | undefined;
  implementationName?: string | null | undefined;
  implementation?: string | null | undefined;
  configContract?: string | null | undefined;
  infoLink?: string | null | undefined;
  message?: ProviderMessage | undefined;
  tags?: Array<number> | null | undefined;
  presets?: Array<IndexerProxyResource> | null | undefined;
  link?: string | null | undefined;
  onHealthIssue?: boolean | undefined;
  supportsOnHealthIssue?: boolean | undefined;
  includeHealthWarnings?: boolean | undefined;
  testCommand?: string | null | undefined;
};

/** @internal */
export const IndexerProxyResource$inboundSchema: z.ZodType<
  IndexerProxyResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(Field$inboundSchema)).optional(),
  implementationName: z.nullable(z.string()).optional(),
  implementation: z.nullable(z.string()).optional(),
  configContract: z.nullable(z.string()).optional(),
  infoLink: z.nullable(z.string()).optional(),
  message: ProviderMessage$inboundSchema.optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  presets: z.nullable(z.array(z.lazy(() => IndexerProxyResource$inboundSchema)))
    .optional(),
  link: z.nullable(z.string()).optional(),
  onHealthIssue: z.boolean().optional(),
  supportsOnHealthIssue: z.boolean().optional(),
  includeHealthWarnings: z.boolean().optional(),
  testCommand: z.nullable(z.string()).optional(),
});

/** @internal */
export type IndexerProxyResource$Outbound = {
  id?: number | undefined;
  name?: string | null | undefined;
  fields?: Array<Field$Outbound> | null | undefined;
  implementationName?: string | null | undefined;
  implementation?: string | null | undefined;
  configContract?: string | null | undefined;
  infoLink?: string | null | undefined;
  message?: ProviderMessage$Outbound | undefined;
  tags?: Array<number> | null | undefined;
  presets?: Array<IndexerProxyResource$Outbound> | null | undefined;
  link?: string | null | undefined;
  onHealthIssue?: boolean | undefined;
  supportsOnHealthIssue?: boolean | undefined;
  includeHealthWarnings?: boolean | undefined;
  testCommand?: string | null | undefined;
};

/** @internal */
export const IndexerProxyResource$outboundSchema: z.ZodType<
  IndexerProxyResource$Outbound,
  z.ZodTypeDef,
  IndexerProxyResource
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(Field$outboundSchema)).optional(),
  implementationName: z.nullable(z.string()).optional(),
  implementation: z.nullable(z.string()).optional(),
  configContract: z.nullable(z.string()).optional(),
  infoLink: z.nullable(z.string()).optional(),
  message: ProviderMessage$outboundSchema.optional(),
  tags: z.nullable(z.array(z.number().int())).optional(),
  presets: z.nullable(
    z.array(z.lazy(() => IndexerProxyResource$outboundSchema)),
  ).optional(),
  link: z.nullable(z.string()).optional(),
  onHealthIssue: z.boolean().optional(),
  supportsOnHealthIssue: z.boolean().optional(),
  includeHealthWarnings: z.boolean().optional(),
  testCommand: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexerProxyResource$ {
  /** @deprecated use `IndexerProxyResource$inboundSchema` instead. */
  export const inboundSchema = IndexerProxyResource$inboundSchema;
  /** @deprecated use `IndexerProxyResource$outboundSchema` instead. */
  export const outboundSchema = IndexerProxyResource$outboundSchema;
  /** @deprecated use `IndexerProxyResource$Outbound` instead. */
  export type Outbound = IndexerProxyResource$Outbound;
}

export function indexerProxyResourceToJSON(
  indexerProxyResource: IndexerProxyResource,
): string {
  return JSON.stringify(
    IndexerProxyResource$outboundSchema.parse(indexerProxyResource),
  );
}

export function indexerProxyResourceFromJSON(
  jsonString: string,
): SafeParseResult<IndexerProxyResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndexerProxyResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndexerProxyResource' from JSON`,
  );
}
