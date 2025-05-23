/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  HistoryEventType,
  HistoryEventType$inboundSchema,
  HistoryEventType$outboundSchema,
} from "./historyeventtype.js";

export type HistoryResource = {
  id?: number | undefined;
  indexerId?: number | undefined;
  date?: Date | undefined;
  downloadId?: string | null | undefined;
  successful?: boolean | undefined;
  eventType?: HistoryEventType | undefined;
  data?: { [k: string]: string | null } | null | undefined;
};

/** @internal */
export const HistoryResource$inboundSchema: z.ZodType<
  HistoryResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  indexerId: z.number().int().optional(),
  date: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  downloadId: z.nullable(z.string()).optional(),
  successful: z.boolean().optional(),
  eventType: HistoryEventType$inboundSchema.optional(),
  data: z.nullable(z.record(z.nullable(z.string()))).optional(),
});

/** @internal */
export type HistoryResource$Outbound = {
  id?: number | undefined;
  indexerId?: number | undefined;
  date?: string | undefined;
  downloadId?: string | null | undefined;
  successful?: boolean | undefined;
  eventType?: string | undefined;
  data?: { [k: string]: string | null } | null | undefined;
};

/** @internal */
export const HistoryResource$outboundSchema: z.ZodType<
  HistoryResource$Outbound,
  z.ZodTypeDef,
  HistoryResource
> = z.object({
  id: z.number().int().optional(),
  indexerId: z.number().int().optional(),
  date: z.date().transform(v => v.toISOString()).optional(),
  downloadId: z.nullable(z.string()).optional(),
  successful: z.boolean().optional(),
  eventType: HistoryEventType$outboundSchema.optional(),
  data: z.nullable(z.record(z.nullable(z.string()))).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HistoryResource$ {
  /** @deprecated use `HistoryResource$inboundSchema` instead. */
  export const inboundSchema = HistoryResource$inboundSchema;
  /** @deprecated use `HistoryResource$outboundSchema` instead. */
  export const outboundSchema = HistoryResource$outboundSchema;
  /** @deprecated use `HistoryResource$Outbound` instead. */
  export type Outbound = HistoryResource$Outbound;
}

export function historyResourceToJSON(
  historyResource: HistoryResource,
): string {
  return JSON.stringify(HistoryResource$outboundSchema.parse(historyResource));
}

export function historyResourceFromJSON(
  jsonString: string,
): SafeParseResult<HistoryResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HistoryResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HistoryResource' from JSON`,
  );
}
