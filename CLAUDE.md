# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
deno task dev      # Start dev server with hot reloading (http://localhost:8000)
deno task build    # Build for production (outputs to _fresh/)
deno task start    # Run production server
deno task check    # Run formatter, linter, and type checker
```

## Architecture

This is a **Fresh v2** web app running on **Deno** with **Preact** and the islands architecture pattern.

### Key Concepts

**Islands Architecture**: Most pages render as static HTML on the server. Only components in `islands/` get hydrated on the client for interactivity. This keeps the client bundle small.

**File-Based Routing**: Routes are defined by files in `routes/`. The `_app.tsx` file wraps all pages (HTML shell, head tags).

**State Management**: Islands use Preact Signals (`@preact/signals`) for reactive state. Import `useSignal` for local component state.

### Core Files

- `main.ts` - App entry point, middleware setup, enables file-system routing
- `utils.ts` - Defines shared `State` type and `define` helper for type-safe routes/middleware
- `vite.config.ts` - Vite config with Fresh plugin
- `client.ts` - Client-side CSS imports for hot module reloading

### Import Aliases

Use `@/` as an alias for the project root (configured in `deno.json`):
```typescript
import { define } from "@/utils.ts";
```

## Fresh v2 Patterns

### Creating a Route
```typescript
import { define } from "../utils.ts";

export default define.page(function PageName() {
  return <div>Content</div>;
});
```

### Creating an Island
Islands go in `islands/` and are regular Preact components. They're automatically hydrated on the client.

```typescript
import { useSignal } from "@preact/signals";

export default function MyIsland() {
  const value = useSignal(0);
  return <button onClick={() => value.value++}>{value}</button>;
}
```

Use islands in routes by importing them directly:
```typescript
import MyIsland from "../islands/MyIsland.tsx";
```
