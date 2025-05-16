# HistoryResourcePagingResource

## Example Usage

```typescript
import { HistoryResourcePagingResource } from "prowlarr";

let value: HistoryResourcePagingResource = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `sortKey`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `sortDirection`                                          | [models.SortDirection](../models/sortdirection.md)       | :heavy_minus_sign:                                       | N/A                                                      |
| `totalRecords`                                           | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `records`                                                | [models.HistoryResource](../models/historyresource.md)[] | :heavy_minus_sign:                                       | N/A                                                      |