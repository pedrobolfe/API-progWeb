let cidadesPr = ["Cascavel", "Missal", "Corbélia", "Foz do Iguaçu", "Teste"];

const selectCidades = document.getElementById("cidades");
const cidadeContainer = document.getElementById("labelCidades");

const tipoConsulta = document.getElementById("tipoConsulta");
const formConsulta = document.getElementById("consulta");
const labelForm = document.getElementById("labelForm");
const inputForm = document.getElementById("inputForm");

const msgErro = document.getElementById("error-mensagem");

const container = document.getElementById('responses');

const haveItem = document.getElementById('haveItem'); // saber se tiver item

// Preenchendo o select de cidades
cidadesPr.forEach(cidade => {
    const option = document.createElement("option");
    option.value = cidade;
    option.textContent = cidade;
    selectCidades.appendChild(option);
});

async function getViaCep() {
    if (tipoConsulta.value === "cep") { // consultar endereco por cep
        const regexCep = /^\d{5}-?\d{3}$/;
        if (inputForm.value.length !== 8 && inputForm.value.length !== 9 || !regexCep.test(inputForm.value)) {
            msgErro.hidden = false;
            msgErro.textContent = "Formato invalido, formato esperado (00000-000 ou 00000000).";
            return null;
        } 

        msgErro.hidden = true;
        let resp;
        try {
            const url = `https://viacep.com.br/ws/${inputForm.value}/json/`;
            const response = await fetch(url);
            resp = await response.json();
        } catch (err) {
            msgErro.hidden = false;
            msgErro.textContent = "Erro na consulta. Verifique sua conexão.";
            console.error("Erro ao consultar o CEP:", err);
        }

        if (resp?.erro){
            msgErro.hidden = false;
            msgErro.textContent = "CEP consultado não foi encontrado na base de dados.";
            return null;
        }
        
        const newResponse = document.createElement('div');
        newResponse.classList.add('response', 'm-3');

        newResponse.innerHTML = `
        <div class="response m-3">
            <div class="card shadow-lg border-0 rounded-4">
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-house-door"> <strong>Logradouro:</strong></i>
                            <span>${resp.logradouro}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-building"> <strong>Bairro:</strong></i>
                            <span>${resp.bairro}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-geo-alt"> <strong>Cidade:</strong></i>
                            <span>${resp.localidade}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-globe"> <strong>Estado:</strong></i>
                            <span>${resp.estado}-${resp.uf}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-postcard"> <strong>CEP:</strong></i>
                            <span>${resp.cep}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <i class="bi bi-compass"> <strong>Região:</strong></i>
                            <span>${resp.regiao}</span>
                        </li>
                    </ul>
                </div>
                <div class="card-footer text-center bg-light text-muted">
                    <small>Consultado via ViaCEP</small>
                </div>
            </div>
        </div>
        `;
        container.appendChild(newResponse);
    } else if (tipoConsulta.value === "rua") {
        if (inputForm.value.length <= 3){
            msgErro.hidden = false;
            msgErro.textContent = "Digite mais de 3 caracteres";
            return null; 
        }
        if (!selectCidades.value){
            msgErro.hidden = false;
            msgErro.textContent = "Escolha uma cidade";
            return null;
        }
        msgErro.hidden = true;

        let resps;
        try {
            const url = `https://viacep.com.br/ws/PR/${selectCidades.value}/${inputForm.value}/json/`;
            const response = await fetch(url);
            resps = await response.json();
        }  catch (err) {
            msgErro.hidden = false;
            msgErro.textContent = "Erro na consulta. Verifique sua conexão.";
            console.error("Erro ao consultar o CEP:", err);
        }
        

        if (resps[0]?.erro || resps.length === 0){
            msgErro.hidden = false;
            msgErro.textContent = "Nenhum CEP encontrado";
            return null;
        }

        resps.forEach(resp => {
            const newResponse = document.createElement('div');
            newResponse.classList.add('response', 'm-3');

            newResponse.innerHTML = `
            <div class="response m-3">
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-house-door"> <strong>Logradouro:</strong></i>
                                <span>${resp.logradouro}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-building"> <strong>Bairro:</strong></i>
                                <span>${resp.bairro}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-geo-alt"> <strong>Cidade:</strong></i>
                                <span>${resp.localidade}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-globe"> <strong>Estado:</strong></i>
                                <span>${resp.estado}-${resp.uf}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-postcard"> <strong>CEP:</strong></i>
                                <span>${resp.cep}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <i class="bi bi-compass"> <strong>Região:</strong></i>
                                <span>${resp.regiao}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer text-center bg-light text-muted">
                        <small>Consultado via ViaCEP</small>
                    </div>
                </div>
            </div>
            `;
            container.appendChild(newResponse);
        });
    }
}

function limparForm(){
    inputForm.value = "";
    selectCidades.value = "";
}

function limparConsultas(){
    container.innerHTML = "";
    haveItem.hidden = false;
}

// Evento de mudança para tipo de consulta
tipoConsulta.addEventListener("change", () => {
    formConsulta.hidden = false; // Exibe o formulário principal

    if (tipoConsulta.value === "cep") {
        labelForm.textContent = "CEP:";
        inputForm.placeholder = "Digite aqui o CEP, exemplo 00000-000";
        // exibir e ocultar outros elementos
        labelForm.hidden = false;
        selectCidades.hidden = true;
        cidadeContainer.hidden = true; // Esconde o select
    } else if (tipoConsulta.value === "rua") {
        inputForm.placeholder = "Digite aqui a rua";
        // exibir e ocultar outros elementos
        labelForm.hidden = true;
        selectCidades.hidden = false;
        cidadeContainer.hidden = false;
    }
});

formConsulta.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = event.target.querySelector('button[type="submit"]');

    if (submitButton.disabled) {
        return; 
    }

    submitButton.disabled = true;

    try {
        await getViaCep();
        haveItem.hidden = true;
    } catch (error) {
        console.error(error);
    }

    setTimeout(() =>{ // evitar duplo clique
        submitButton.disabled = false;
    }, 1500);
});