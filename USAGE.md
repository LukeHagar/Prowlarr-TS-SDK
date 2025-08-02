<!-- Start SDK Example Usage [usage] -->
```typescript
import { Prowlarr } from "prowlarr";

const prowlarr = new Prowlarr({
  security: {
    xApiKey: process.env["PROWLARR_X_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await prowlarr.apiInfo.getApi();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->