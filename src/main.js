import { rateJoke } from "./rateJoke.js";
import * as core from "@actions/core";

async function run() {
  // Get inputs
  const joke = core.getInput("joke", { required: true });
  const token = core.getInput("token", { required: true });

  // Rate the joke using GitHub Models
  const rating = await rateJoke(joke, token);

  // Set the output
  core.setOutput("result", rating);
}

export { run };
