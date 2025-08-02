# IndexerStatsResource

## Example Usage

```typescript
import { IndexerStatsResource } from "prowlarr/models";

let value: IndexerStatsResource = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `indexers`                                                       | [models.IndexerStatistics](../models/indexerstatistics.md)[]     | :heavy_minus_sign:                                               | N/A                                                              |
| `userAgents`                                                     | [models.UserAgentStatistics](../models/useragentstatistics.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `hosts`                                                          | [models.HostStatistics](../models/hoststatistics.md)[]           | :heavy_minus_sign:                                               | N/A                                                              |