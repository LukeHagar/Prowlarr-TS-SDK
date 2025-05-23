/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationPutApiV1ApplicationsBulk } from "../../funcs/applicationPutApiV1ApplicationsBulk.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.ApplicationBulkResource$inboundSchema.optional(),
};

export const tool$applicationPutApiV1ApplicationsBulk: ToolDefinition<
  typeof args
> = {
  name: "application-put-api-v1-applications-bulk",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await applicationPutApiV1ApplicationsBulk(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
