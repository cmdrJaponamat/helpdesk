async function SubmitData () {
  const login = document.querySelector("#Name_input");
  const pass = document.querySelector('#Password_input');
  const button = document.querySelector('#Submit_input');
  button.addEventListener('click', async () => {
    console.log(login.value, ' ', pass.value);
    const response = await fetch( '/api/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
                            username: login.value,
                            password: pass.value,
                            })
    });
    const str = response.url.split('/');
    console.log(response);
    if (response.status == 200) {
      window.location.replace(str[0] + '//' + str[2] + '/');
    }
  });
}

SubmitData();


const nameInput = document.querySelector("#Name_input");
const passInput = document.querySelector("#Password_input");
const subButton = document.querySelector("#Submit_input");
subButton.disabled = true;
let nameResultOfCheck = {result: false};
let passResultOfCheck = {result: false};

function inputValidator(inputItem, valueLength, errorMessage, resultCheck){
    let value;
    inputItem.addEventListener("blur", () => {
        value = inputItem.value
        if (!value || value.length < valueLength) {
            inputItem.className = "input_error";
            if (!inputItem.parentElement.children.item(2)) {
                const p = document.createElement("p");
                p.id = "error_message";
                p.textContent = errorMessage;
                inputItem.parentElement.append(p);
            }
            resultCheck.result = false;
        }
        else {
            inputItem.className = "";
            if (inputItem.parentElement.children.item(2)) {
                inputItem.parentElement.children.item(2).remove();
            }
            resultCheck.result = true;
        }
    });
}

function sumOfCheck(nameResult, passResult){
    return (nameResult && passResult);
}
function buttonActivator(nameResultOfCheck, passResultOfCheck){
    function setupErrorState(){
        let summOfCheckBool = sumOfCheck(nameResultOfCheck.result, passResultOfCheck.result);
        if (summOfCheckBool) {
            subButton.disabled = false;
            subButton.className = "";
            passInput.className = "";
            nameInput.className = "";
            return false;
        } else {
            subButton.className = "input_error";
            subButton.disabled = true;
            return true;
        }

    }
    subButton.addEventListener("mouseover", ()=> {
        setupErrorState();})
    nameInput.addEventListener("blur", () => {
        setupErrorState();})
    passInput.addEventListener("blur", () => {
        setupErrorState();})
}

inputValidator(nameInput, 3,
    "Username length must be more then 3 character", nameResultOfCheck);
inputValidator(passInput, 3,
    "Password length must be more then 5 character", passResultOfCheck);
buttonActivator(nameResultOfCheck, passResultOfCheck);

//const styleButton = document.getElementById("Day/Night");
//let styleState = 2;
//styleButton.addEventListener("click", () => {
//    if (styleState === 1) {
//        document.body.style.background = 'darkgray';
//        styleButton.textContent = "Day";
//        styleState = 2;
//    }
//    else {
//        document.body.style.background = 'antiquewhite';
//        styleButton.textContent = "Night";
//        styleState = 1;
//
//    }
//});
