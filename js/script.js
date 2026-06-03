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