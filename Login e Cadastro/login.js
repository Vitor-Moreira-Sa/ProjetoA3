document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio do formulário padrão
  
      const email = form.querySelector('#email-input').value;
      const password = form.querySelector('#password-input').value;
  
      // Verifica se o checkbox "Terms" está marcado
  
      // Verifica se o e-mail contém '@'
      if (email.indexOf('@') === -1) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }
  
      // Se todas as verificações passarem, redireciona para a página desejada
      fetch("http://localhost:3001/account/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email }),
    })
      .then((x) => x.json())
      .then((x) => {
        alert(x.content);
        window.location.href = "/login.html";
      });
    });
  
    // Adiciona um redirecionamento simples para o botão de login
    const cadastroButton = form.querySelector('#cadastro-button');
     cadastroButton.addEventListener("click", function () {
       window.location.href = "./cadastro.html";
     });
  });