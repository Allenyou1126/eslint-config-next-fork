import { defineConfig } from "eslint/config";
import tslint from "typescript-eslint";

export default defineConfig({
	extends: tslint.configs.recommended,
});
