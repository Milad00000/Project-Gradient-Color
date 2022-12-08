let one = document.querySelector(".one");
let two = document.querySelector(".two");
let body = document.querySelector("body");
let r = "to right"
function color() {
	let f1 = one.value;
	let f2 = one.value;
	body.style = "background-image:linear-gradient("+r+","+one.value+","+two.value+")";
}
