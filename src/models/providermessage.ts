/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  ProviderMessageType,
  ProviderMessageType$inboundSchema,
  ProviderMessageType$outboundSchema,
} from "./providermessagetype.js";

export type ProviderMessage = {
  message?: string | null | undefined;
  type?: ProviderMessageType | undefined;
};

/** @internal */
export const ProviderMessage$inboundSchema: z.ZodType<
  ProviderMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  type: ProviderMessageType$inboundSchema.optional(),
});

/** @internal */
export type ProviderMessage$Outbound = {
  message?: string | null | undefined;
  type?: string | undefined;
};

/** @internal */
export const ProviderMessage$outboundSchema: z.ZodType<
  ProviderMessage$Outbound,
  z.ZodTypeDef,
  ProviderMessage
> = z.object({
  message: z.nullable(z.string()).optional(),
  type: ProviderMessageType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProviderMessage$ {
  /** @deprecated use `ProviderMessage$inboundSchema` instead. */
  export const inboundSchema = ProviderMessage$inboundSchema;
  /** @deprecated use `ProviderMessage$outboundSchema` instead. */
  export const outboundSchema = ProviderMessage$outboundSchema;
  /** @deprecated use `ProviderMessage$Outbound` instead. */
  export type Outbound = ProviderMessage$Outbound;
}

export function providerMessageToJSON(
  providerMessage: ProviderMessage,
): string {
  return JSON.stringify(ProviderMessage$outboundSchema.parse(providerMessage));
}

export function providerMessageFromJSON(
  jsonString: string,
): SafeParseResult<ProviderMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProviderMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProviderMessage' from JSON`,
  );
}
