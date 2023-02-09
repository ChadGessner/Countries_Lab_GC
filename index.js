const inputList = document.getElementById('CountryList');
const body = document.getElementById('Color1');
const divOne = document.getElementById('Color2');
const divTwo = document.getElementById('Color3');
let colorArray = [
    body,
    divOne,
    divTwo
];
const countryName = document.getElementById('CountryName');
const language = document.getElementById('OfficialLanguage')
const muricaFlag = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png";
const algeriaFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/23px-Flag_of_Algeria.svg.png";
const mostChadLikeFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/23px-Flag_of_Chad.svg.png";
const mexicoFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png";
const chinaFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/188px-Flag_of_the_People%27s_Republic_of_China.svg.png";
const flagArray = [
    muricaFlag, 
    mexicoFlag, 
    algeriaFlag, 
    mostChadLikeFlag, 
    chinaFlag
]
const greet = document.getElementById('HelloWorld');
const bunton = document.getElementById('bunton');
let input = ''

class Country {
    constructor(name, lang, greeting, colors, flag){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
    displayColors(){
        countryName.innerHTML = this.name;
        language.innerHTML = this.lang;
        greet.innerHTML = this.greeting;
        document.getElementById('flaaaag').src = this.flag;
        colorArray.map(
            (c,i)=> {
            c.style.backgroundColor = currentCountry.colors[i];
        })
        bunton
        .style
        .background = `linear-gradient(
            45deb,
             ${this.colors[0]},
              ${this.colors[1]},
               ${this.colors[2]})`;
    }
}
let china = new Country(
    "China",
    "Chinese",
    "Ni hao",
    [
        'red',
        'yellow',
        'yellow'
    ],chinaFlag
)
let usa = new Country(
    "USA", 
    "MURICAN", 
    "Howdy ya'all!", 
    [
        "red",
        "white",
        "blue"
    ], 
    muricaFlag);
let mexico = new Country(
    "Mexico", 
    "Spanish", 
    "Hola mundo!", [
        "red", 
        "white", 
        "green"
    ],
     mexicoFlag
);
let algeria = new Country(
    "Algeria", 
    "Arabic and Berber", 
    "Sup", 
            [
    "blue", 
    "yellow", 
    "red"
    ],
    algeriaFlag
 )
let winnerForBestNameCountry = new Country(
    "Chad", 
    "Bruh...", 
    "Dude!", 
    [
        "blue", 
        "yellow", 
        "red"], mostChadLikeFlag);

        const countriesArray = [
            usa,
            mexico,
            algeria,
            winnerForBestNameCountry,
            china
        ]
let currentCountry = usa;
for(let i = 0; i < countriesArray.length; i++){
    let option = document.createElement('option');
    option.innerHTML = countriesArray[i].name;
    inputList.addEventListener('click',()=> {
        currentCountry = countriesArray[inputList.selectedIndex];
    })
    inputList.append(
        option
    )
}
const clicky = () => {
    currentCountry.displayColors();
}
clicky()