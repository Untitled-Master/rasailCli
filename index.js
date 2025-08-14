#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import send from "./utils/send.js"; // use relative path and include .js
import welcome from "./utils/welcome.js"; // use relative path and include .js

program.version("1.0.0").description("My Node CLI");

program.action(() => {
  welcome();
  inquirer
    .prompt([
      {
        type: "input",
        name: "Message",
        message: "Enter the message you want to send:",
      },
      {
        type: "input",
        name: "Number",
        message: "Number to send the message to:",
        default: "+1234567890",
      },
    ])
    .then((answers) => {
      send(answers.Message, answers.Number)
    });
});

program.parse(process.argv);
