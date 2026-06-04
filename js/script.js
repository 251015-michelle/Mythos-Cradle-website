// input counters are working
function decCount(inputID){
    let num = document.getElementById(inputID).value;
    if(num > 1){
      num --;
    }
    document.getElementById(inputID).value = num;
};

function incCount(inputID){
    let num = document.getElementById(inputID).value;
    if(num < 10){
      num ++;
    }
    document.getElementById(inputID).value = num;
};



// search bar is working!
let availableKeywords = [
  'Azuron',
  'Dragon',
  'Yuki',
  'Kitsune',
  'Aurelia',
  'Griffin',
  'Lumina',
  'Wisp',
  'Starwind',
  'Pegasus',
  'Briar',
  'Spirit',
];

const searchResult = document.querySelector(".searchResult");
const searchInput = document.getElementById("searchInput");

searchInput.onkeyup = function(){
  let result = [];
  let input = searchInput.value;

  if (input.length){
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  };

  display(result);

  if(!result.length){
    searchResult.innerHTML = '';
  };
};

function display(result){
  const content = result.map((list) => {
    // output1 = "<li onclick=selectInput(this)>" list "</li>"
    
    output = `<a href="../pages/adopt.html#${result}" class="searchRes"><li onclick=selectInput(this)"> ${list} </li></a>
    `;
    return output;
  });

  searchResult.innerHTML = "<ul>" + content.join('') + "</ul>";
};

function selectInput(list){
  searchInput.value = list.innerHTML;
  searchResult.innerHTML = '';
}




//adding items to the cart
const creatures = [
  {
    "data-id": 1,
    "data-name": "Blue Dragon - Azuron",
    "data-price": "R2 500.00",
    "data-image": "../assets/img/adopt1.png",
  },
  {
    "data-id": 2,
    "data-name": "Kitsune - Yuki",
    "data-price": "R4 500.00",
    "data-image": "../assets/img/adopt2.png",
  },
  {
    "data-id": 3,
    "data-name": "Griffin - Aurelia",
    "data-price": "R6 500.00",
    "data-image": "../assets/img/adopt3.png",
  },
  {
    "data-id": 4,
    "data-name": "Water Wisp - Lumina",
    "data-price": "R40 000.00",
    "data-image": "../assets/img/adopt4.png",
  },
  {
    "data-id": 5,
    "data-name": "Pegasus - Starwind",
    "data-price": "R5 000.00",
    "data-image": "../assets/img/adopt5.png",
  },
  {
    "data-id": 6,
    "data-name": "Forest Spirit - Briar",
    "data-price": "R3 500.00",
    "data-image": "../assets/img/adopt6.png",
  },
];

//to select the elements if there isn't elements/product to show yet...
const creaturesEl = document.querySelector(".fakeClassName");
//to add items to the cart
const cradleItemsList = document.getElementById("cradleItemsList");

//to display creatures in the cart modal
function displayCreatures(){
    cradleItemsList.innerHTML = "";

    creatures.forEach((creature) => {
      cradleItemsList.innerHTML += `
      <div class="creaturesToBuy">
        <div class="creatureInfoLayout">
            <div class="creatureImg">
                <img src="${creature['data-image']}" alt="${creature['data-name']}">
            </div>
            <div class="creatureInfo">
                <div class="creatureInfoDetails">
                    <p class="nameOfCreature">${creature['data-name']}</p>
                    <p class="price">${creature['data-price']}</p>
                    <p class="starterPack">Includes the starter pack</p>
                    <div class="counterContainer cradleCounter">
                      <button class="counterBtn" id="decrement" onclick="decCount('${creature['data-id']}Input')">-</button>
                      <input type="text" value="1" id="${creature['data-id']}Input" class="inputVal">
                      <button class="counterBtn" id="increment" onclick="incCount('${creature['data-id']}Input')">+</button>
                    </div>
                </div>
                <div class="creatureInfoDelete"> 
                    <div class="delete">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div> 
            </div>
        </div>
        <hr class="cradleItemEndLine">
      </div>
      `;
  });
};

displayCreatures();

//cradle array
let cradle = [];

//add to cart
function addToCradle(id){
  //check if product already exists in cart/cradle
  if(cradle.some((item) => item['data-id'] === id)){
    alert("Creature already in cradle!");
  } else {
    const item = creatures.find((product) => product['data-id'] === id);

    cradle.push({
      ...item,
      numberOfUnits : 1,
    });
  };

  updateCradle();
};

//update cradle/cart
function updateCradle(){
  displayCradleItems();
  // displayTotal();
}

//display cradle/cart items
function 








//now you have to let the input counter totals reflect in the cart when adding an item



//numbers/prices reflect on the total. You can use the calculator class exercise for reference on that I think :)

//form thank you message is working!!!
let contactForm = document.forms['contactForm'];

contactForm.addEventListener("submit", getFormInfo);

function getFormInfo(event){

    event.preventDefault();

    let formData = {
        "name": this['name'].value,
        "email": this['email'].value,
        "subject": this['subject'].value,
        "message": this['message'].value,
    };

    let output =`
        <p>
            Thank you for your message,  
            <span>${formData['name']}</span>
            !
        </p>
    `;

    document.querySelector(".outputContainer").innerHTML = output;

    let formModal = new bootstrap.Modal(document.getElementById("formModal"));

    formModal.show();
};

    formModal.addEventListener('hidden.bs.modal', function () {
    contactForm.reset();
}); 