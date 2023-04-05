

let API = 'https://pokeapi.co/api/v2/pokemon';  
let wrapApi = document.querySelector('#app');  
let mainUl = document.createElement('ul');  
mainUl.classList.add('pokemonUl');  
wrapApi.append(mainUl);  
  
async function createUl(a) {  
    mainUl.innerHTML = '';  
  fetch(a).then((res) => res.json()).  
  then((data) => {  
    data.results.forEach((element, index) => {  
        let li = document.createElement('li');   
        let p = document.createElement('p');  
        let infoDiv = document.createElement('div');  
        infoDiv.classList.add('infoDiv_none');  
        p.innerHTML = element.name;  
        mainUl.append(li);  
        li.append(p);  
        li.append(infoDiv);  
        fetch(`${API}/${index + 1}/`).then(res => res.json()).then(data => infoDiv.innerHTML += `<img src="${data.sprites.front_default}" alt=""> <p>рост: ${data.height}</p> <p>вес: ${data.weight}</p> <p>тип: ${data.types[0].type.name}</p>`)  
        li.addEventListener('click', (e) => {  
            infoDiv.classList.toggle('infoDiv_none');  
            infoDiv.classList.toggle('infoDiv');  
        })  
    });  
  });  
}createUl(API);



