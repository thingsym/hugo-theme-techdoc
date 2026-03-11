import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		rules: {
      "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
      "semi-spacing": ["error", {"after": true, "before": false}],
      "semi-style": ["error", "first"],
      "no-extra-semi": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
			"prefer-const": "error",
		},
	},
]);
