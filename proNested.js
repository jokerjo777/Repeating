

let draw;
let rowsInput = document.getElementById('rows');
let columnsInput = document.getElementById('columns');

document.getElementById('submitBtn').onclick = function() {
    draw = document.getElementById('symbol').value;
    document.getElementById('outPut').innerHTML = '';

    let rows = parseInt(rowsInput.value);
    let columns = parseInt(columnsInput.value);

    for(i = 1; i <= rows; i += 1) {
        for(j = 1; j <= columns; j += 1) {
            document.getElementById("outPut").innerHTML +=  '' + draw;
        }
        document.getElementById("outPut").innerHTML += "<br />"
    }
}