const { spawnSync } = require("node:child_process");
const path = require("node:path");

let input = "";

process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  try {
    const event = JSON.parse(input);

    const filePath =
      event.tool_input?.file_path ||
      event.tool_input?.path ||
      "";

    const supportedExtensions = new Set([
      ".js",
      ".json",
      ".md",
    ]);

    const extension = path.extname(filePath);

    if (!filePath || !supportedExtensions.has(extension)) {
      process.exit(0);
    }

    const result = spawnSync(
      process.platform === "win32" ? "npx.cmd" : "npx",
      ["prettier", "--write", filePath],
      {
        encoding: "utf8",
        stdio: "pipe",
      },
    );

    if (result.status !== 0) {
      console.error(
        result.stderr || "Prettier hook failed",
      );

      process.exit(1);
    }

    console.log(`Formatted ${filePath}`);
    process.exit(0);
  } catch (error) {
    console.error(
      `Formatting hook error: ${error.message}`,
    );

    process.exit(1);
  }
});