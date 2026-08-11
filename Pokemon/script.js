const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');

// btnPokemon.addEventListener('click', async()=>{
//     const findPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
//     const data = await findPokemon.json();
//     console.log(data);
//     //progressX.innerHTML = `${data.name} <img scr="${data.sprites.front_dafault}">`
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     img.src = data.sprites.front_default; // ดึงรูปจาก data API ที่เราใช้
//     div.append(img);
//     progressX.append(div);

// });

btnPokemon.addEventListener('click', async()=>{

// สุ่มตัวละครจาก ID (1 ถึง 1025)
    const randomId = Math.floor(Math.random()* 1025) + 1;

// ดึงข้อมูลจาก API โดยการ random 
    const findPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await findPokemon.json();

// สร้างกล่อง div และใส่ class เพื่อดึงสไตล์จาก css + ใส่ระบบเพื่อกดลบ
    const div = document.createElement('div');
    div.classList.add('card');
    div.addEventListener('click', () => {
        div.remove();
    });

// สร้าง ID โปเกมอน
    const pokemonId = document.createElement('span');
    pokemonId.classList.add('pokemon-id');
    pokemonId.textContent = `#${data.id}`;

// สร้างรูปภาพประกอบ
    const img = document.createElement('img');
    img.src = data.sprites.front_default;

// สร้างชื่อโปเกมอน
    const name = document.createElement('p');
    name.textContent = data.name;

// ประกาศรูปและข้อมูล
// console.log(data);
div.append(pokemonId);
div.append(img);
div.append(name);

// แสดงผลบนเว็บ
progressX.append(div);
});