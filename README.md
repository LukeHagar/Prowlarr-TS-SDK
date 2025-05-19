# Prowlarr-TS-SDK

<!-- Start Summary [summary] -->
## Summary

Prowlarr: Prowlarr API docs
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Prowlarr-TS-SDK](#prowlarr-ts-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/LukeHagar/Prowlarr-TS-SDK
```

### PNPM

```bash
pnpm add https://github.com/LukeHagar/Prowlarr-TS-SDK
```

### Bun

```bash
bun add https://github.com/LukeHagar/Prowlarr-TS-SDK
```

### Yarn

```bash
yarn add https://github.com/LukeHagar/Prowlarr-TS-SDK zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Prowlarr": {
      "command": "npx",
      "args": [
        "-y", "--package", "prowlarr",
        "--",
        "mcp", "start",
        "--x-api-key", "...",
        "--apikey", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Prowlarr": {
      "command": "npx",
      "args": [
        "-y", "--package", "prowlarr",
        "--",
        "mcp", "start",
        "--x-api-key", "...",
        "--apikey", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package prowlarr -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name      | Type   | Scheme  | Environment Variable |
| --------- | ------ | ------- | -------------------- |
| `xApiKey` | apiKey | API key | `PROWLARR_X_API_KEY` |
| `apikey`  | apiKey | API key | `PROWLARR_APIKEY`    |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiInfo](docs/sdks/apiinfo/README.md)

* [getApi](docs/sdks/apiinfo/README.md#getapi)

### [application](docs/sdks/application/README.md)

* [getApiV1ApplicationsId](docs/sdks/application/README.md#getapiv1applicationsid)
* [putApiV1ApplicationsId](docs/sdks/application/README.md#putapiv1applicationsid)
* [deleteApiV1ApplicationsId](docs/sdks/application/README.md#deleteapiv1applicationsid)
* [getApiV1Applications](docs/sdks/application/README.md#getapiv1applications)
* [postApiV1Applications](docs/sdks/application/README.md#postapiv1applications)
* [putApiV1ApplicationsBulk](docs/sdks/application/README.md#putapiv1applicationsbulk)
* [deleteApiV1ApplicationsBulk](docs/sdks/application/README.md#deleteapiv1applicationsbulk)
* [getApiV1ApplicationsSchema](docs/sdks/application/README.md#getapiv1applicationsschema)
* [postApiV1ApplicationsTest](docs/sdks/application/README.md#postapiv1applicationstest)
* [postApiV1ApplicationsTestall](docs/sdks/application/README.md#postapiv1applicationstestall)
* [postApiV1ApplicationsActionName](docs/sdks/application/README.md#postapiv1applicationsactionname)

### [appProfile](docs/sdks/appprofile/README.md)

* [postApiV1Appprofile](docs/sdks/appprofile/README.md#postapiv1appprofile)
* [getApiV1Appprofile](docs/sdks/appprofile/README.md#getapiv1appprofile)
* [deleteApiV1AppprofileId](docs/sdks/appprofile/README.md#deleteapiv1appprofileid)
* [putApiV1AppprofileId](docs/sdks/appprofile/README.md#putapiv1appprofileid)
* [getApiV1AppprofileId](docs/sdks/appprofile/README.md#getapiv1appprofileid)
* [getApiV1AppprofileSchema](docs/sdks/appprofile/README.md#getapiv1appprofileschema)

### [authentication](docs/sdks/authentication/README.md)

* [getLogout](docs/sdks/authentication/README.md#getlogout)

### [backup](docs/sdks/backup/README.md)

* [getApiV1SystemBackup](docs/sdks/backup/README.md#getapiv1systembackup)
* [deleteApiV1SystemBackupId](docs/sdks/backup/README.md#deleteapiv1systembackupid)
* [postApiV1SystemBackupRestoreId](docs/sdks/backup/README.md#postapiv1systembackuprestoreid)
* [postApiV1SystemBackupRestoreUpload](docs/sdks/backup/README.md#postapiv1systembackuprestoreupload)

### [command](docs/sdks/command/README.md)

* [getApiV1CommandId](docs/sdks/command/README.md#getapiv1commandid)
* [deleteApiV1CommandId](docs/sdks/command/README.md#deleteapiv1commandid)
* [postApiV1Command](docs/sdks/command/README.md#postapiv1command)
* [getApiV1Command](docs/sdks/command/README.md#getapiv1command)

### [customFilter](docs/sdks/customfilter/README.md)

* [getApiV1CustomfilterId](docs/sdks/customfilter/README.md#getapiv1customfilterid)
* [putApiV1CustomfilterId](docs/sdks/customfilter/README.md#putapiv1customfilterid)
* [deleteApiV1CustomfilterId](docs/sdks/customfilter/README.md#deleteapiv1customfilterid)
* [getApiV1Customfilter](docs/sdks/customfilter/README.md#getapiv1customfilter)
* [postApiV1Customfilter](docs/sdks/customfilter/README.md#postapiv1customfilter)

### [developmentConfig](docs/sdks/developmentconfig/README.md)

* [putApiV1ConfigDevelopmentId](docs/sdks/developmentconfig/README.md#putapiv1configdevelopmentid)
* [getApiV1ConfigDevelopmentId](docs/sdks/developmentconfig/README.md#getapiv1configdevelopmentid)
* [getApiV1ConfigDevelopment](docs/sdks/developmentconfig/README.md#getapiv1configdevelopment)

### [downloadClient](docs/sdks/downloadclient/README.md)

* [getApiV1DownloadclientId](docs/sdks/downloadclient/README.md#getapiv1downloadclientid)
* [putApiV1DownloadclientId](docs/sdks/downloadclient/README.md#putapiv1downloadclientid)
* [deleteApiV1DownloadclientId](docs/sdks/downloadclient/README.md#deleteapiv1downloadclientid)
* [getApiV1Downloadclient](docs/sdks/downloadclient/README.md#getapiv1downloadclient)
* [postApiV1Downloadclient](docs/sdks/downloadclient/README.md#postapiv1downloadclient)
* [putApiV1DownloadclientBulk](docs/sdks/downloadclient/README.md#putapiv1downloadclientbulk)
* [deleteApiV1DownloadclientBulk](docs/sdks/downloadclient/README.md#deleteapiv1downloadclientbulk)
* [getApiV1DownloadclientSchema](docs/sdks/downloadclient/README.md#getapiv1downloadclientschema)
* [postApiV1DownloadclientTest](docs/sdks/downloadclient/README.md#postapiv1downloadclienttest)
* [postApiV1DownloadclientTestall](docs/sdks/downloadclient/README.md#postapiv1downloadclienttestall)
* [postApiV1DownloadclientActionName](docs/sdks/downloadclient/README.md#postapiv1downloadclientactionname)

### [downloadClientConfig](docs/sdks/downloadclientconfig/README.md)

* [getApiV1ConfigDownloadclientId](docs/sdks/downloadclientconfig/README.md#getapiv1configdownloadclientid)
* [putApiV1ConfigDownloadclientId](docs/sdks/downloadclientconfig/README.md#putapiv1configdownloadclientid)
* [getApiV1ConfigDownloadclient](docs/sdks/downloadclientconfig/README.md#getapiv1configdownloadclient)

### [fileSystem](docs/sdks/filesystem/README.md)

* [getApiV1Filesystem](docs/sdks/filesystem/README.md#getapiv1filesystem)
* [getApiV1FilesystemType](docs/sdks/filesystem/README.md#getapiv1filesystemtype)

### [health](docs/sdks/health/README.md)

* [getApiV1Health](docs/sdks/health/README.md#getapiv1health)

### [history](docs/sdks/history/README.md)

* [getApiV1History](docs/sdks/history/README.md#getapiv1history)
* [getApiV1HistorySince](docs/sdks/history/README.md#getapiv1historysince)
* [getApiV1HistoryIndexer](docs/sdks/history/README.md#getapiv1historyindexer)

### [hostConfig](docs/sdks/hostconfig/README.md)

* [getApiV1ConfigHostId](docs/sdks/hostconfig/README.md#getapiv1confighostid)
* [putApiV1ConfigHostId](docs/sdks/hostconfig/README.md#putapiv1confighostid)
* [getApiV1ConfigHost](docs/sdks/hostconfig/README.md#getapiv1confighost)

### [indexer](docs/sdks/indexer/README.md)

* [getApiV1IndexerId](docs/sdks/indexer/README.md#getapiv1indexerid)
* [putApiV1IndexerId](docs/sdks/indexer/README.md#putapiv1indexerid)
* [deleteApiV1IndexerId](docs/sdks/indexer/README.md#deleteapiv1indexerid)
* [getApiV1Indexer](docs/sdks/indexer/README.md#getapiv1indexer)
* [postApiV1Indexer](docs/sdks/indexer/README.md#postapiv1indexer)
* [putApiV1IndexerBulk](docs/sdks/indexer/README.md#putapiv1indexerbulk)
* [deleteApiV1IndexerBulk](docs/sdks/indexer/README.md#deleteapiv1indexerbulk)
* [getApiV1IndexerSchema](docs/sdks/indexer/README.md#getapiv1indexerschema)
* [postApiV1IndexerTest](docs/sdks/indexer/README.md#postapiv1indexertest)
* [postApiV1IndexerTestall](docs/sdks/indexer/README.md#postapiv1indexertestall)
* [postApiV1IndexerActionName](docs/sdks/indexer/README.md#postapiv1indexeractionname)

### [indexerDefaultCategories](docs/sdks/indexerdefaultcategories/README.md)

* [getApiV1IndexerCategories](docs/sdks/indexerdefaultcategories/README.md#getapiv1indexercategories)

### [indexerProxy](docs/sdks/indexerproxy/README.md)

* [getApiV1IndexerproxyId](docs/sdks/indexerproxy/README.md#getapiv1indexerproxyid)
* [putApiV1IndexerproxyId](docs/sdks/indexerproxy/README.md#putapiv1indexerproxyid)
* [deleteApiV1IndexerproxyId](docs/sdks/indexerproxy/README.md#deleteapiv1indexerproxyid)
* [getApiV1Indexerproxy](docs/sdks/indexerproxy/README.md#getapiv1indexerproxy)
* [postApiV1Indexerproxy](docs/sdks/indexerproxy/README.md#postapiv1indexerproxy)
* [getApiV1IndexerproxySchema](docs/sdks/indexerproxy/README.md#getapiv1indexerproxyschema)
* [postApiV1IndexerproxyTest](docs/sdks/indexerproxy/README.md#postapiv1indexerproxytest)
* [postApiV1IndexerproxyTestall](docs/sdks/indexerproxy/README.md#postapiv1indexerproxytestall)
* [postApiV1IndexerproxyActionName](docs/sdks/indexerproxy/README.md#postapiv1indexerproxyactionname)

### [indexerStats](docs/sdks/indexerstats/README.md)

* [getApiV1Indexerstats](docs/sdks/indexerstats/README.md#getapiv1indexerstats)

### [indexerStatus](docs/sdks/indexerstatus/README.md)

* [getApiV1Indexerstatus](docs/sdks/indexerstatus/README.md#getapiv1indexerstatus)

### [localization](docs/sdks/localization/README.md)

* [getApiV1Localization](docs/sdks/localization/README.md#getapiv1localization)
* [getApiV1LocalizationOptions](docs/sdks/localization/README.md#getapiv1localizationoptions)

### [log](docs/sdks/log/README.md)

* [getApiV1Log](docs/sdks/log/README.md#getapiv1log)

### [logFile](docs/sdks/logfile/README.md)

* [getApiV1LogFile](docs/sdks/logfile/README.md#getapiv1logfile)
* [getApiV1LogFileFilename](docs/sdks/logfile/README.md#getapiv1logfilefilename)

### [newznab](docs/sdks/newznab/README.md)

* [getApiV1IndexerIdNewznab](docs/sdks/newznab/README.md#getapiv1indexeridnewznab)
* [getIdApi](docs/sdks/newznab/README.md#getidapi)
* [getApiV1IndexerIdDownload](docs/sdks/newznab/README.md#getapiv1indexeriddownload)
* [getIdDownload](docs/sdks/newznab/README.md#getiddownload)

### [notification](docs/sdks/notification/README.md)

* [getApiV1NotificationId](docs/sdks/notification/README.md#getapiv1notificationid)
* [putApiV1NotificationId](docs/sdks/notification/README.md#putapiv1notificationid)
* [deleteApiV1NotificationId](docs/sdks/notification/README.md#deleteapiv1notificationid)
* [getApiV1Notification](docs/sdks/notification/README.md#getapiv1notification)
* [postApiV1Notification](docs/sdks/notification/README.md#postapiv1notification)
* [getApiV1NotificationSchema](docs/sdks/notification/README.md#getapiv1notificationschema)
* [postApiV1NotificationTest](docs/sdks/notification/README.md#postapiv1notificationtest)
* [postApiV1NotificationTestall](docs/sdks/notification/README.md#postapiv1notificationtestall)
* [postApiV1NotificationActionName](docs/sdks/notification/README.md#postapiv1notificationactionname)

### [ping](docs/sdks/ping/README.md)

* [getPing](docs/sdks/ping/README.md#getping)
* [headPing](docs/sdks/ping/README.md#headping)


### [search](docs/sdks/search/README.md)

* [postApiV1Search](docs/sdks/search/README.md#postapiv1search)
* [getApiV1Search](docs/sdks/search/README.md#getapiv1search)
* [postApiV1SearchBulk](docs/sdks/search/README.md#postapiv1searchbulk)

### [staticResource](docs/sdks/staticresource/README.md)

* [getLogin](docs/sdks/staticresource/README.md#getlogin)
* [getContentPath](docs/sdks/staticresource/README.md#getcontentpath)
* [get](docs/sdks/staticresource/README.md#get)
* [getPath](docs/sdks/staticresource/README.md#getpath)

### [system](docs/sdks/system/README.md)

* [getApiV1SystemStatus](docs/sdks/system/README.md#getapiv1systemstatus)
* [getApiV1SystemRoutes](docs/sdks/system/README.md#getapiv1systemroutes)
* [getApiV1SystemRoutesDuplicate](docs/sdks/system/README.md#getapiv1systemroutesduplicate)
* [postApiV1SystemShutdown](docs/sdks/system/README.md#postapiv1systemshutdown)
* [postApiV1SystemRestart](docs/sdks/system/README.md#postapiv1systemrestart)

### [tag](docs/sdks/tag/README.md)

* [getApiV1TagId](docs/sdks/tag/README.md#getapiv1tagid)
* [putApiV1TagId](docs/sdks/tag/README.md#putapiv1tagid)
* [deleteApiV1TagId](docs/sdks/tag/README.md#deleteapiv1tagid)
* [getApiV1Tag](docs/sdks/tag/README.md#getapiv1tag)
* [postApiV1Tag](docs/sdks/tag/README.md#postapiv1tag)

### [tagDetails](docs/sdks/tagdetails/README.md)

* [getApiV1TagDetailId](docs/sdks/tagdetails/README.md#getapiv1tagdetailid)
* [getApiV1TagDetail](docs/sdks/tagdetails/README.md#getapiv1tagdetail)

### [task](docs/sdks/task/README.md)

* [getApiV1SystemTask](docs/sdks/task/README.md#getapiv1systemtask)
* [getApiV1SystemTaskId](docs/sdks/task/README.md#getapiv1systemtaskid)

### [uiConfig](docs/sdks/uiconfig/README.md)

* [putApiV1ConfigUiId](docs/sdks/uiconfig/README.md#putapiv1configuiid)
* [getApiV1ConfigUiId](docs/sdks/uiconfig/README.md#getapiv1configuiid)
* [getApiV1ConfigUi](docs/sdks/uiconfig/README.md#getapiv1configui)

### [update](docs/sdks/update/README.md)

* [getApiV1Update](docs/sdks/update/README.md#getapiv1update)

### [updateLogFile](docs/sdks/updatelogfile/README.md)

* [getApiV1LogFileUpdate](docs/sdks/updatelogfile/README.md#getapiv1logfileupdate)
* [getApiV1LogFileUpdateFilename](docs/sdks/updatelogfile/README.md#getapiv1logfileupdatefilename)

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiInfoGetApi`](docs/sdks/apiinfo/README.md#getapi)
- [`applicationDeleteApiV1ApplicationsBulk`](docs/sdks/application/README.md#deleteapiv1applicationsbulk)
- [`applicationDeleteApiV1ApplicationsId`](docs/sdks/application/README.md#deleteapiv1applicationsid)
- [`applicationGetApiV1Applications`](docs/sdks/application/README.md#getapiv1applications)
- [`applicationGetApiV1ApplicationsId`](docs/sdks/application/README.md#getapiv1applicationsid)
- [`applicationGetApiV1ApplicationsSchema`](docs/sdks/application/README.md#getapiv1applicationsschema)
- [`applicationPostApiV1Applications`](docs/sdks/application/README.md#postapiv1applications)
- [`applicationPostApiV1ApplicationsActionName`](docs/sdks/application/README.md#postapiv1applicationsactionname)
- [`applicationPostApiV1ApplicationsTest`](docs/sdks/application/README.md#postapiv1applicationstest)
- [`applicationPostApiV1ApplicationsTestall`](docs/sdks/application/README.md#postapiv1applicationstestall)
- [`applicationPutApiV1ApplicationsBulk`](docs/sdks/application/README.md#putapiv1applicationsbulk)
- [`applicationPutApiV1ApplicationsId`](docs/sdks/application/README.md#putapiv1applicationsid)
- [`appProfileDeleteApiV1AppprofileId`](docs/sdks/appprofile/README.md#deleteapiv1appprofileid)
- [`appProfileGetApiV1Appprofile`](docs/sdks/appprofile/README.md#getapiv1appprofile)
- [`appProfileGetApiV1AppprofileId`](docs/sdks/appprofile/README.md#getapiv1appprofileid)
- [`appProfileGetApiV1AppprofileSchema`](docs/sdks/appprofile/README.md#getapiv1appprofileschema)
- [`appProfilePostApiV1Appprofile`](docs/sdks/appprofile/README.md#postapiv1appprofile)
- [`appProfilePutApiV1AppprofileId`](docs/sdks/appprofile/README.md#putapiv1appprofileid)
- [`authenticationGetLogout`](docs/sdks/authentication/README.md#getlogout)
- [`backupDeleteApiV1SystemBackupId`](docs/sdks/backup/README.md#deleteapiv1systembackupid)
- [`backupGetApiV1SystemBackup`](docs/sdks/backup/README.md#getapiv1systembackup)
- [`backupPostApiV1SystemBackupRestoreId`](docs/sdks/backup/README.md#postapiv1systembackuprestoreid)
- [`backupPostApiV1SystemBackupRestoreUpload`](docs/sdks/backup/README.md#postapiv1systembackuprestoreupload)
- [`commandDeleteApiV1CommandId`](docs/sdks/command/README.md#deleteapiv1commandid)
- [`commandGetApiV1Command`](docs/sdks/command/README.md#getapiv1command)
- [`commandGetApiV1CommandId`](docs/sdks/command/README.md#getapiv1commandid)
- [`commandPostApiV1Command`](docs/sdks/command/README.md#postapiv1command)
- [`customFilterDeleteApiV1CustomfilterId`](docs/sdks/customfilter/README.md#deleteapiv1customfilterid)
- [`customFilterGetApiV1Customfilter`](docs/sdks/customfilter/README.md#getapiv1customfilter)
- [`customFilterGetApiV1CustomfilterId`](docs/sdks/customfilter/README.md#getapiv1customfilterid)
- [`customFilterPostApiV1Customfilter`](docs/sdks/customfilter/README.md#postapiv1customfilter)
- [`customFilterPutApiV1CustomfilterId`](docs/sdks/customfilter/README.md#putapiv1customfilterid)
- [`developmentConfigGetApiV1ConfigDevelopment`](docs/sdks/developmentconfig/README.md#getapiv1configdevelopment)
- [`developmentConfigGetApiV1ConfigDevelopmentId`](docs/sdks/developmentconfig/README.md#getapiv1configdevelopmentid)
- [`developmentConfigPutApiV1ConfigDevelopmentId`](docs/sdks/developmentconfig/README.md#putapiv1configdevelopmentid)
- [`downloadClientConfigGetApiV1ConfigDownloadclient`](docs/sdks/downloadclientconfig/README.md#getapiv1configdownloadclient)
- [`downloadClientConfigGetApiV1ConfigDownloadclientId`](docs/sdks/downloadclientconfig/README.md#getapiv1configdownloadclientid)
- [`downloadClientConfigPutApiV1ConfigDownloadclientId`](docs/sdks/downloadclientconfig/README.md#putapiv1configdownloadclientid)
- [`downloadClientDeleteApiV1DownloadclientBulk`](docs/sdks/downloadclient/README.md#deleteapiv1downloadclientbulk)
- [`downloadClientDeleteApiV1DownloadclientId`](docs/sdks/downloadclient/README.md#deleteapiv1downloadclientid)
- [`downloadClientGetApiV1Downloadclient`](docs/sdks/downloadclient/README.md#getapiv1downloadclient)
- [`downloadClientGetApiV1DownloadclientId`](docs/sdks/downloadclient/README.md#getapiv1downloadclientid)
- [`downloadClientGetApiV1DownloadclientSchema`](docs/sdks/downloadclient/README.md#getapiv1downloadclientschema)
- [`downloadClientPostApiV1Downloadclient`](docs/sdks/downloadclient/README.md#postapiv1downloadclient)
- [`downloadClientPostApiV1DownloadclientActionName`](docs/sdks/downloadclient/README.md#postapiv1downloadclientactionname)
- [`downloadClientPostApiV1DownloadclientTest`](docs/sdks/downloadclient/README.md#postapiv1downloadclienttest)
- [`downloadClientPostApiV1DownloadclientTestall`](docs/sdks/downloadclient/README.md#postapiv1downloadclienttestall)
- [`downloadClientPutApiV1DownloadclientBulk`](docs/sdks/downloadclient/README.md#putapiv1downloadclientbulk)
- [`downloadClientPutApiV1DownloadclientId`](docs/sdks/downloadclient/README.md#putapiv1downloadclientid)
- [`fileSystemGetApiV1Filesystem`](docs/sdks/filesystem/README.md#getapiv1filesystem)
- [`fileSystemGetApiV1FilesystemType`](docs/sdks/filesystem/README.md#getapiv1filesystemtype)
- [`healthGetApiV1Health`](docs/sdks/health/README.md#getapiv1health)
- [`historyGetApiV1History`](docs/sdks/history/README.md#getapiv1history)
- [`historyGetApiV1HistoryIndexer`](docs/sdks/history/README.md#getapiv1historyindexer)
- [`historyGetApiV1HistorySince`](docs/sdks/history/README.md#getapiv1historysince)
- [`hostConfigGetApiV1ConfigHost`](docs/sdks/hostconfig/README.md#getapiv1confighost)
- [`hostConfigGetApiV1ConfigHostId`](docs/sdks/hostconfig/README.md#getapiv1confighostid)
- [`hostConfigPutApiV1ConfigHostId`](docs/sdks/hostconfig/README.md#putapiv1confighostid)
- [`indexerDefaultCategoriesGetApiV1IndexerCategories`](docs/sdks/indexerdefaultcategories/README.md#getapiv1indexercategories)
- [`indexerDeleteApiV1IndexerBulk`](docs/sdks/indexer/README.md#deleteapiv1indexerbulk)
- [`indexerDeleteApiV1IndexerId`](docs/sdks/indexer/README.md#deleteapiv1indexerid)
- [`indexerGetApiV1Indexer`](docs/sdks/indexer/README.md#getapiv1indexer)
- [`indexerGetApiV1IndexerId`](docs/sdks/indexer/README.md#getapiv1indexerid)
- [`indexerGetApiV1IndexerSchema`](docs/sdks/indexer/README.md#getapiv1indexerschema)
- [`indexerPostApiV1Indexer`](docs/sdks/indexer/README.md#postapiv1indexer)
- [`indexerPostApiV1IndexerActionName`](docs/sdks/indexer/README.md#postapiv1indexeractionname)
- [`indexerPostApiV1IndexerTest`](docs/sdks/indexer/README.md#postapiv1indexertest)
- [`indexerPostApiV1IndexerTestall`](docs/sdks/indexer/README.md#postapiv1indexertestall)
- [`indexerProxyDeleteApiV1IndexerproxyId`](docs/sdks/indexerproxy/README.md#deleteapiv1indexerproxyid)
- [`indexerProxyGetApiV1Indexerproxy`](docs/sdks/indexerproxy/README.md#getapiv1indexerproxy)
- [`indexerProxyGetApiV1IndexerproxyId`](docs/sdks/indexerproxy/README.md#getapiv1indexerproxyid)
- [`indexerProxyGetApiV1IndexerproxySchema`](docs/sdks/indexerproxy/README.md#getapiv1indexerproxyschema)
- [`indexerProxyPostApiV1Indexerproxy`](docs/sdks/indexerproxy/README.md#postapiv1indexerproxy)
- [`indexerProxyPostApiV1IndexerproxyActionName`](docs/sdks/indexerproxy/README.md#postapiv1indexerproxyactionname)
- [`indexerProxyPostApiV1IndexerproxyTest`](docs/sdks/indexerproxy/README.md#postapiv1indexerproxytest)
- [`indexerProxyPostApiV1IndexerproxyTestall`](docs/sdks/indexerproxy/README.md#postapiv1indexerproxytestall)
- [`indexerProxyPutApiV1IndexerproxyId`](docs/sdks/indexerproxy/README.md#putapiv1indexerproxyid)
- [`indexerPutApiV1IndexerBulk`](docs/sdks/indexer/README.md#putapiv1indexerbulk)
- [`indexerPutApiV1IndexerId`](docs/sdks/indexer/README.md#putapiv1indexerid)
- [`indexerStatsGetApiV1Indexerstats`](docs/sdks/indexerstats/README.md#getapiv1indexerstats)
- [`indexerStatusGetApiV1Indexerstatus`](docs/sdks/indexerstatus/README.md#getapiv1indexerstatus)
- [`localizationGetApiV1Localization`](docs/sdks/localization/README.md#getapiv1localization)
- [`localizationGetApiV1LocalizationOptions`](docs/sdks/localization/README.md#getapiv1localizationoptions)
- [`logFileGetApiV1LogFile`](docs/sdks/logfile/README.md#getapiv1logfile)
- [`logFileGetApiV1LogFileFilename`](docs/sdks/logfile/README.md#getapiv1logfilefilename)
- [`logGetApiV1Log`](docs/sdks/log/README.md#getapiv1log)
- [`newznabGetApiV1IndexerIdDownload`](docs/sdks/newznab/README.md#getapiv1indexeriddownload)
- [`newznabGetApiV1IndexerIdNewznab`](docs/sdks/newznab/README.md#getapiv1indexeridnewznab)
- [`newznabGetIdApi`](docs/sdks/newznab/README.md#getidapi)
- [`newznabGetIdDownload`](docs/sdks/newznab/README.md#getiddownload)
- [`notificationDeleteApiV1NotificationId`](docs/sdks/notification/README.md#deleteapiv1notificationid)
- [`notificationGetApiV1Notification`](docs/sdks/notification/README.md#getapiv1notification)
- [`notificationGetApiV1NotificationId`](docs/sdks/notification/README.md#getapiv1notificationid)
- [`notificationGetApiV1NotificationSchema`](docs/sdks/notification/README.md#getapiv1notificationschema)
- [`notificationPostApiV1Notification`](docs/sdks/notification/README.md#postapiv1notification)
- [`notificationPostApiV1NotificationActionName`](docs/sdks/notification/README.md#postapiv1notificationactionname)
- [`notificationPostApiV1NotificationTest`](docs/sdks/notification/README.md#postapiv1notificationtest)
- [`notificationPostApiV1NotificationTestall`](docs/sdks/notification/README.md#postapiv1notificationtestall)
- [`notificationPutApiV1NotificationId`](docs/sdks/notification/README.md#putapiv1notificationid)
- [`pingGetPing`](docs/sdks/ping/README.md#getping)
- [`pingHeadPing`](docs/sdks/ping/README.md#headping)
- [`searchGetApiV1Search`](docs/sdks/search/README.md#getapiv1search)
- [`searchPostApiV1Search`](docs/sdks/search/README.md#postapiv1search)
- [`searchPostApiV1SearchBulk`](docs/sdks/search/README.md#postapiv1searchbulk)
- [`staticResourceGet`](docs/sdks/staticresource/README.md#get)
- [`staticResourceGetContentPath`](docs/sdks/staticresource/README.md#getcontentpath)
- [`staticResourceGetLogin`](docs/sdks/staticresource/README.md#getlogin)
- [`staticResourceGetPath`](docs/sdks/staticresource/README.md#getpath)
- [`systemGetApiV1SystemRoutes`](docs/sdks/system/README.md#getapiv1systemroutes)
- [`systemGetApiV1SystemRoutesDuplicate`](docs/sdks/system/README.md#getapiv1systemroutesduplicate)
- [`systemGetApiV1SystemStatus`](docs/sdks/system/README.md#getapiv1systemstatus)
- [`systemPostApiV1SystemRestart`](docs/sdks/system/README.md#postapiv1systemrestart)
- [`systemPostApiV1SystemShutdown`](docs/sdks/system/README.md#postapiv1systemshutdown)
- [`tagDeleteApiV1TagId`](docs/sdks/tag/README.md#deleteapiv1tagid)
- [`tagDetailsGetApiV1TagDetail`](docs/sdks/tagdetails/README.md#getapiv1tagdetail)
- [`tagDetailsGetApiV1TagDetailId`](docs/sdks/tagdetails/README.md#getapiv1tagdetailid)
- [`tagGetApiV1Tag`](docs/sdks/tag/README.md#getapiv1tag)
- [`tagGetApiV1TagId`](docs/sdks/tag/README.md#getapiv1tagid)
- [`tagPostApiV1Tag`](docs/sdks/tag/README.md#postapiv1tag)
- [`tagPutApiV1TagId`](docs/sdks/tag/README.md#putapiv1tagid)
- [`taskGetApiV1SystemTask`](docs/sdks/task/README.md#getapiv1systemtask)
- [`taskGetApiV1SystemTaskId`](docs/sdks/task/README.md#getapiv1systemtaskid)
- [`uiConfigGetApiV1ConfigUi`](docs/sdks/uiconfig/README.md#getapiv1configui)
- [`uiConfigGetApiV1ConfigUiId`](docs/sdks/uiconfig/README.md#getapiv1configuiid)
- [`uiConfigPutApiV1ConfigUiId`](docs/sdks/uiconfig/README.md#putapiv1configuiid)
- [`updateGetApiV1Update`](docs/sdks/update/README.md#getapiv1update)
- [`updateLogFileGetApiV1LogFileUpdate`](docs/sdks/updatelogfile/README.md#getapiv1logfileupdate)
- [`updateLogFileGetApiV1LogFileUpdateFilename`](docs/sdks/updatelogfile/README.md#getapiv1logfileupdatefilename)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { Prowlarr } from "prowlarr";
import { SDKValidationError } from "prowlarr/models/errors";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  let result;
  try {
    result = await prowlarr.apiInfo.getApi();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof APIError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `{protocol}://{hostpath}` contains variables and is set to `http://localhost:9696` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable   | Parameter                         | Supported Values           | Default            | Description |
| ---------- | --------------------------------- | -------------------------- | ------------------ | ----------- |
| `protocol` | `protocol: models.ServerProtocol` | - `"http"`<br/>- `"https"` | `"http"`           |             |
| `hostpath` | `hostpath: string`                | string                     | `"localhost:9696"` |             |

#### Example

```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  protocol: "https",
  hostpath: "<value>",
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  serverURL: "http://localhost:9696",
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Prowlarr } from "prowlarr";
import { HTTPClient } from "prowlarr/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Prowlarr({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Prowlarr } from "prowlarr";

const sdk = new Prowlarr({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PROWLARR_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
