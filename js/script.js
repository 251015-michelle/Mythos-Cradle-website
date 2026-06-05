// input counters are working
function decCount(inputID){
    let num = document.getElementById(inputID).value;
    if(num > 1){
      num --;
      document.getElementById(inputID).value = num;

      const creatureId = parseInt(inputID); 
      if (!isNaN(creatureId)) {
        const item = cradle.find((product) => product['data-id'] === creatureId);
        if(item) { 
          item.numberOfUnits = parseInt(num); 
          displayTotal();
        }
      }
    }
}

function incCount(inputID){
    let num = document.getElementById(inputID).value;
    if(num < 10){
      num ++;
      document.getElementById(inputID).value = num;

      const creatureId = parseInt(inputID); 
      if (!isNaN(creatureId)) {
        const item = cradle.find((product) => product['data-id'] === creatureId);
        if(item) { 
          item.numberOfUnits = parseInt(num); 
          displayTotal();
        }
      }
    }
}



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
    "data-price": 2500,
    "data-image": "../assets/img/adopt1.png",
  },
  {
    "data-id": 2,
    "data-name": "Kitsune - Yuki",
    "data-price": 4500,
    "data-image": "../assets/img/adopt2.png",
  },
  {
    "data-id": 3,
    "data-name": "Griffin - Aurelia",
    "data-price": 6500,
    "data-image": "../assets/img/adopt3.png",
  },
  {
    "data-id": 4,
    "data-name": "Water Wisp - Lumina",
    "data-price": 40000,
    "data-image": "../assets/img/adopt4.png",
  },
  {
    "data-id": 5,
    "data-name": "Pegasus - Starwind",
    "data-price": 5000,
    "data-image": "../assets/img/adopt5.png",
  },
  {
    "data-id": 6,
    "data-name": "Forest Spirit - Briar",
    "data-price": 3500,
    "data-image": "../assets/img/adopt6.png",
  },
];

//to add items to the cart/cradle
const cradleItemsList = document.getElementById("cradleItemsList");
const addButtons = document.querySelectorAll(".addButton");
const cradleModal = new bootstrap.Modal(document.getElementById("cradleModal"));
const total = document.querySelector(".total");
const itemsInCradle = document.getElementById("totalItems");

//cradle array
let cradle = [];

//add 'click' listeners to add to cradle buttons
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const creatureId = parseInt(button.dataset.id);
    addToCradle(creatureId);
  });
});


//add creature to cart array
function addToCradle(id){
  const existingItem = cradle.find((item) => item['data-id'] === id);

  let inputID = "";
  if (id === 1) inputID = "azuronInput";
  if (id === 2) inputID = "yukiInput";
  if (id === 3) inputID = "aureliaInput";
  if (id === 4) inputID = "luminaInput";
  if (id === 5) inputID = "starwindInput";
  if (id === 6) inputID = "briarInput";

  const creatureCardInput = document.getElementById(inputID);
  const quantityToAdd = creatureCardInput ? parseInt(creatureCardInput.value) || 1 : 1;

  if (existingItem) {
    existingItem.numberOfUnits += quantityToAdd;
  } else {
    const item = creatures.find((product) => product['data-id'] === id);

    cradle.push({
      ...item,
      numberOfUnits : quantityToAdd,
    });
  }

  updateCradle();
}

//update cradle/cart
function updateCradle(){
  displayCradleItems();
  displayTotal();
}

//calculate and render Total
function displayTotal(){
  let totalPrice = 0;
  let totalItems = 0;

  cradle.forEach((item) => {
    totalPrice += item['data-price'] * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  total.innerHTML = `TOTAL: R ${totalPrice.toFixed(2)}`;
  itemsInCradle.innerHTML = `${totalItems} Items`;
}

//display cradle/cart items
function displayCradleItems(){
  cradleItemsList.innerHTML = "";

  cradle.forEach((creature) => {
    cradleItemsList.innerHTML += `
    <div class="creaturesToBuy">
        <div class="creatureInfoLayout">
            <div class="creatureImg">
                <img src="${creature['data-image']}" alt="${creature['data-name']}">
            </div>
            <div class="creatureInfo">
                <div class="creatureInfoDetails">
                    <p class="nameOfCreature">${creature['data-name']}</p>
                    <p class="price">R ${creature['data-price'].toFixed(2)}</p>
                    <p class="starterPack">Includes the starter pack</p>
                    <div class="counterContainer cradleCounter">
                      <button class="counterBtn" id="decrement" onclick="decCount('${creature['data-id']}Input')">-</button>
                      <input type="text" value="${creature.numberOfUnits}" id="${creature['data-id']}Input" class="inputVal" readonly>
                      <button class="counterBtn" id="increment" onclick="incCount('${creature['data-id']}Input')">+</button>
                    </div>
                </div>
                <div class="creatureInfoDelete"> 
                  <div class="delete" onclick="removeFromCradle(${creature['data-id']})">
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </div>
            </div>
        </div>
        <hr class="cradleItemEndLine">
      </div>
    `;
  });

  cradleModal.show();
}

function removeFromCradle(id) {
  cradle = cradle.filter((item) => item['data-id'] !== id);
  updateCradle();
}

cradleModal.addEventListener('hidden.bs.modal', function () {
    cradleItemsList.innerHTML = "";
});















//form thank you message isn't working now?!?!
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

    const formModal = new bootstrap.Modal(document.getElementById("formModal"));

    formModal.show();
};

    formModal.addEventListener('hidden.bs.modal', function () {
    contactForm.reset();
}); 