# GetApiV1HistoryRequest

## Example Usage

```typescript
import { GetApiV1HistoryRequest } from "prowlarr/models/operations";

let value: GetApiV1HistoryRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `pageSize`                                            | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `sortKey`                                             | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `sortDirection`                                       | [models.SortDirection](../../models/sortdirection.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `eventType`                                           | *number*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `successful`                                          | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `downloadId`                                          | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `indexerIds`                                          | *number*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |