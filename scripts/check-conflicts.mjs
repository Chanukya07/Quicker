import { spawnSync } from "node:child_process";

const result = spawnSync(
  "git",
  ["grep", "-n", "-E", "^(<<<<<<< |=======|>>>>>>> )", "--", ":!pnpm-lock.yaml", ":!package-lock.json"],
  { encoding: "utf8" },
);

if (result.status === 0) {
  process.stderr.write("Unresolved merge-conflict markers found:\n");
  process.stderr.write(result.stdout);
  process.exit(1);
}

if (result.status !== 1) {
  process.stderr.write(result.stderr || "Unable to scan for merge-conflict markers.\n");
  process.exit(result.status ?? 1);
}

process.stdout.write("No unresolved merge-conflict markers found.\n");
