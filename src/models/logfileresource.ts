/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type LogFileResource = {
  id?: number | undefined;
  filename?: string | null | undefined;
  lastWriteTime?: Date | undefined;
  contentsUrl?: string | null | undefined;
  downloadUrl?: string | null | undefined;
};

/** @internal */
export const LogFileResource$inboundSchema: z.ZodType<
  LogFileResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  filename: z.nullable(z.string()).optional(),
  lastWriteTime: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  contentsUrl: z.nullable(z.string()).optional(),
  downloadUrl: z.nullable(z.string()).optional(),
});

/** @internal */
export type LogFileResource$Outbound = {
  id?: number | undefined;
  filename?: string | null | undefined;
  lastWriteTime?: string | undefined;
  contentsUrl?: string | null | undefined;
  downloadUrl?: string | null | undefined;
};

/** @internal */
export const LogFileResource$outboundSchema: z.ZodType<
  LogFileResource$Outbound,
  z.ZodTypeDef,
  LogFileResource
> = z.object({
  id: z.number().int().optional(),
  filename: z.nullable(z.string()).optional(),
  lastWriteTime: z.date().transform(v => v.toISOString()).optional(),
  contentsUrl: z.nullable(z.string()).optional(),
  downloadUrl: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogFileResource$ {
  /** @deprecated use `LogFileResource$inboundSchema` instead. */
  export const inboundSchema = LogFileResource$inboundSchema;
  /** @deprecated use `LogFileResource$outboundSchema` instead. */
  export const outboundSchema = LogFileResource$outboundSchema;
  /** @deprecated use `LogFileResource$Outbound` instead. */
  export type Outbound = LogFileResource$Outbound;
}

export function logFileResourceToJSON(
  logFileResource: LogFileResource,
): string {
  return JSON.stringify(LogFileResource$outboundSchema.parse(logFileResource));
}

export function logFileResourceFromJSON(
  jsonString: string,
): SafeParseResult<LogFileResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LogFileResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LogFileResource' from JSON`,
  );
}
