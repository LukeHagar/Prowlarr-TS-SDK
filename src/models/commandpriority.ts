/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const CommandPriority = {
  Normal: "normal",
  High: "high",
  Low: "low",
} as const;
export type CommandPriority = ClosedEnum<typeof CommandPriority>;

/** @internal */
export const CommandPriority$inboundSchema: z.ZodNativeEnum<
  typeof CommandPriority
> = z.nativeEnum(CommandPriority);

/** @internal */
export const CommandPriority$outboundSchema: z.ZodNativeEnum<
  typeof CommandPriority
> = CommandPriority$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommandPriority$ {
  /** @deprecated use `CommandPriority$inboundSchema` instead. */
  export const inboundSchema = CommandPriority$inboundSchema;
  /** @deprecated use `CommandPriority$outboundSchema` instead. */
  export const outboundSchema = CommandPriority$outboundSchema;
}
