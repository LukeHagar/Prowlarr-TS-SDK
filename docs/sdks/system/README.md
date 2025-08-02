# System
(*system*)

## Overview

### Available Operations

* [getApiV1SystemStatus](#getapiv1systemstatus)
* [getApiV1SystemRoutes](#getapiv1systemroutes)
* [getApiV1SystemRoutesDuplicate](#getapiv1systemroutesduplicate)
* [postApiV1SystemShutdown](#postapiv1systemshutdown)
* [postApiV1SystemRestart](#postapiv1systemrestart)

## getApiV1SystemStatus

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/system/status" method="get" path="/api/v1/system/status" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.system.getApiV1SystemStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { systemGetApiV1SystemStatus } from "prowlarr/funcs/systemGetApiV1SystemStatus.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await systemGetApiV1SystemStatus(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemGetApiV1SystemStatus failed:", res.error);
  }
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

**Promise\<[models.SystemResource](../../models/systemresource.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getApiV1SystemRoutes

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/system/routes" method="get" path="/api/v1/system/routes" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.system.getApiV1SystemRoutes();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { systemGetApiV1SystemRoutes } from "prowlarr/funcs/systemGetApiV1SystemRoutes.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await systemGetApiV1SystemRoutes(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("systemGetApiV1SystemRoutes failed:", res.error);
  }
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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getApiV1SystemRoutesDuplicate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/system/routes/duplicate" method="get" path="/api/v1/system/routes/duplicate" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.system.getApiV1SystemRoutesDuplicate();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { systemGetApiV1SystemRoutesDuplicate } from "prowlarr/funcs/systemGetApiV1SystemRoutesDuplicate.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await systemGetApiV1SystemRoutesDuplicate(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("systemGetApiV1SystemRoutesDuplicate failed:", res.error);
  }
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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1SystemShutdown

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/system/shutdown" method="post" path="/api/v1/system/shutdown" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.system.postApiV1SystemShutdown();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { systemPostApiV1SystemShutdown } from "prowlarr/funcs/systemPostApiV1SystemShutdown.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await systemPostApiV1SystemShutdown(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("systemPostApiV1SystemShutdown failed:", res.error);
  }
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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1SystemRestart

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/system/restart" method="post" path="/api/v1/system/restart" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.system.postApiV1SystemRestart();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { systemPostApiV1SystemRestart } from "prowlarr/funcs/systemPostApiV1SystemRestart.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await systemPostApiV1SystemRestart(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("systemPostApiV1SystemRestart failed:", res.error);
  }
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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |