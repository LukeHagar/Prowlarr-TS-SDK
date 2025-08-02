# CommandInput

## Example Usage

```typescript
import { CommandInput } from "prowlarr/models";

let value: CommandInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sendUpdatesToClient`                                                                         | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastExecutionTime`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastStartTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trigger`                                                                                     | [models.CommandTrigger](../models/commandtrigger.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `suppressMessages`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `clientUserAgent`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |