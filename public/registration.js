async function SubmitData () {
  const login = document.querySelector("#Name_input");
  const email = document.querySelector('#Email_input');
  const pass = document.querySelector('#Password_input');
  const usertype = document.querySelector('#Select_input');
  const button = document.querySelector('#Submit_input');
  button.addEventListener('click', async () => {
    console.log(login.value, ' ', email.value);
    const response = await fetch( '/api/registration', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({username: login.value,
                            email: email.value,
                            password: pass.value,
                            usertype: usertype.value})
    }) 
    console.log(response);
  });
}

SubmitData();
