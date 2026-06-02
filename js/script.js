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
// Load existing cart from localStorage on page load, or start empty
let cart = JSON.parse(localStorage.getItem('cradleItems')) || [];

// Initial UI render on page load
updateCartUI();

// Event listener for add-to-cart buttons
document.querySelectorAll('.addButton').forEach(button => {
  button.addEventListener('click', (event) => {
    const creature = {
      id: event.target.getAttribute('data-id'),
      name: event.target.getAttribute('data-name'),
      price: parseFloat(event.target.getAttribute('data-price')),
      quantity: 1
    };
    addItemToCart(creature);
  });
});
// Moes ek nie hier die HTML insit om dit te kan wys nie?

function addItemToCart(newCreature) {
  const existingCreature = cart.find(item => item.id === newCreature.id);
  
  if (existingCreature) {
    existingCreature.quantity += 1;
  } else {
    cart.push(newCreature);
  }
  //moet ek nie hierdie =+ 1 laat reflect in my input counter nie? Hoe doen ek dit??
  
  // Save updated array to localStorage as a string string
  localStorage.setItem('cradleItems', JSON.stringify(cart));
  
  updateCartUI();
}

function updateCartUI() {
  const cartListDisplay = document.getElementById('cartItemsList');
  const cartTotalDisplay = document.getElementById('cartTotalPrice');
  
  if(!cartListDisplay) return; // Guard clause
  
  cartListDisplay.innerHTML = '';
  let totalCost = 0;
  
  cart.forEach(item => {
    const listItem = document.createElement('li');
    
    //delete dalk hierdie...
    listItem.textContent = `${item.name} x ${item.quantity} - R${item.price * item.quantity}`;
    cartListDisplay.appendChild(listItem);
    totalCost += item.price * item.quantity;
    //...tot hier delete
  });
  
  cartTotalDisplay.textContent = totalCost.toFixed(2);
}

// Function to send cart to your Node.js backend during checkout
async function checkoutCart() {
  try {
    const response = await fetch('http://localhost:3000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart })
    });
    
    const result = await response.json();
    if (result.success) {
      alert('Order placed!');
      cart = [];
      localStorage.removeItem('shoppingCart'); // Clear storage on success
      updateCartUI();
    }
  } catch (error) {
    console.error('Checkout failed:', error);
  }
}






//now you have to let the input counter totals reflect in the cart when adding an item



//numbers/prices reflect on the total. You can use the calculator class exercise for reference on that I think :)




//creating a functional search bar


