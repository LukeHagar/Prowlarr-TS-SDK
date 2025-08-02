# IndexerProxy
(*indexerProxy*)

## Overview

### Available Operations

* [getApiV1IndexerproxyId](#getapiv1indexerproxyid)
* [putApiV1IndexerproxyId](#putapiv1indexerproxyid)
* [deleteApiV1IndexerproxyId](#deleteapiv1indexerproxyid)
* [getApiV1Indexerproxy](#getapiv1indexerproxy)
* [postApiV1Indexerproxy](#postapiv1indexerproxy)
* [getApiV1IndexerproxySchema](#getapiv1indexerproxyschema)
* [postApiV1IndexerproxyTest](#postapiv1indexerproxytest)
* [postApiV1IndexerproxyTestall](#postapiv1indexerproxytestall)
* [postApiV1IndexerproxyActionName](#postapiv1indexerproxyactionname)

## getApiV1IndexerproxyId

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/indexerproxy/{id}" method="get" path="/api/v1/indexerproxy/{id}" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.indexerProxy.getApiV1IndexerproxyId({
    id: 624797,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyGetApiV1IndexerproxyId } from "prowlarr/funcs/indexerProxyGetApiV1IndexerproxyId.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyGetApiV1IndexerproxyId(prowlarr, {
    id: 624797,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indexerProxyGetApiV1IndexerproxyId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiV1IndexerproxyIdRequest](../../models/operations/getapiv1indexerproxyidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.IndexerProxyResource](../../models/indexerproxyresource.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## putApiV1IndexerproxyId

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/api/v1/indexerproxy/{id}" method="put" path="/api/v1/indexerproxy/{id}" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.indexerProxy.putApiV1IndexerproxyId({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyPutApiV1IndexerproxyId } from "prowlarr/funcs/indexerProxyPutApiV1IndexerproxyId.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyPutApiV1IndexerproxyId(prowlarr, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indexerProxyPutApiV1IndexerproxyId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutApiV1IndexerproxyIdRequest](../../models/operations/putapiv1indexerproxyidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.IndexerProxyResource](../../models/indexerproxyresource.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteApiV1IndexerproxyId

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/api/v1/indexerproxy/{id}" method="delete" path="/api/v1/indexerproxy/{id}" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.indexerProxy.deleteApiV1IndexerproxyId({
    id: 291937,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyDeleteApiV1IndexerproxyId } from "prowlarr/funcs/indexerProxyDeleteApiV1IndexerproxyId.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyDeleteApiV1IndexerproxyId(prowlarr, {
    id: 291937,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("indexerProxyDeleteApiV1IndexerproxyId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiV1IndexerproxyIdRequest](../../models/operations/deleteapiv1indexerproxyidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getApiV1Indexerproxy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/indexerproxy" method="get" path="/api/v1/indexerproxy" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.indexerProxy.getApiV1Indexerproxy();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyGetApiV1Indexerproxy } from "prowlarr/funcs/indexerProxyGetApiV1Indexerproxy.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyGetApiV1Indexerproxy(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indexerProxyGetApiV1Indexerproxy failed:", res.error);
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

**Promise\<[models.IndexerProxyResource[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1Indexerproxy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/indexerproxy" method="post" path="/api/v1/indexerproxy" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.indexerProxy.postApiV1Indexerproxy({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyPostApiV1Indexerproxy } from "prowlarr/funcs/indexerProxyPostApiV1Indexerproxy.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyPostApiV1Indexerproxy(prowlarr, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indexerProxyPostApiV1Indexerproxy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiV1IndexerproxyRequest](../../models/operations/postapiv1indexerproxyrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.IndexerProxyResource](../../models/indexerproxyresource.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getApiV1IndexerproxySchema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/api/v1/indexerproxy/schema" method="get" path="/api/v1/indexerproxy/schema" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.indexerProxy.getApiV1IndexerproxySchema();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyGetApiV1IndexerproxySchema } from "prowlarr/funcs/indexerProxyGetApiV1IndexerproxySchema.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyGetApiV1IndexerproxySchema(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indexerProxyGetApiV1IndexerproxySchema failed:", res.error);
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

**Promise\<[models.IndexerProxyResource[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1IndexerproxyTest

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/indexerproxy/test" method="post" path="/api/v1/indexerproxy/test" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.indexerProxy.postApiV1IndexerproxyTest({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyPostApiV1IndexerproxyTest } from "prowlarr/funcs/indexerProxyPostApiV1IndexerproxyTest.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyPostApiV1IndexerproxyTest(prowlarr, {});
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("indexerProxyPostApiV1IndexerproxyTest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiV1IndexerproxyTestRequest](../../models/operations/postapiv1indexerproxytestrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1IndexerproxyTestall

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/indexerproxy/testall" method="post" path="/api/v1/indexerproxy/testall" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.indexerProxy.postApiV1IndexerproxyTestall();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyPostApiV1IndexerproxyTestall } from "prowlarr/funcs/indexerProxyPostApiV1IndexerproxyTestall.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyPostApiV1IndexerproxyTestall(prowlarr);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("indexerProxyPostApiV1IndexerproxyTestall failed:", res.error);
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

## postApiV1IndexerproxyActionName

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/v1/indexerproxy/action/{name}" method="post" path="/api/v1/indexerproxy/action/{name}" -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.indexerProxy.postApiV1IndexerproxyActionName({
    name: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { indexerProxyPostApiV1IndexerproxyActionName } from "prowlarr/funcs/indexerProxyPostApiV1IndexerproxyActionName.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await indexerProxyPostApiV1IndexerproxyActionName(prowlarr, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("indexerProxyPostApiV1IndexerproxyActionName failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiV1IndexerproxyActionNameRequest](../../models/operations/postapiv1indexerproxyactionnamerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |