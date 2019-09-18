console.log("javascipt is amazing");


function addtodo(){
    const input = document.getElementById('input').value
    const pTag = document.createElement('p')
    pTag.innerText = input
    const li = document.createElement('li')
    li.appendChild(pTag)
    document.getElementById('input').value = ''
    document.getElementById('list').appendChild(li)












}