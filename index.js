const spawn = require("child_process").spawn;
const path = require("path");
const exec = (cmd, args = []) =>
  new Promise((resolve, reject) => {
    console.log(`Started: ${cmd} ${args.join(" ")}`);

    const AUTH_URL = process.env.GITHUB_SERVER_URL.replace(
      /(https?:\/\/)/,
      `$1GithubActions:${process.env.INPUT_TOKEN}@`
    );

    process.env.CACHE_URL = `${AUTH_URL}/${process.env.GITHUB_REPOSITORY}`;

    const app = spawn(cmd, args, { stdio: "inherit" });
    app.on("close", (code) => {
      if (code !== 0) {
        const err = new Error(`Invalid status code: ${code}`);
        err.code = code;
        return reject(err);
      }
      return resolve(code);
    });
    app.on("error", reject);
  });

const main = async () => {
  await exec("bash", [path.join(__dirname, "./action.sh")]);
};

main().catch((err) => {
  console.error(err);
  console.error(err.stack);
  process.exit(err.code || -1);
});
