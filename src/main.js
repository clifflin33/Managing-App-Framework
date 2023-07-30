var activeTab = null;
var activeContent = null;

window.onload = function() {
    start();
}

function start() {
    // Set the first tab as active on page load
    const firstTabButton = document.getElementById("1");
    switchTab(firstTabButton);
}

function switchTab(clickedTab) {
    // Check if the clicked tab is already active (no need to do anything)
    if (clickedTab === activeTab) {
        return;
    }

    // Deactivate the previously active tab and content
    if (activeTab) {
        activeTab.classList.remove("tab-button--active");
    }
    if (activeContent) {
        activeContent.classList.remove("tab-content--active");
    }

    // Activate the clicked tab and its corresponding content
    clickedTab.classList.add("tab-button--active");
    activeTab = clickedTab;

    const contentId = "content" + activeTab.id;
    activeContent = document.getElementById(contentId);
    activeContent.classList.add("tab-content--active");

    //display tab2 content
    if (activeTab.id === "2") {
        createInitialRow();
    }
}

//tab 2 table functionality

function createInitialRow() {
    // Create a new row and append it to the table body
    const tableBody = document.getElementById("tableBody");
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
  
    // Set some initial values for the first row
    cell1.innerHTML = "<input type='text' value='Data 1' class='editable'>";
    cell2.innerHTML = "<input type='text' value='Data 2' class='editable'>";
  
    // Add event listeners to the editable elements
    cell1.addEventListener("click", onCellClick);
    cell2.addEventListener("click", onCellClick);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Row";
    removeButton.classList.add("table2--button");
    removeButton.addEventListener("click", function() {
    removeRow(newRow); // Pass the row element to the removeRow function
    });

    const cell3 = newRow.insertCell(2);
    cell3.appendChild(removeButton);
  }
  
  function addRow() {
    // Create a new row and append it to the table body
    const tableBody = document.getElementById("tableBody");
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
  
    // Set default values for the new row (empty editable elements)
    cell1.innerHTML = "<input type='text' value='' class='editable'>";
    cell2.innerHTML = "<input type='text' value='' class='editable'>";
  
    // Add event listeners to the editable elements
    cell1.addEventListener("click", onCellClick);
    cell2.addEventListener("click", onCellClick);

    const removeButton = document.createElement("button");
    removeButton.classList.add("table2--button");
    removeButton.innerText = "Remove Row";
    removeButton.addEventListener("click", function() {
    removeRow(newRow); // Pass the row element to the removeRow function
    });

    const cell3 = newRow.insertCell(2);
    cell3.appendChild(removeButton);
  }

  function removeRow(row) {
    const tableBody = document.getElementById("tableBody");
    tableBody.removeChild(row);
  }
  
  function onCellClick(event) {
    const cell = event.target;
    const currentValue = cell.textContent.trim();
    cell.innerHTML = `<input type='text' value='${currentValue}' class='editable'>`;
    const inputElement = cell.querySelector("input");
    inputElement.focus();
    inputElement.addEventListener("blur", onInputBlur);
    inputElement.addEventListener("keypress", onInputKeyPress);
  }
  
  function onInputBlur(event) {
    const inputElement = event.target;
    const cell = inputElement.parentElement;
    const newValue = inputElement.value.trim();
    cell.innerHTML = newValue !== "" ? newValue : " ";
  }
  
  function onInputKeyPress(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }