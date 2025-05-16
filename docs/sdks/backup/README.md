# Backup
(*backup*)

## Overview

### Available Operations

* [getApiV1SystemBackup](#getapiv1systembackup)
* [deleteApiV1SystemBackupId](#deleteapiv1systembackupid)
* [postApiV1SystemBackupRestoreId](#postapiv1systembackuprestoreid)
* [postApiV1SystemBackupRestoreUpload](#postapiv1systembackuprestoreupload)

## getApiV1SystemBackup

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.backup.getApiV1SystemBackup();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { backupGetApiV1SystemBackup } from "prowlarr/funcs/backupGetApiV1SystemBackup.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await backupGetApiV1SystemBackup(prowlarr);

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

**Promise\<[models.BackupResource[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteApiV1SystemBackupId

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.backup.deleteApiV1SystemBackupId({
    id: 305836,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { backupDeleteApiV1SystemBackupId } from "prowlarr/funcs/backupDeleteApiV1SystemBackupId.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await backupDeleteApiV1SystemBackupId(prowlarr, {
    id: 305836,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiV1SystemBackupIdRequest](../../models/operations/deleteapiv1systembackupidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1SystemBackupRestoreId

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.backup.postApiV1SystemBackupRestoreId({
    id: 246520,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { backupPostApiV1SystemBackupRestoreId } from "prowlarr/funcs/backupPostApiV1SystemBackupRestoreId.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await backupPostApiV1SystemBackupRestoreId(prowlarr, {
    id: 246520,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiV1SystemBackupRestoreIdRequest](../../models/operations/postapiv1systembackuprestoreidrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postApiV1SystemBackupRestoreUpload

### Example Usage

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  await prowlarr.backup.postApiV1SystemBackupRestoreUpload();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProwlarrCore } from "prowlarr/core.js";
import { backupPostApiV1SystemBackupRestoreUpload } from "prowlarr/funcs/backupPostApiV1SystemBackupRestoreUpload.js";

// Use `ProwlarrCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const prowlarr = new ProwlarrCore({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await backupPostApiV1SystemBackupRestoreUpload(prowlarr);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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