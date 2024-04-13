// import { exec } from "child_process";
// import path  from "path";
// import { fileURLToPath } from "url";
// import process from "process";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const scriptPath = path.join(__dirname,"start-server.sh");

// // Adjust the command to use the correct shell executable on Windows
// const command = process.platform === "win32" ? "git-bash.exe" : "sh";

// // const command = process.platform === "win32" ? "wsl" : "sh";

// console.log("This is ",__dirname)
// exec(`${command} ${scriptPath}`, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`Something Went Wrong ${error}`);
//         return;
//     }
//     console.log(`Script output ${stdout}`);
//     console.error(`Script error output ${stderr}`);
// });



import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

// Get the current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the shell script
const scriptPath = path.join(__dirname, "start-server.sh");

// Check if the script file exists
if (!fs.existsSync(scriptPath)) {
    console.error("Script file does not exist:", scriptPath);
    process.exit(1);
}

// Execute the shell script using the appropriate shell
exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
        console.error(`Something Went Wrong ${error}`);
        return;
    }
    console.log(`Script output ${stdout}`);
    console.error(`Script error output ${stderr}`);
});

