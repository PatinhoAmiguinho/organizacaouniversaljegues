// Inicializar o Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCy6aj1ufnGB3UcIm6h_ovclx3Zi9ShMtU",
    authDomain: "jegueproject-8c18d.firebaseapp.com",
    projectId: "jegueproject-8c18d",
    storageBucket: "jegueproject-8c18d.appspot.com",
    messagingSenderId: "364972448163",
    appId: "1:364972448163:web:82d2cfcc989509d2dfe216"
  });
  
  // Recuperar os elementos do formulário
  const form = document.querySelector("#form-login");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const emailValue = email.value;
    const passwordValue = password.value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .then(() => {
        // Redirecionar o usuário para a página restrita
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  