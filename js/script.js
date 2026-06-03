//input counter: eerste een werk maar die res doen nie... wat actually gebeur is wanneer ek die ondertoe-er counters increase of decrease
function decCount(){
    let num = document.getElementById('inputVal').value;
    if(num > 1){
      num --;
    }
    document.getElementById('inputVal').value = num;
};

function incCount(){
    let num = document.getElementById('inputVal').value;
    if(num < 10){
      num ++;
    }
    document.getElementById('inputVal').value = num;
};



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










//adding items to the cart






//now you have to let the input counter totals reflect in the cart when adding an item



//numbers/prices reflect on the total. You can use the calculator class exercise for reference on that I think :)




//creating a functional search bar


