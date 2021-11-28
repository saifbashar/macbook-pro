// Memory variable
const memory = document.getElementById('memory');
const memoryCost = document.getElementById('memory-cost');

// Storage variable
const storage = document.getElementById('storage');
const storageCost = document.getElementById('storage-cost');

// Delivery charges variable
const delivery = document.getElementById('delivery');
const deliveryCost = document.getElementById('delivery-cost');

// Total cost variable
const totalCostWithoutPromo = document.getElementById(
  'total-cost-without-promo'
);
// After promo variable
const totalCostAfterPromo = document.getElementById('total-cost-after-promo');

// Apply Promo code variable

const promoField = document.getElementById('promo-code-field');
const promoButton = document.getElementById('promo-code-apply');

// All Function started

// update extra cost
function updateExtraCost(idAttribute) {
  if (idAttribute == 'memory-8gb') {
    memoryCost.innerText = 0;
  } else if (idAttribute == 'memory-16gb') {
    memoryCost.innerText = 180;
  } else if (idAttribute == 'storage-256gb') {
    storageCost.innerText = 0;
  } else if (idAttribute == 'storage-512gb') {
    storageCost.innerText = 100;
  } else if (idAttribute == 'storage-1tb') {
    storageCost.innerText = 180;
  } else if (idAttribute == 'delivery-free') {
    deliveryCost.innerText = 0;
  } else if (idAttribute == 'delivery-charge') {
    deliveryCost.innerText = 20;
  } else {
  }

  totalCost();
}
// Total Cost function
function totalCost() {
  totalCostWithoutPromo.innerText =
    1299 +
    parseInt(memoryCost.innerText) +
    parseInt(deliveryCost.innerText) +
    parseInt(storageCost.innerText);
  totalCostAfterPromo.innerText = totalCostWithoutPromo.innerText;
}

// Apply promo function
function applyPromo(promoCode) {
  if (promoCode.toLowerCase() == 'stevekaku') {
    const totalDiscount = parseInt(totalCostWithoutPromo.innerText) * 0.2;
    totalCostAfterPromo.innerText =
      parseInt(totalCostWithoutPromo.innerText) - totalDiscount;
    promoField.value = '';
  }
  else{
    promoField.value = '';
  }
}

// All event handler

// Memory Event handler

memory.addEventListener('click', function (event) {
  updateExtraCost(event.target.getAttribute('id'));
});

// Storage event handler
storage.addEventListener('click', function (event) {
  updateExtraCost(event.target.getAttribute('id'));
});

// Delivery Event handler
delivery.addEventListener('click', function (event) {
  updateExtraCost(event.target.getAttribute('id'));
});

// Promo button event handler
promoButton.addEventListener('click', function () {
  applyPromo(promoField.value);
});
