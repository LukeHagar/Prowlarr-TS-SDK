# NotificationResource

## Example Usage

```typescript
import { NotificationResource } from "prowlarr";

let value: NotificationResource = {};
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
| `presets`                                                          | [models.NotificationResource](../models/notificationresource.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `link`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `onGrab`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `onHealthIssue`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `onHealthRestored`                                                 | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `onApplicationUpdate`                                              | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsOnGrab`                                                   | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `includeManualGrabs`                                               | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsOnHealthIssue`                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsOnHealthRestored`                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `includeHealthWarnings`                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsOnApplicationUpdate`                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `testCommand`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |