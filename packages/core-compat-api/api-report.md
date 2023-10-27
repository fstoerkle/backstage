## API Report File for "@backstage/core-compat-api"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin } from '@backstage/frontend-plugin-api';
import { ExtensionOverrides } from '@backstage/frontend-plugin-api';
import { default as React_2 } from 'react';

// @public (undocumented)
export function collectLegacyRoutes(
  flatRoutesElement: JSX.Element,
): BackstagePlugin[];

// @public (undocumented)
export function convertLegacyApp(
  rootElement: React_2.JSX.Element,
): (ExtensionOverrides | BackstagePlugin)[];

// (No @packageDocumentation comment for this package)
```