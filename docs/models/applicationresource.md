# ApplicationResource

## Example Usage

```typescript
import { ApplicationResource } from "prowlarr";

let value: ApplicationResource = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `fields`                                                         | [models.Field](../models/field.md)[]                             | :heavy_minus_sign:                                               | N/A                                                              |
| `implementationName`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `implementation`                                                 | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `configContract`                                                 | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `infoLink`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `message`                                                        | [models.ProviderMessage](../models/providermessage.md)           | :heavy_minus_sign:                                               | N/A                                                              |
| `tags`                                                           | *number*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `presets`                                                        | [models.ApplicationResource](../models/applicationresource.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `syncLevel`                                                      | [models.ApplicationSyncLevel](../models/applicationsynclevel.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `testCommand`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |