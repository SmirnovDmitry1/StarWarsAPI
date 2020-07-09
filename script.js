const listPeople = document.getElementById('blockName')
const personStarWars = document.getElementById('personStarWars')
let stringHTML = ''
let i = 1;
let fetchPromise = fetch('https://swapi.dev/api/people/?page=' + i);


fetchPromise.then(response => {
    return response.json()
}).then(peoples => {
    console.log(peoples.results)
    peoples.results.forEach(people =>

        stringHTML += `
            <li onclick="people()" class="col-md-3 post">
                <figure>
                    <img src="images/${people.name}.png" alt="Ошибка загрузки" id="${people.name}">
                </figure>
            </li>`)
    listPeople.innerHTML = stringHTML

})



function people() {

    const idName = event.target.id
    console.log(idName)

    const fetchPeople = fetch('https://swapi.dev/api/people/?search=' + idName)



    fetchPeople.then(response => {
        return response.json()
    }).then(people => {
        console.log(people.results)
        let stringHTML1 = ''

        people.results.forEach(person => stringHTML1 += `
            <div id="my_modal" class="modal">
                <div class="modal_content">
                    <img src="images/${person.name}.png" alt="${person.name}">
                    <p>Имя: ${person.name}</p>
                    <p>Год рождения: ${person.birth_year}</p>  
                    <p>Рост: ${person.height}</p>
                    <p>Вес: ${person.mass}</p>
                    <p>Цвет волос: ${person.hair_color}</p>
                    <p>Цвет кожи: ${person.skin_color}</p>
                    <p>Цвет глаз: ${person.eye_color}</p>
                    <p>Пол: ${person.gender}</p>
                </div>
            </div>`)
        personStarWars.innerHTML = stringHTML1

        const modal = document.getElementById("my_modal")

        modal.style.display = "block";

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    })
}

function currentSlide(numberPage) {
    let fetchPromise = fetch('https://swapi.dev/api/people/?page=' + numberPage);


    fetchPromise.then(response => {
        return response.json()
    }).then(peoples => {
        stringHTML = ''
        console.log(peoples.results)
        peoples.results.forEach(people =>

            stringHTML += `
            <li onclick="people()" class="col-md-3 post">
                <figure>
                    <img src="images/${people.name}.png" alt="Ошибка загрузки" id="${people.name}">
                </figure>
            </li>`)
        listPeople.innerHTML = stringHTML

    })
}
