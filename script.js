
printData()


let array = [];



if (!localStorage.getItem("Array")) {
    localStorage.setItem("Array", JSON.stringify(array));

}


function addData() {

    //Get Data ans store to local variable
    // let editId = Date.now() + Date.now()
    const date = document.getElementById("date").value
    const tName = document.getElementById("tName").value
    const from = document.getElementById("from").value
    const to = document.getElementById("to").value
    const discription = document.getElementById("discription").value
    let deletId = Date.now()

    if (date === "" || tName === "" || from === "" || to === "" || discription === "") {
        alert("All fields are required");
    } else {

        //create object with gathered data 



        const obj = {
            date: date,
            taskName: tName,
            assignFrom: from,
            assignTo: to,
            discription: discription,
            idDelet: deletId,
        }

        console.log(obj);

        //push obj into array

        //get Array form localStorage
        const string = localStorage.getItem("Array")
        let tempArray = JSON.parse(string);
        // tempArray = string;
        console.log(tempArray);

        tempArray.push(obj);

        tempArray = JSON.stringify(tempArray);

        console.log(tempArray);

        localStorage.setItem("Array", tempArray)




    }
    printData();

    //To Remove Value From Form
    empty();

}

function printData() {

    const string = localStorage.getItem("Array");
    console.log(typeof string);
    const tempArray = JSON.parse(string);
    // const tempArray = string

    const tBody = document.getElementById("tbody");
    tBody.innerHTML = "";


    for (let i = 0; i < tempArray.length; i++) {

        const html = '<tr>' +
            `<td>${tempArray[i].taskName}</td>` +
            `<td>${tempArray[i].assignFrom}</td>` +
            `<td>${tempArray[i].assignTo}</td>` +
            `<td>${tempArray[i].discription}</td>` +
            `<td>${tempArray[i].date}</td>` +
            '<td class="action">' +
            `<input type="button" class="delete" value="Delete" data-id="${tempArray[i].idDelet}" onclick="delet(this)">` +
            `<input type="button" class="edit" value="Edit" data-id="${tempArray[i].idDelet}" onclick="edit(this)">` +
            '</td>' +
            '</tr>';

        tBody.innerHTML += html;

    }



}

function delet(element) {


    const id = element.getAttribute("data-id");
    const string = localStorage.getItem("Array");
    const tempArray = JSON.parse(string);
    // console.log(tempArray);


    for (let i = 0; i < tempArray.length; i++) {

        if (id == tempArray[i].idDelet) {
            tempArray.splice(i, 1)


        }


    }
    console.log(tempArray);
    localStorage.setItem("Array", JSON.stringify(tempArray))


    printData()




}


function edit(element){
    const id = element.getAttribute("data-id");
    const string = localStorage.getItem("Array");
    const tempArray = JSON.parse(string);

    let editedObj = ""

    for (let i = 0; i < tempArray.length; i++) {

        if (id == tempArray[i].idDelet) {

            editedObj = tempArray[i];
            tempArray.splice(i, 1)

        }

    }
    console.log(editedObj);

    localStorage.setItem("Array", JSON.stringify(tempArray))



    document.getElementById("date").value = editedObj.date
    document.getElementById("tName").value = editedObj.taskName
    document.getElementById("from").value = editedObj.assignFrom
    document.getElementById("to").value = editedObj.assignTo
    document.getElementById("discription").value = editedObj.discription
    document.getElementById("add").value = "Update"

    


}

function empty(){
     document.getElementById("date").value = ""
    document.getElementById("tName").value = ""
    document.getElementById("from").value = ""
    document.getElementById("to").value = ""
    document.getElementById("discription").value = ""
    document.getElementById("add").value = "Add"

}

