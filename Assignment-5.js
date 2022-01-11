let myTable = document.getElementById("myTable");
let row = myTable.rows;
let tbody = document.getElementById("myBody");
function addRow(){ 
	if(row.length === 0){
	let addRow = myTable.insertRow()
	let cell = addRow.insertCell()
	}
	else{
	let addRow = myTable.insertRow()
    for(let i = 0; i<row[0].cells.length;i++){
    	 let cell = addRow.insertCell(i)
    	}
	}
}
//adds a column when your iterate through the row in. row[i] is the 
function addColumn(){
	for(let i = 0; i <row.length;i++){
		let cell = row[i].insertCell()
	}

}
function removeRow(){
		myTable.deleteRow(-1);
	}
function removeColumn(){
	for(let i = 0; i <row.length; i++){
		let cell = row[i].deleteCell(0);
	}
}
