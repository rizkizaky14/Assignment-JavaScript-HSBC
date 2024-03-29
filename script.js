// let sigIn = document.getElementById("signIn");
// let signUp = document.getElementById("signUp");
// let forgotPass = document.getElementById("forgotPass");

const tbody = document.querySelector('tbody');
const detail = document.getElementById("detail");
const searchForm = document.getElementById("search");
let userData = [];

const loadData = async () => {
    try {
        const url = await fetch('https://jsonplaceholder.typicode.com/users');
        userData = await url.json();
        // console.log(userData);
        loadUserData(userData);
    } catch (err) {
        console.log(err);
    }
}

const loadUserData = (data) => {
    let no = 1;
    const output = data.map((el) => {
        return `
        <tr>
            <td class="border-2 border-gray-700">` +(no++) + `</td>
            <td class="border-2 border-gray-700">${el.name}</td>
            <td class="border-2 border-gray-700">${el.email}</td>
            <td class="border-2 border-gray-700"><button onClick="showDetail(${el.id})">Detail</button></td>
        </tr>    
        `
    }).join('');
    tbody.innerHTML = output;
}

function showDetail(id){
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((res) => res.json())
    .then((data) => {
        detail.innerHTML = ''
        detail.insertAdjacentHTML('beforeend', `
        <center>
            <ul>
                <li>${data.name}</li>
                <li>${data.username}</li>
                <li>${data.email}</li>
                <li>${data.address.city}</li>
                <li>${data.phone}</li>
            </ul>
        </center>        
        `)
    })
}

searchForm.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
    const input = userData.filter((data)=> {
        return (
            data.name.toLowerCase().includes(value)
        )
    })
    loadUserData(input)
})

loadData();