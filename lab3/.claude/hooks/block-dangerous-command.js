let input = "";

process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  try {
    const event = JSON.parse(input);
    const command = event.tool_input?.command || "";

    const blockedPatterns = [
      /rm\s+-rf/i,
      /git\s+reset\s+--hard/i,
      /git\s+clean\s+-[a-z]*f/i,
      /git\s+push\s+--force/i,
      /npm\s+publish/i,
      /shutdown/i,
      /reboot/i,
    ];

    const isBlocked = blockedPatterns.some((pattern) =>
      pattern.test(command),
    );

    if (isBlocked) {
      console.error(
        `Blocked by project safety hook: ${command}`,
      );

      process.exit(2);
    }

    process.exit(0);
  } catch (error) {
    console.error(
      `Unable to evaluate command: ${error.message}`,
    );

    process.exit(1);
  }
});