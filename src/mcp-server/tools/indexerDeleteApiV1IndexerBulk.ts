/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { indexerDeleteApiV1IndexerBulk } from "../../funcs/indexerDeleteApiV1IndexerBulk.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.IndexerBulkResource$inboundSchema.optional(),
};

export const tool$indexerDeleteApiV1IndexerBulk: ToolDefinition<typeof args> = {
  name: "indexer-delete-api-v1-indexer-bulk",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await indexerDeleteApiV1IndexerBulk(
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
