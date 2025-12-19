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
- **Server**: Deno's standard HTTP file server

## Getting Started

### Prerequisites

- [Deno](https://deno.com/) installed on your machine

### Running Locally

Start the development server with hot reloading:

```bash
deno task dev
```

This will serve the application at `http://localhost:8000`.

### Running in Production

```bash
deno run --allow-read --allow-net main.ts
```

## Project Structure

```
├── main.ts       # Deno HTTP server
├── index.html    # Landing page
├── deno.json     # Deno configuration and tasks
└── Readme.md     # This file
```

## Deployment

This project can be deployed on [Deno Deploy](https://deno.com/deploy) with a single click.