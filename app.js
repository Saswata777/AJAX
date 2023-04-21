console.log("This is ajax tutorial- by Harry");

let fetch = document.getElementById('fetchdata')
let popBtn = document.getElementById('populate')
let content = document.getElementsByClassName('content')

fetch.addEventListener('click',buttonClickHandler);
popBtn.addEventListener('click', popHandeler);

function buttonClickHandler(){
    console.log("You have clicked the button");
    
    // instantiate an xhr Object
    const xhr = new XMLHttpRequest()
    
    // Open the object
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
    
    //use this for POST request 
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true)
    xhr.getResponseHeader('content-type', 'application/json')
    
    
    
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
    params = `{"name":"test","salary":"123","age":"23"}`
    xhr.send(params)
    
    
    console.log('we succesfully fetch the data')
    
}


function popHandeler(){
    console.log("You have clicked the popHandeler");

    // instantiate an xhr Object
    const xhr = new XMLHttpRequest()

    // Open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

   



    xhr.onload = function(){
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');

            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;

        }

    }


    // send the request
    xhr.send()


    console.log('we succesfully fetch the data')
}