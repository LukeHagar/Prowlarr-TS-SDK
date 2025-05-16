# IndexerCapabilityResourceInput

## Example Usage

```typescript
import { IndexerCapabilityResourceInput } from "prowlarr";

let value: IndexerCapabilityResourceInput = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `limitsMax`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `limitsDefault`                                                    | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `categories`                                                       | [models.IndexerCategoryInput](../models/indexercategoryinput.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `supportsRawSearch`                                                | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `searchParams`                                                     | [models.SearchParam](../models/searchparam.md)[]                   | :heavy_minus_sign:                                                 | N/A                                                                |
| `tvSearchParams`                                                   | [models.TvSearchParam](../models/tvsearchparam.md)[]               | :heavy_minus_sign:                                                 | N/A                                                                |
| `movieSearchParams`                                                | [models.MovieSearchParam](../models/moviesearchparam.md)[]         | :heavy_minus_sign:                                                 | N/A                                                                |
| `musicSearchParams`                                                | [models.MusicSearchParam](../models/musicsearchparam.md)[]         | :heavy_minus_sign:                                                 | N/A                                                                |
| `bookSearchParams`                                                 | [models.BookSearchParam](../models/booksearchparam.md)[]           | :heavy_minus_sign:                                                 | N/A                                                                |