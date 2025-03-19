import { defineConfig } from "eslint/config";
import eslintReact from "@eslint-react/eslint-plugin";
import { flatConfig as next } from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tslint from "typescript-eslint";
import parser from "./parser";
import globals from "globals";

const recommend = defineConfig({
	extends: [
		eslintReact.configs.recommended,
		next.recommended,
		importPlugin.flatConfigs.recommended,
		jsxA11y.configs.recommended,
	],
	languageOptions: {
		parser: parser,
		parserOptions: {
			requireConfigFile: false,
			sourceType: "module",
			allowImportExportEverywhere: true,
			babelOptions: {
				presets: ["next/babel"],
				caller: {
					supportsTopLevelAwait: true,
				},
			},
		},
		globals: {
			...globals.browser,
			...globals.node,
		},
	},
	rules: {
		"import/no-anonymous-default-export": "warn",
		"@eslint-react/dom/no-unknown-property": "off",
		"jsx-a11y/alt-text": [
			"warn",
			{
				elements: ["img"],
				img: ["Image"],
			},
		],
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
		"@eslint-react/dom/no-unsafe-target-blank": "off",
	},
	settings: {
		"react-x": {
			version: "detect",
		},
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
		},
		"import/resolver": {
			"eslint-import-resolver-node": {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			"eslint-import-resolver-typescript": {
				alwaysTryTypes: true,
			},
		},
	},
});

const typescript = defineConfig({
	extends: [recommend],
	files: ["**/*.ts?(x)"],
	languageOptions: {
		parser: tslint.parser,
		parserOptions: {
			sourceType: "module",
		},
		globals: {
			...globals.browser,
			...globals.node,
		},
	},
});

export default [recommend, typescript];
