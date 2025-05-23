/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationPostApiV1NotificationTest } from "../../funcs/notificationPostApiV1NotificationTest.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostApiV1NotificationTestRequest$inboundSchema,
};

export const tool$notificationPostApiV1NotificationTest: ToolDefinition<
  typeof args
> = {
  name: "notification-post-api-v1-notification-test",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await notificationPostApiV1NotificationTest(
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
