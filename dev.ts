#!/usr/bin/env -S deno run -A --watch=static/,routes/,islands/,components/

import { dev } from "@fresh/core/dev";
import config from "./fresh.config.ts";

await dev(import.meta.url, "./main.ts", config);
