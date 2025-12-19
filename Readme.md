# PilotPals

**"Know Your Co-Pilot Before You Fly Together"**

PilotPals is a web application designed to help 737 pilots connect and build friendships before they fly together. Because the best cockpit crews aren't just colleagues—they're pals.

## Features

- See who you're flying with before your shift
- Chat & get to know your crew ahead of time
- Share fun facts, hobbies & ice-breakers
- Build lasting friendships at 35,000 feet
- Join pilot meetups in your hub city
- Practice conversations & break the awkwardness

## Tech Stack

- **Runtime**: [Deno](https://deno.com/)
- **Framework**: [Fresh v2](https://fresh.deno.dev/) - Next-gen web framework for Deno
- **UI Library**: [Preact](https://preactjs.com/) with Signals for state management
- **Architecture**: Islands architecture for optimal client-side hydration

## Getting Started

### Prerequisites

- [Deno](https://deno.com/) installed on your machine (v2.0+)

### Running Locally

Start the development server with hot reloading:

```bash
deno task dev
```

This will serve the application at `http://localhost:8000`.

### Building for Production

```bash
deno task build
```

### Running in Production

```bash
deno task start
```

## Project Structure

```
├── main.ts             # Fresh app entry point
├── dev.ts              # Development server
├── fresh.config.ts     # Fresh configuration
├── utils.ts            # Shared utilities and type definitions
├── deno.json           # Deno configuration and tasks
├── routes/
│   ├── _app.tsx        # App layout wrapper
│   └── index.tsx       # Landing page route
├── islands/
│   ├── JoinButton.tsx  # Interactive signup button
│   └── PilotCounter.tsx # Animated pilot counter
├── components/         # Shared components (server-rendered)
├── static/
│   └── styles.css      # Global stylesheet
└── Readme.md           # This file
```

## Islands Architecture

Fresh uses an islands architecture where most of the page is rendered on the server as static HTML, and only specific interactive components ("islands") are hydrated on the client.

### Current Islands

- **JoinButton**: Handles the signup modal with form validation
- **PilotCounter**: Animated counter showing the number of pilots using the platform

## Deployment

This project can be deployed on [Deno Deploy](https://deno.com/deploy) with a single click.

```bash
deno task build
deployctl deploy --project=pilotpals main.ts
```
