import chalk from "chalk";
import { say } from "cowsay";
import figlet from "figlet";

const nama = "Abdul Wafa'";
const nim = "F1D022104";
console.log(chalk.blue.bold("Nama Lengkap : ") + chalk.green(nama));
console.log(chalk.blue.bold("NIM          : ") + chalk.yellow(nim));
console.log("\n");

console.log(
	say({
		text: "SEMANGAT",
	})
);
console.log("\n");

figlet(nama, function (err, data) {
	if (err) {
		console.log("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(chalk.cyan(data));
});
