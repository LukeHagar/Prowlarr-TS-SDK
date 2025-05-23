/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { systemGetApiV1SystemRoutes } from "../../funcs/systemGetApiV1SystemRoutes.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$systemGetApiV1SystemRoutes: ToolDefinition = {
  name: "system-get-api-v1-system-routes",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await systemGetApiV1SystemRoutes(
      client,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
