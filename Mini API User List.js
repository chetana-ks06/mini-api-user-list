const loadButton = document.getElementById("loadButton");
const userList = document.getElementById("userList")


loadButton.addEventListener("click", async function(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const users = await response.json();

    userList.innerHTML ="";

    console.log(users);

   users.forEach(user => {
    const listItem = document.createElement("li");

    listItem.textContent=user.name;
    userList.appendChild(listItem);
   });

});

