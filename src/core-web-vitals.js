import { defineConfig } from "eslint/config";
import { flatConfig } from "@next/eslint-plugin-next";

export default defineConfig({
	extends: flatConfig.coreWebVitals,
});
