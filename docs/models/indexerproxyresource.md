# IndexerProxyResource

## Example Usage

```typescript
import { IndexerProxyResource } from "prowlarr";

let value: IndexerProxyResource = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `fields`                                                           | [models.Field](../models/field.md)[]                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `implementationName`                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `implementation`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `configContract`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `infoLink`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `message`                                                          | [models.ProviderMessage](../models/providermessage.md)             | :heavy_minus_sign:                                                 | N/A                                                                |
| `tags`                                                             | *number*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `presets`                                                          | [models.IndexerProxyResource](../models/indexerproxyresource.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `link`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `onHealthIssue`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsOnHealthIssue`                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `includeHealthWarnings`                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `testCommand`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |