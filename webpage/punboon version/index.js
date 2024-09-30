setTimeout(() => {
  document.querySelector('.home').classList.add('hidden'); // Hide the initial interface
  document.querySelector('.new-interface').classList.remove('hidden'); // Show the new interface
  document.querySelector('.new-interface').style.transform = 'translateY(0)'; // Set the final position
}, 1000);