const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".input");
const error = document.querySelector(".error");
const list = document.querySelector(".newList");
let completed = document.querySelector("#completedCount");

addBtn.addEventListener("click", () => {
    if (input.value === "") {
        showError();
    } else {
        removeError();
        createList();
        input.value = "";
    }
});


// this function adds new li element with textContent from input value when addBtn is clicked
function createList() {
    const newList = document.createElement("li");
    newList.textContent = input.value;
    newList.className = "list";
    list.appendChild(newList); // Append the new list item to the list

    // add delete button
    const deleteBtn = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");
    deleteBtn.appendChild(icon);
    list.appendChild(deleteBtn);

    // delete items
    deleteBtn.addEventListener("click", () => {
        list.removeChild(newList);
        list.removeChild(deleteBtn);
        countCompleted();
    });

    // mark as done
    newList.addEventListener("click", () => {
        newList.classList.toggle("markAsDone");
        countCompleted();
    });
}

// function for error message when input is empty
function showError() {
    const existingError = error.querySelector("p");
    if (!existingError) {
        const errorPrompt = document.createElement("p");
        errorPrompt.textContent = "Input must not be empty";
        error.appendChild(errorPrompt);
        console.log("error");
    }
}

// function to remove error message
function removeError() {
    const existingError = error.querySelector("p");
    if (existingError) {
        error.removeChild(existingError);
    }
}

// function to count all the elements that have the class name of markAsDone
function countCompleted() {
    completed.textContent = document.querySelectorAll(".markAsDone").length;
}