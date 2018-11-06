// // function getData() {
// //     fetch('http://localhost:2000/tasks/')
// //     .then(res => res.json())
// //     .then(res => res.map(user => user.name))
// //     .then(userNames => document.getElementById('demo').innerHTML = 
// //     userNames.map(data => `<h1> ${data} </h1>`).join('') + 
// //     `<button onclick=''>update</button><button onclick=''>delete</button>`);
// // }

// function postData() {
//     const myPost = {};
//     myPost.name = document.getElementById('name').value;
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(myPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     fetch('http://localhost:3000/tasks/add', options)
//     .then(res => res.json())
//     .then(res => console.log(res));
// }

// // function deleteData() {
// //     const myPost = {};
// //     myPost.name = document.getElementById('name').value;
// //     const options = {
// //         method: 'DELETE',
// //         body: JSON.stringify(myPost),
// //         headers: {
// //             'Content-Type': 'application/json'
// //         }
// //     };

// //     fetch('http://localhost:2000/tasks/delete', options)
// //     .then(res => res.json())
// //     .then(res => console.log(res));
// // }

// // function updateData() {
// //     const myPost = {};
// //     myPost.name = document.getElementById('name').value;
// //     const options = {
// //         method: 'PUT',
// //         body: JSON.stringify(myPost),
// //         headers: {
// //             'Content-Type': 'application/json'
// //         }
// //     };

// //     fetch('http://localhost:2000/tasks/update', options)
// //     .then(res => res.json())
// //     .then(res => console.log(res));
// // }


// function getData() {
//     fetch('http://localhost:3000/tasks/')
//     .then(res => res.json())
//     .then(res => res.map(user => user))
//     .then(userNames => document.getElementById('demo').innerHTML = 
//     userNames.map(data => `<div  class='tasks' ><h3 style='color: ${data.color}' id='${data._id}'>${data.name}</h3>` + ` 
//     <button class='taskButton' id='done' onclick='taskDone("${data.color}", "${data._id}"); getData();'>${data.done}</button>
//     <button class='taskButton'  onclick="deleteData('${data._id}'); getData()">delete</button></div>`)
//     .join(''));
// }

// function deleteData(toDelete) {
//     const myPost = {};
//     myPost._id = toDelete;
//     const options = {
//         method: 'DELETE',
//         body: JSON.stringify(myPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     fetch('http://localhost:3000/tasks/delete', options)
//     //.then(res => res.json())
//     .then(res => console.log(res));
// }

// function taskDone(color, id) {
//     // if(document.getElementById(id).style.color !== 'grey') {
//     //     document.getElementById(id).style.color = 'grey';
//     // } else {
//     //     document.getElementById(id).style.color = 'black';
//     // }

//     if(color == 'black') {
//         updateData('Undone', 'grey', id)
//     }
//     else {
//         updateData('Done', 'black', id)
//     }
// }

// function updateData(isItDone, myColor, myId) {
//     const myPost = {};
//     myPost.color = myColor;
//     myPost._id = myId;
//     myPost.itDone = isItDone;
//     const options = {
//         method: 'PUT',
//         body: JSON.stringify(myPost),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     fetch('http://localhost:3000/tasks/update', options)
//     //.then(res => res.json())
//     //.then(res => console.log(res));
// }






function postData() {
    const myPost = {};
    myPost.name = document.getElementById('name').value;
    const options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:3000/tasks/add', options)
    .then(res => res.json())
    .then(res => console.log(res));
}


function getData() {
    fetch('http://localhost:3000/tasks/')
    .then(res => res.json())
    .then(res => res.map(user => user))
    .then(userNames => document.getElementById('demo').innerHTML = 
    userNames.map(data => `<div  class='tasks' > <ul>
    <li class='taskName' style='color: ${data.color}' id='${data._id}'>${data.name}</li>` + `
    <li><button class='taskButton delete'  onclick="deleteData('${data._id}');">X</button></li><ul>
    <li><input type='checkbox' class="checkMe" onclick='taskDone("${data.color}", "${data._id}");' ${data.done} /></li>
    </div>`)
    .join(''));
}

function deleteData(toDelete) {
    let myPost = {};
    myPost._id = toDelete;
    let options = {
        method: 'DELETE',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:3000/tasks/delete', options)
    .then(res => getData());
}

function taskDone(color, id) {
    if(color == 'black') {
        updateData('checked', 'grey', id)
    }
    else {
        updateData('unchecked', 'black', id)
    }

    getData();
}

function updateData(isItDone, myColor, myId) {
    let myPost = {};
    myPost.color = myColor;
    myPost._id = myId;
    myPost.itDone = isItDone;
    let options = {
        method: 'POST',
        body: JSON.stringify(myPost),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:3000/tasks/update', options)
    .then(res => getData());
}

