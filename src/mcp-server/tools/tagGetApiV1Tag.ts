/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagGetApiV1Tag } from "../../funcs/tagGetApiV1Tag.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$tagGetApiV1Tag: ToolDefinition = {
  name: "tag-get-api-v1-tag",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await tagGetApiV1Tag(
      client,
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
