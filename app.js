console.log("This is ajax tutorial- by Harry");

let fetch = document.getElementById('fetchdata')
let content = document.getElementsByClassName('content')

fetch.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked the button");

    // instantiate an xhr Object
    const xhr = new XMLHttpRequest()

    // Open the object
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)

    //use this for POST request 
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true)

    // What to do on progress
    xhr.onprogress = function(){
        console.log("activities on progress");
    }


    xhr.onreadystatechange = function(){
        console.log('ready state is: ', xhr.readyState);
    }

    xhr.onload = function(){
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else{
            console.error("Some Error occur");
        }
    }


    // send the request
    xhr.send()


    console.log('we succesfully fetch the data')

}