<div align="center">
  
  <h1>
    <img alt="Quantumlib Logo" src="./assets/quantumlib.png" height="100px"><br/>quantum|lib</h1>
  <h3 align="center">
    A simple Typescript/ES6 node utility library for <a href="https://www.hybridsoftware.com" target="_blank" style="text-decoration: none">HYBRID Software PLC</a> software projects
  </h3>
</div>
<br/>

<p align="center">
  <a href="https://www.packz.com" target="_blank"><img src="https://img.shields.io/badge/Made%20for-PACKZ-C60061?style=flat-square"/></a>
  <a href="https://cloudflow.hybridsoftware.com" target="_blank"><img src="https://img.shields.io/badge/Made%20for-CLOUDFLOW-1474b6?style=flat-square"/></a>
  <img src="https://img.shields.io/badge/Platform-MacOS+Windows-darkgreen?style=flat-square"/>
  <img src="https://img.shields.io/badge/Language-Typescript-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/Language-Javascript-orange?style=flat-square"/>
</p>

---

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

---

- [Compilation](#compilation)
- [Installation](#installation)
- [Import and usage](#import-and-usage)
- [API Documentation](#api-documentation)
  - [Cloudflow](#cloudflow)
  - [Database](#database)
  - [Env](#env)
  
## Compilation

- Target: "ES2020"
- Module: "CommonJS"

## Installation

Install the package as runtime dependency:

```bash
npm install quantumlib
```

## Import and usage

You can grab the full package...

```javascript
// Import statement
import * as quantumlib from 'quantumlib';

// Usage examples
const cloudflowManualUrl = quantumlib.cloudflow.getManualURL('https://my.domain.com:9090');
const homeDir = quantumlib.env.userHome;
```

Or a more conscious import including only the portions you need...

```javascript
// Import statement
import { cloudflow, env } from "quantumlib";

// Usage examples
const cloudflowManualUrl = cloudflow.getManualURL('https://my.domain.com:9090');
const homeDir = env.userHome;
```

## API Documentation

### cloudflow

#### Properties

| Property    | Type     | Value            | Description                      |
| ----------- | -------- | ---------------- | -------------------------------- |
| localURL    | `string` | http://127.0.0.1 | The default local Cloudflow URL  |
| defaultPort | `number` | 9090             | The default local Cloudflow port |

#### manual

Generates the Cloudflow user manual URL based on a given domain or IP.

Signature

```javascript
function getManualURL(cloudflowBaseUrl: string): string;
```

Example

```javascript
import { cloudflow } from "quantumlib";

const cloudflowManualUrl = cloudflow.getManualURL('https://my.domain.com:9090');
```

Return

The URL of the Cloudflow user manual as a string. Example: `https://my.domain.com:9090/manual/manual.html`.

### database

#### Properties

| Property | Type     | Value                     | Description                       |
| -------- | -------- | ------------------------- | --------------------------------- |
| userName | `string` | mongodb://127.0.0.1:27017 | The default local MongoDB URL     |
| userHome | `string` | nucleus                   | The default MongoDB database name |

### env

#### Properties

| Property                  | Type     | Value | Description |
| ------------------------- | -------- | ----- | ----------- |
| userName                  | `string` | -     | -           |
| userHome                  | `string` | -     | -           |
| osType                    | `string` | -     | -           |
| applicationsFolder        | `string` | -     | -           |
| applicationsFolderBrowser | `string` | -     | -           |
