const inputList = document.getElementById('CountryList');
const body = document.getElementById('Color1');
const divOne = document.getElementById('Color2');
const divTwo = document.getElementById('Color3');
let colorArray = [body,divOne,divTwo];
let countryName = document.getElementById('CountryName');
let language = document.getElementById('OfficialLanguage');
const muricaFlag = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png";
const algeriaFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/23px-Flag_of_Algeria.svg.png";
const mostChadLikeFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/23px-Flag_of_Chad.svg.png";
const mexicoFlag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png";
const flagArray = [muricaFlag, mexicoFlag, algeriaFlag, mostChadLikeFlag]
const greet = document.getElementById('HelloWorld');
const bunton = document.getElementById('bunton');
const options = inputList.options;
let input = ''
let flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png"

inputList.addEventListener('click',()=> {
    input = options[inputList.selectedIndex].innerHTML;
    
})

class Country {
    constructor(name, lang, greeting, colors, flag){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "MURICAN", "Howdy ya'all!", ["red","white","blue"], muricaFlag);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], mexicoFlag);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], algeriaFlag)
let winnerForBestNameCountry = new Country("Chad", "Bruh...", "Dude!", ["blue", "yellow", "red"], mostChadLikeFlag);
const getFlag = () => {
    document.getElementById('flaaaag').src = flag;
}
const getBuntonColors = (colors) => {
    let c1 = ''
    let c2 = ''
    let c3 = ''
    colors.forEach((c,i) => {
        switch(i){
            case 0:
                c1 = c;
                break;
            case 1:
                c2 = c;
                break;
            case 2:
                c3 = c;
                break;
            default:
                break;
        }
    })
    let style = `linear-gradient(45deg, ${c1}, ${c2}, ${c3})`;
    console.log(style);
    bunton.style.background = style;
}
const SwitchCountry = () => {
    let country;
    let mouthNoises;
    let hello;
    let countryObj;
    if(input === "USA"){
        country = usa.name;
        mouthNoises = usa.lang;
        hello = usa.greeting;
        flag = usa.flag;
        countryObj = usa;
        colorArray.map(
            (c,i)=> {
            c.style.backgroundColor = usa.colors[i];
            
        })
    }else if (input === "Mexico"){
        country = mexico.name;
        mouthNoises = mexico.lang;
        hello = mexico.greeting;
        flag = mexico.flag;
        countryObj = mexico;
        colorArray.map(
            (c,i)=> {
            c.style.backgroundColor = mexico.colors[i];
            
        })
    }else if (input === "Algeria"){
        country = algeria.name
        mouthNoises = algeria.lang;
        hello = algeria.greeting;
        flag = algeria.flag;
        countryObj = algeria;
        colorArray.map(
            (c,i)=> {
            c.style.backgroundColor = algeria.colors[i];
            //document.getElementById('flaaaag').src = flagArray[i];
        })
    }else if (input === "Chad"){
        country = winnerForBestNameCountry.name;
        mouthNoises = winnerForBestNameCountry.lang;
        hello = winnerForBestNameCountry.greeting;
        flag = winnerForBestNameCountry.flag;
        countryObj = winnerForBestNameCountry;
        colorArray.map(
            (c,i)=> {
            c.style.backgroundColor = winnerForBestNameCountry.colors[i];
            //document.getElementById('flaaaag').src = flagArray[i];
        })
    }
    countryName.innerHTML = country;
    language.innerHTML = mouthNoises;
    greet.innerHTML = hello;
    console.log(flag)
    console.log(input);
    getBuntonColors(countryObj.colors)
    getFlag();
}






