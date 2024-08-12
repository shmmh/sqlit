#!/bin/sh

# Install dependencies
echo "Installing dependencies"
bun install

# Run migrations
echo "Running migrations"
bunx drizzle-kit push:pg

# Start the Next.JS application
echo "Starting Next.JS application"
bun run dev