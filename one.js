
let fs = require("fs")
let content=fs.readFileSync("input", "utf8")
console.log(content)
let list=content.split("\n")
console.log(list)
let fuelsum=0
for (let mass of list) {
	console.log(mass)
	let fuel=Math.floor(mass/3)-2
	console.log("fuel", fuel)
	fuelsum=fuelsum+fuel
}console.log(fuelsum)