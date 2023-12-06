document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("Cadastro");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // const nickname = form.querySelector('input[type="text"]').value;
    // const email = form.querySelector('input[type="text"]').value;
    // const password = form.querySelector('input[type="password"]').value;
    // const confirmPassword = form.querySelector('input[type="password"]').value;
    const nickname = form.querySelector("#user-input").value;
    const email = form.querySelector("#email-input").value;
    const password = form.querySelector("#password-input").value;
    const confirmPassword = form.querySelector("#confirm-password-input").value;
    const termsCheckbox = form.querySelector('input[type="checkbox"]');

    // Verifica se o checkbox "Terms" está marcado
    if (!termsCheckbox.checked) {
      alert("Você precisa concordar com os termos para se cadastrar.");
      return; // Impede a submissão do formulário
    }

    // Verifica se o e-mail contém '@'
    if (email.indexOf("@") === -1) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }
    const bodyData = { nickname, password, email };
    // Se todas as verificações passarem, redireciona para a página desejada
    fetch("http://localhost:3001/account/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname, password, email }),
    })
      .then((x) => x.json())
      .then((x) => {
        alert(x.content);
        window.location.href = "/login.html";
      });
  });

  // Adiciona um redirecionamento simples para o botão de login
  const loginButton = form.querySelector('button[type="submit"]');
  loginButton.addEventListener("click", function () {
    window.location.href = "/login.html";
  });
});
