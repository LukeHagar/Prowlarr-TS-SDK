/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appProfileDeleteApiV1AppprofileId } from "../../funcs/appProfileDeleteApiV1AppprofileId.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteApiV1AppprofileIdRequest$inboundSchema,
};

export const tool$appProfileDeleteApiV1AppprofileId: ToolDefinition<
  typeof args
> = {
  name: "app-profile-delete-api-v1-appprofile-id",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appProfileDeleteApiV1AppprofileId(
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

    return formatResult(void 0, apiCall);
  },
};
