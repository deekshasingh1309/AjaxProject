$(document).ready(function () {
    $.ajax({
        url: " https://jsonplaceholder.typicode.com/posts", success: function (values) {
            let values = values;
            function table() {
                let previousTable = document.getElementById('dynamic_table');
                if (!!previousTable) {
                    previousTable.remove();
                }
                let table = document.createElement('table');
                table.setAttribute('id', 'dynamic_table');
                let header = Object.keys(values[0]);
                let tr = document.createElement('tr');
                // for (var i = 0; i < header.length; i++) 
                let myhead = header.map((myarr) => {
                    var th = document.createElement('th');
                    th.innerHTML = myarr;
                    th.setAttribute('class', 'tableClass1');
                    th.setAttribute('id', myarr)
                    tr.appendChild(th);
                })
                table.appendChild(tr);
                // for (var i = 0; i < values.length; i++) 
                let arr = values.map((arr1) => {
                    var tr = document.createElement('tr');
                    // for (var j = 0; j < header.length; j++) 
                    var arr2 = header.map((myarr3) => {
                        var td = document.createElement('td');
                        td.innerHTML = arr1[myarr3];
                        td.setAttribute('class', 'tableClass');
                        tr.appendChild(td);
                    })
                    table.appendChild(tr);
                })
                document.body.appendChild(table);
                addEventsToColumns();
            }
            table();
            function addEventsToColumns() {
                var header = Object.keys(values[0]);
                // for (var i = 0; i < header.length; i++) 
                let head = header.map((myarr4) => {
                    document.getElementById(myarr4).addEventListener('click', function (event) {
                        console.log(event);
                        sortTable(event.target.innerText)
                    })
                })
            }
            let flag = true;
            function sortTable(param) {
                values.sort(compare);
                function compare(a, b) {
                    if (a[param] > b[param] && flag)
                        return 1;
                    else
                        return -1;
                }
                flag = !flag;
                table();
            }
        }
    });