# LogFile
(*logFile*)

## Overview

### Available Operations

* [getApiV1LogFile](#getapiv1logfile)
* [getApiV1LogFileFilename](#getapiv1logfilefilename)

## getApiV1LogFile

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.logFile.getApiV1LogFile();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { logFileGetApiV1LogFile } from "prowlarr/funcs/logFileGetApiV1LogFile.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await logFileGetApiV1LogFile(prowlarr);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogFileResource[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getApiV1LogFileFilename

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.logFile.getApiV1LogFileFilename({
    filename: "example.file",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { logFileGetApiV1LogFileFilename } from "prowlarr/funcs/logFileGetApiV1LogFileFilename.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await logFileGetApiV1LogFileFilename(prowlarr, {
    filename: "example.file",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiV1LogFileFilenameRequest](../../models/operations/getapiv1logfilefilenamerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |