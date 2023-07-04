// Get the grid container element
var gridContainer = document.getElementById('grid-container');

// Define the item size and gap size
var itemSize = 15; // Adjust as needed
var gapSize = 1; // Adjust as needed

// Get the legend items
var legendItems = document.querySelectorAll('.legend-item');
var legendRadioButtons = document.querySelectorAll('.legend-item input[type="radio"]');

// Variable to store the last selected grid item
var lastSelectedGridItem = null;

// Function to handle click on legend item
function handleLegendItemClick() {
  // Remove the active class from all legend items
  legendItems.forEach(function (item) {
    item.classList.remove('active');
  });

  // Add the active class to the clicked legend item
  this.classList.add('active');

  // Get the value (color) of the selected legend item
  var selectedColor = this.getAttribute('data-color');

  // Set the selected color to the last selected grid item
  if (lastSelectedGridItem !== null) {
    lastSelectedGridItem.style.backgroundColor = selectedColor;
  }
}

// Function to handle change on legend radio buttons
function handleLegendRadioChange() {
  // Remove the active class from all legend items
  legendItems.forEach(function (item) {
    item.classList.remove('active');
  });

  // Add the active class to the parent legend item
  this.closest('.legend-item').classList.add('active');

  // Get the value (color) of the selected legend item
  var selectedColor = this.closest('.legend-item').getAttribute('data-color');

  // Set the selected color to the last selected grid item
  if (lastSelectedGridItem !== null) {
    lastSelectedGridItem.style.backgroundColor = selectedColor;
  }
}

// Add click event listener to legend items
legendItems.forEach(function (item) {
  item.addEventListener('click', handleLegendItemClick);
});

// Add change event listener to legend radio buttons
legendRadioButtons.forEach(function (radio) {
  radio.addEventListener('change', handleLegendRadioChange);
});

// Function to create a grid item element
function createGridItem() {
  let gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  // Add click event listener to grid item
  gridItem.addEventListener('click', function() {
    // Remove the selected class from all grid items
    gridContainer.querySelectorAll('.grid-item').forEach(function(item) {
      item.classList.remove('selected');
    });

    // Add the selected class to the clicked grid item
    this.classList.add('selected');

    // Update the last selected grid item
    lastSelectedGridItem = this;
  });

  return gridItem;
}

// Function to fill the grid container with grid items
function fillGridContainer() {
  var numColumns = 20;
  var numRows = 20;

  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numColumns; j++) {
      var gridItem = createGridItem();
      gridItem.style.width = itemSize + 'px';
      gridItem.style.height = itemSize + 'px';
      gridItem.style.margin = gapSize / 2 + 'px';
      gridContainer.appendChild(gridItem);
    }
  }
}

// Call the function to fill the grid container
fillGridContainer();

// Function to roll a dice
function rollDice(numDice, numSides) {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += Math.floor(Math.random() * numSides) + 1;
  }
  return total;
}

// Get the health button and health bar elements
const healthButton = document.getElementById('health-button');
const healthBar = document.getElementById('health-bar');

// Add event listener to the health button
healthButton.addEventListener('click', function() {
  // Roll the dice
  const resultH = rollDice(2, 6) + 4;

  // Clear the health bar content
  healthBar.innerHTML = '';
  healthBar.textContent = resultH + " ";
  // Display hearts emojis with spacing based on the resultH value
  for (let i = 0; i < resultH; i++) {
    const heartEmoji = document.createElement('i');
    heartEmoji.classList.add('em', 'em-heart');
    
    // Add spacing between the hearts
    if (i > 0) {
      heartEmoji.style.marginLeft = '3px'; // Adjust the spacing as needed
    }
    healthBar.appendChild(heartEmoji);
  }

  // Show the health bar
  
  healthBar.classList.remove('hidden');
  healthButton.classList.add('hidden');
});


// Get the stamina button and stamina bar elements
const staminaButton = document.getElementById('stamina-button');
const staminaBar = document.getElementById('stamina-bar');

// Add event listener to the health button
staminaButton.addEventListener('click', function() {
  // Roll the dice
  const resultS = rollDice(2, 6) + 4;

  // Clear the health bar content
  staminaBar.innerHTML = '';
  staminaBar.textContent = resultS + " ";
  // Display hearts emojis with spacing based on the resultH value
  for (let i = 0; i < resultS; i++) {
    const cloverEmoji = document.createElement('i');
    cloverEmoji.classList.add('em', 'em-four_leaf_clover');
    
    // Add spacing between the hearts
    if (i > 0) {
      cloverEmoji.style.marginLeft = '3px'; // Adjust the spacing as needed
    }
    staminaBar.appendChild(cloverEmoji);
  }

  // Show the health bar
  
  staminaBar.classList.remove('hidden');
  staminaButton.classList.add('hidden');
});


// Get the luck button and luck bar elements
const luckButton = document.getElementById('luck-button');
const luckBar = document.getElementById('luck-bar');

// Add event listener to the luck button
luckButton.addEventListener('click', function() {
  // Roll the dice
  const resultL = rollDice(1, 6) + 4 + 70;

  // Update the luck bar width and text
  luckBar.style.width = resultL + '%';
  luckBar.textContent = resultL - 70;

  // Show the luck bar and hide the button
  luckBar.classList.remove('hidden');
  luckButton.classList.add('hidden');
});
