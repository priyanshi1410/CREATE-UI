let users=[]
let temp=''
const uimaker=()=>{
  users.map((ele)=>{
    temp+=`
    <div>
    <h2>${ele.name}</h2>
    <img src=${ele.imageurl} alt="">
    <p>${ele.email}</p>
    <p>${ele.number}</p>
    <p>${ele.exp}</p></div>`
  })
  document.getElementById("output").innerHTML=temp
}


document.querySelector('.form').addEventListener('submit', (e) => {
e.preventDefault()

  let user = {
    name: document.getElementById('name').value,
    imageurl: document.getElementById('imageurl').value,
    email: document.getElementById('email').value,
    number: document.getElementById('number').value,
    exp: document.getElementById('exp').value
  }
  users.push(user);
  console.log(users);
  uimaker()


});
