/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hostConfigPutApiV1ConfigHostId } from "../../funcs/hostConfigPutApiV1ConfigHostId.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutApiV1ConfigHostIdRequest$inboundSchema,
};

export const tool$hostConfigPutApiV1ConfigHostId: ToolDefinition<typeof args> =
  {
    name: "host-config-put-api-v1-config-host-id",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await hostConfigPutApiV1ConfigHostId(
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
