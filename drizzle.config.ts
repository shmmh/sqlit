import { defineConfig, type Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";
import cfg from "@/lib/config";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: Config = {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  dialect:"postgresql",
  dbCredentials: {
    url: cfg.POSTGRES_URL as string,
  },
}

export default defineConfig(config);