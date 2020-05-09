const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const clearBtn = document.querySelector("#btn-clear");
const addBtn = document.querySelector("#btn-add");
const listExpenses = document.querySelector("#list-expenses");
const totalAmountSpan = document.querySelector("#total-amount");

let totalAmount = 0;

totalAmountSpan.innerHTML = totalAmount

const clear = () => {
    reasonInput.value= "";
    amountInput.value = "";
}

addBtn.addEventListener("click", () => {
  const reasonEntered = reasonInput.value;
  const amountEntered = amountInput.value;

  if (
    reasonEntered.trim().length <= 0 ||
    amountEntered <= 0 ||
    amountEntered.trim().length <= 0
  ) {
      
    const alert = document.createElement("ion-alert");
    alert.header = "Invalid Input";
    alert.message = "Reason / Amount is not Valid!";
    alert.buttons = ["Okay"]
    document.body.appendChild(alert);
    return alert.present();
      
  }

  const item = document.createElement("ion-item");
  item.textContent = reasonEntered + " : $"+ amountEntered;
  listExpenses.appendChild(item);
  clear();
  totalAmount += +amountEntered;
  totalAmountSpan.innerHTML = totalAmount;
});

clearBtn.addEventListener("click", clear);
