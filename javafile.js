
        var nameArray = [];
        function saveIntoLocalStorage() {
            // name push in array 
             
             var getval = document.getElementById("inputBox").value;
            if(getval == "" ){
                alert("Please write something.");
            }else{
                nameArray.push(document.getElementById("inputBox").value);
                document.getElementById("inputBox").value = "";
                localStorage.setItem("names", nameArray);
                 displayData();  
            }
        } 
        function displayData() {
            // empty table element            
            document.getElementById("tableId").innerHTML = "";
            // get localStorage value                        
            var newArray = localStorage.getItem("names");
            if (newArray) {
                newArray = newArray.split(",");
                nameArray = newArray;
                document.getElementById("tableId").innerHTML += "<tr><th></th><th></th><th></th></tr>";
            } else newArray = [];
            // loop in array to show all names
            for (var i = 0; i < newArray.length; i++) {
                serial = i + 1
                document.getElementById("tableId").innerHTML += "<tr><td>" + serial + "-</td><td>" + newArray[i] + "<td><button class='box003' onClick=editRow(" + i + ")>Edit</button></td></td><td><button class='box003' onClick=deleteRow(" + i + ")>Delete</button></td></tr>";
            }
        }
        // remove particular row from table and name from localStorage
        function deleteRow(index) {
            // Remove name from array
            nameArray.splice(index, 1);
            // Then above array set in localStorage
            localStorage.setItem("names", nameArray);
            displayData();
        }
        // Edit particular row from table and name from localStorage

        function editRow(index) {
            // Edit name from array
                  var field = document.getElementById('inputBox');
                 field.value = nameArray[index];
            // Then above array set in localStorage
            // localStorage.setItem("names", nameArray);
        }
        displayData();