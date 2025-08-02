# LogResourcePagingResource

## Example Usage

```typescript
import { LogResourcePagingResource } from "prowlarr/models";

let value: LogResourcePagingResource = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `pageSize`                                         | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `sortKey`                                          | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `sortDirection`                                    | [models.SortDirection](../models/sortdirection.md) | :heavy_minus_sign:                                 | N/A                                                |
| `totalRecords`                                     | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `records`                                          | [models.LogResource](../models/logresource.md)[]   | :heavy_minus_sign:                                 | N/A                                                |