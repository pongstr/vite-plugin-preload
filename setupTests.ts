import { exec } from "child_process";
import { beforeAll } from "vitest";

const execShellCommand = (cmd: string) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

beforeAll(async () => {
  await execShellCommand('pnpm -C "examples/react-demo" install');
  await execShellCommand('pnpm -C "examples/react-demo" build');
});
