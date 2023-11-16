//* navbar items
const navbarItems = [
  {
    title: "الرئيسية",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
  {
    title: "الفاعليات",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
  {
    title: "التصاريح",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
  {
    title: "دعم الفاعليات",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
  {
    title: "المساعدة",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
  {
    title: "الاعدادات",
    url: "https://chat.openai.com/c/95f1abe4-e1c8-4c99-b66e-86be1152c614",
    notificationNumber: "5",
  },
];

const navbarItemsContainer = document.getElementById("navbar-middle");
navbarItems.forEach((item) => {
  const element = document.createElement("a");
  element.classList.add("navbar-item");
  element.href = item.url;

  element.innerHTML = `
          <p>${item.title}</p>
          <div class="notification">
            <p class="notification-number">${item.notificationNumber}</p>
          </div>
      `;

  navbarItemsContainer.appendChild(element);
});
// ---- drop down menu ----
const dropdownContent = document.getElementById("dropdown-content");
navbarItems.forEach((item) => {
  const element = document.createElement("a");
  element.classList.add("navbar-item");
  element.href = item.url;

  element.innerHTML = `
          <p>${item.title}</p>
          <div class="notification">
            <p class="notification-number">${item.notificationNumber}</p>
          </div>
      `;

  dropdownContent.appendChild(element);
});

//* table rows
const bodyRows = [
  {
    checked: true,
    number: "123456",
    name: "text",
    speakers: ["Mohamed", "Ali", "sara"],
    start: "12/5/2023",
    end: "12/5/2023",
    status: "closed",
    enroll: "100",
    options: ["option1", "option2", "option3"],
  },
  {
    checked: true,
    number: "123456",
    name: "text",
    speakers: ["Mohamed", "Ali", "sara"],
    start: "12/5/2023",
    end: "12/5/2023",
    status: "closed",
    enroll: "100",
    options: ["option1", "option2", "option3"],
  },
];

const tableBodyContainer = document.getElementById("table-body");

bodyRows.forEach((item) => {
  const element = document.createElement("tr");

  element.innerHTML = `
      <td>
          <input type="checkbox" id="checkbox1" name="checkbox1" checked=${
            item.checked
          } />
      </td>
      <td>
          <span>${item.number}</span>
          <span>
              <i class="fa-solid fa-circle" style="color: #55cb55"></i>
          </span>
      </td>
      <td>
          <span>${item.name}</span>
      </td>
      <td>
          <select id="select-container">
              <option value="option1" selected disabled>خيارات</option>
              ${item.options
                .map((option) => `<option value="${option}">${option}</option>`)
                .join("")}
          </select>
      </td>
  `;
  tableBodyContainer.appendChild(element);
});

//* categories

const categories = [
  {
    title: "عرض القوائم",
    id: "1",
  },
  {
    title: "بحث",
    id: "2",
  },
  {
    title: "طلب تصريح",
    id: "3",
  },
];
let chosenCategory = "1";
let changeSelected = (id) => {
  // const previousChosen = document.getElementById(chosenCategory);
  // previousChosen.classList.remove("category-chosen");
  // previousChosen.classList.add("category");
  // chosenCategory = id;
  // const element = document.getElementById(id);
  // element.classList.remove("category");
  // element.classList.add("category-chosen");
  // Select the parent div
  let parentDiv = document.getElementById("parentDiv");

  // Get all child elements
  let childElements = parentDiv.children;

  // Now you can work with the childElements
  for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i].tagName); // This will log the tag name of each child
  }
};

const categoriesContainer = document.getElementById("categories-container");

categories.forEach((item) => {
  const element = document.createElement("div");
  element.classList.add(
    `${chosenCategory === item.id ? "category-chosen" : "category"}`
  );

  element.innerHTML = `
      <div id=${item.id} onclick="changeSelected(${item.id})">${item.title}</div>
    `;
  categoriesContainer.appendChild(element);
});
document.addEventListener("DOMContentLoaded", (event) => {
  new Sortable(list1, {
    group: "shared",
    animation: 150,
    onEnd: function (/**Event*/ evt) {
      var itemEl = evt.item; // dragged HTMLElement
      console.log("Item dropped in list1:", itemEl);
      // Additional logic for drop event
    },
  });

  new Sortable(list2, {
    group: "shared",
    animation: 150,
    onEnd: function (/**Event*/ evt) {
      var itemEl = evt.item; // dragged HTMLElement
      console.log("Item dropped in list2:", itemEl);
      // Additional logic for drop event
    },
  });

  new Sortable(list3, {
    group: "shared",
    animation: 150,
    onEnd: function (/**Event*/ evt) {
      var itemEl = evt.item; // dragged HTMLElement
      console.log("Item dropped in list3:", itemEl);
      // Additional logic for drop event
    },
  });
});

//* stepper
let currentStep = 1;
const totalSteps = 5;

function updateStep(stepNumber) {
  // Ensure the step number is within the valid range
  if (stepNumber < 1 || stepNumber > totalSteps) {
    return;
  }

  // Update the current step
  currentStep = stepNumber;
  const steps = document.querySelectorAll(".step");
  const connectors = document.querySelectorAll(".connector");

  // Update steps and connectors
  steps.forEach((step, index) => {
    if (index < stepNumber) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  connectors.forEach((connector, index) => {
    connector.style.background = index < stepNumber - 1 ? "#000" : "#ddd";
  });

  // Update content visibility
  for (let i = 1; i <= totalSteps; i++) {
    const content = document.getElementById(`content-${i}`);
    content.style.display = i === stepNumber ? "block" : "none";
  }

  // Update button visibility
  const backButton = document.getElementById("back-button");
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");

  backButton.style.display = stepNumber === 1 ? "none" : "inline-block";
  nextButton.style.display =
    stepNumber === totalSteps ? "none" : "inline-block";
  submitButton.style.display =
    stepNumber === totalSteps ? "inline-block" : "none";
}

function moveStep(offset) {
  updateStep(currentStep + offset);
}

function submitForm() {
  alert("Form submitted!");
  // Implement actual submit logic here
}

// Initialize to the first step
updateStep(currentStep);
