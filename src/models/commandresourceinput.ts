/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CommandInput,
  CommandInput$inboundSchema,
  CommandInput$Outbound,
  CommandInput$outboundSchema,
} from "./commandinput.js";
import {
  CommandPriority,
  CommandPriority$inboundSchema,
  CommandPriority$outboundSchema,
} from "./commandpriority.js";
import {
  CommandStatus,
  CommandStatus$inboundSchema,
  CommandStatus$outboundSchema,
} from "./commandstatus.js";
import {
  CommandTrigger,
  CommandTrigger$inboundSchema,
  CommandTrigger$outboundSchema,
} from "./commandtrigger.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CommandResourceInput = {
  id?: number | undefined;
  name?: string | null | undefined;
  commandName?: string | null | undefined;
  message?: string | null | undefined;
  body?: CommandInput | undefined;
  priority?: CommandPriority | undefined;
  status?: CommandStatus | undefined;
  queued?: Date | undefined;
  started?: Date | null | undefined;
  ended?: Date | null | undefined;
  duration?: string | null | undefined;
  exception?: string | null | undefined;
  trigger?: CommandTrigger | undefined;
  clientUserAgent?: string | null | undefined;
  stateChangeTime?: Date | null | undefined;
  sendUpdatesToClient?: boolean | undefined;
  updateScheduledTask?: boolean | undefined;
  lastExecutionTime?: Date | null | undefined;
};

/** @internal */
export const CommandResourceInput$inboundSchema: z.ZodType<
  CommandResourceInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  commandName: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  body: CommandInput$inboundSchema.optional(),
  priority: CommandPriority$inboundSchema.optional(),
  status: CommandStatus$inboundSchema.optional(),
  queued: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  started: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  ended: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  duration: z.nullable(z.string()).optional(),
  exception: z.nullable(z.string()).optional(),
  trigger: CommandTrigger$inboundSchema.optional(),
  clientUserAgent: z.nullable(z.string()).optional(),
  stateChangeTime: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  sendUpdatesToClient: z.boolean().optional(),
  updateScheduledTask: z.boolean().optional(),
  lastExecutionTime: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
});

/** @internal */
export type CommandResourceInput$Outbound = {
  id?: number | undefined;
  name?: string | null | undefined;
  commandName?: string | null | undefined;
  message?: string | null | undefined;
  body?: CommandInput$Outbound | undefined;
  priority?: string | undefined;
  status?: string | undefined;
  queued?: string | undefined;
  started?: string | null | undefined;
  ended?: string | null | undefined;
  duration?: string | null | undefined;
  exception?: string | null | undefined;
  trigger?: string | undefined;
  clientUserAgent?: string | null | undefined;
  stateChangeTime?: string | null | undefined;
  sendUpdatesToClient?: boolean | undefined;
  updateScheduledTask?: boolean | undefined;
  lastExecutionTime?: string | null | undefined;
};

/** @internal */
export const CommandResourceInput$outboundSchema: z.ZodType<
  CommandResourceInput$Outbound,
  z.ZodTypeDef,
  CommandResourceInput
> = z.object({
  id: z.number().int().optional(),
  name: z.nullable(z.string()).optional(),
  commandName: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
  body: CommandInput$outboundSchema.optional(),
  priority: CommandPriority$outboundSchema.optional(),
  status: CommandStatus$outboundSchema.optional(),
  queued: z.date().transform(v => v.toISOString()).optional(),
  started: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  ended: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  duration: z.nullable(z.string()).optional(),
  exception: z.nullable(z.string()).optional(),
  trigger: CommandTrigger$outboundSchema.optional(),
  clientUserAgent: z.nullable(z.string()).optional(),
  stateChangeTime: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  sendUpdatesToClient: z.boolean().optional(),
  updateScheduledTask: z.boolean().optional(),
  lastExecutionTime: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommandResourceInput$ {
  /** @deprecated use `CommandResourceInput$inboundSchema` instead. */
  export const inboundSchema = CommandResourceInput$inboundSchema;
  /** @deprecated use `CommandResourceInput$outboundSchema` instead. */
  export const outboundSchema = CommandResourceInput$outboundSchema;
  /** @deprecated use `CommandResourceInput$Outbound` instead. */
  export type Outbound = CommandResourceInput$Outbound;
}

export function commandResourceInputToJSON(
  commandResourceInput: CommandResourceInput,
): string {
  return JSON.stringify(
    CommandResourceInput$outboundSchema.parse(commandResourceInput),
  );
}

export function commandResourceInputFromJSON(
  jsonString: string,
): SafeParseResult<CommandResourceInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommandResourceInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommandResourceInput' from JSON`,
  );
}
