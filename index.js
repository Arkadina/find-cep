const btn = document.querySelector("#app button");
const input = document.querySelector("#app input");
const main = document.querySelector("#app main");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let cep = input.value;
    newCep = cep.replace(/([-])/, "").replace(" ", "").replace(".", "");
    getCEP(newCep);
});

function getCEP(cep) {
    const resp = fetch(`https://viacep.com.br/ws/${cep}/json/`);

    resp.then((res) => {
        res.json().then((data) => {
            if (data.erro == true) {
                main.innerHTML = `<p>Erro: CEP inválido</p>`;
            } else {
                if (data) {
                    let html = "";
                    Object.keys(data).forEach((item, index) => {
                        html += `<p>${item}: ${data[item]}</p>`;
                    });
                    main.innerHTML = html;
                }
            }
        });
    }).catch((err) => {
        let html = `<p>Ops, algum erro ocorreu! ${err}</p>`;
        main.innerHTML = html;
    });
}

// 01001000
