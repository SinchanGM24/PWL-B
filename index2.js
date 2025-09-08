import chalk from "chalk";
import { say } from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";
import dayjs from "dayjs";

const args = process.argv.slice(2);
let nama = "Abdul Wafa'";
let nim = "F1D022104";
if (args.length > 0) {
	const [inputNama, inputNim] = args
		.join(" ")
		.split("-")
		.map((s) => s.trim());
	if (inputNama) nama = inputNama;
	if (inputNim) nim = inputNim;
}

const waktu = dayjs().format("dddd, DD MMMM YYYY HH:mm:ss");
console.log(
	boxen(gradient.cristal(waktu), {
		padding: 1,
		borderStyle: "round",
	})
);

console.log(
	chalk.blue.bold("Nama Lengkap : ") + chalk.green.bold.underline(nama)
);
console.log(chalk.blue.bold("NIM          : ") + chalk.yellow.bold(nim));
console.log("\n");

console.log(
	say({
		text: "SEMANGAT",
		f: "dragon",
	})
);
console.log("\n");

figlet(nama, function (err, data) {
	if (err) {
		console.log("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(gradient.morning(data));
});
