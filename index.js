const main = document.querySelector("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent= "Mahmoud Abdelkarim is the champion "
 
// For the fourth test . The TextContent and InnerHTML work while the innerText method does not work .
// Make sure to figure out why innerText does not work  