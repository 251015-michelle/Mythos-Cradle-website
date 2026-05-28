// Select all counter containers on the page
const counterContainers = document.querySelectorAll('.counterContainer');

counterContainers.forEach(container => {
  // Isolate elements within the current container
  const decrementBtn = container.querySelector('.decrement');
  const incrementBtn = container.querySelector('.increment');
  const input = container.querySelector('.counterNumber');

  // Handle Increment
  incrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(input.value) || 1;
    const max = parseInt(input.getAttribute('max')) || 5;

    if (currentValue < max) {
        input.value = currentValue + 1;
    }
  });

  // Handle Decrement (prevents going below zero if a min is set)
  decrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(input.value) || 1;
    const min = parseInt(input.getAttribute('min')) || 1;
    
    if (currentValue > min) {
        input.value = currentValue - 1;
    }
  });
});
