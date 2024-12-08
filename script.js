const cidadesPr = ["Abatiá", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Altamira do Paraná", "Alto Paraná",
    "Alto Piquiri", "Altônia", "Alvorada do Sul", "Amaporã", "Ampére", "Anahy", "Andirá", "Ângulo",
    "Antonina", "Antônio Olinto", "Apucarana", "Arapongas", "Arapoti", "Arapuã", "Araruna", "Araucária",
    "Ariranha do Ivaí", "Assaí", "Assis Chateaubriand", "Astorga", "Atalaia", "Balsa Nova", "Bandeirantes",
    "Barbosa Ferraz", "Barracão", "Barra do Jacaré", "Bela Vista da Caroba", "Bela Vista do Paraíso",
    "Bituruna", "Boa Esperança", "Boa Esperança do Iguaçu", "Boa Ventura de São Roque", "Boa Vista da Aparecida",
    "Bocaiúva do Sul", "Bom Jesus do Sul", "Bom Sucesso", "Bom Sucesso do Sul", "Borrazópolis", "Braganey",
    "Brasilândia do Sul", "Cafeara", "Cafelândia", "Cafezal do Sul", "Califórnia", "Cambará", "Cambé",
    "Cambira", "Campina da Lagoa", "Campina do Simão", "Campina Grande do Sul", "Campo Bonito", "Campo do Tenente",
    "Campo Largo", "Campo Magro", "Campo Mourão", "Cândido de Abreu", "Candói", "Cantagalo", "Capanema",
    "Capitão Leônidas Marques", "Carambeí", "Carlópolis", "Cascavel", "Castro", "Catanduvas", "Centenário do Sul",
    "Cerro Azul", "Céu Azul", "Chopinzinho", "Cianorte", "Cidade Gaúcha", "Clevelândia", "Colombo",
    "Colorado", "Congonhinhas", "Conselheiro Mairinck", "Contenda", "Corbélia", "Cornélio Procópio",
    "Coronel Domingos Soares", "Coronel Vivida", "Corumbataí do Sul", "Cruz Machado", "Cruzeiro do Iguaçu",
    "Cruzeiro do Oeste", "Cruzeiro do Sul", "Cruz Maltina", "Curitiba", "Curiúva", "Diamante do Norte",
    "Diamante do Sul", "Diamante D'Oeste", "Dois Vizinhos", "Douradina", "Doutor Camargo", "Enéas Marques",
    "Engenheiro Beltrão", "Entre Rios do Oeste", "Esperança Nova", "Espigão Alto do Iguaçu", "Farol",
    "Faxinal", "Fazenda Rio Grande", "Fênix", "Fernandes Pinheiro", "Figueira", "Flor da Serra do Sul",
    "Floraí", "Floresta", "Florestópolis", "Flórida", "Formosa do Oeste", "Foz do Iguaçu", "Foz do Jordão",
    "Francisco Alves", "Francisco Beltrão", "General Carneiro", "Godoy Moreira", "Goioerê", "Goioxim",
    "Grandes Rios", "Guaíra", "Guairaçá", "Guamiranga", "Guapirama", "Guaporema", "Guaraci", "Guaraniaçu",
    "Guarapuava", "Guaraqueçaba", "Guaratuba", "Honório Serpa", "Ibaiti", "Ibema", "Ibiporã", "Icaraíma",
    "Iguaraçu", "Iguatu", "Imbaú", "Imbituva", "Inácio Martins", "Inajá", "Indianópolis", "Ipiranga",
    "Iporã", "Iracema do Oeste", "Irati", "Iretama", "Itaguajé", "Itaipulândia", "Itambaracá", "Itambé",
    "Itapejara d'Oeste", "Itaperuçu", "Itaúna do Sul", "Ivaí", "Ivaiporã", "Ivaté", "Ivatuba", "Jaboti",
    "Jacarezinho", "Jaguapitã", "Jaguariaíva", "Jandaia do Sul", "Janiópolis", "Japira", "Japurá",
    "Jardim Alegre", "Jardim Olinda", "Jataizinho", "Jesuítas", "Joaquim Távora", "Jundiaí do Sul",
    "Juranda", "Jussara", "Kaloré", "Lapa", "Laranjal", "Laranjeiras do Sul", "Leópolis", "Lidianópolis",
    "Lindoeste", "Loanda", "Lobato", "Londrina", "Luiziana", "Lunardelli", "Lupionópolis", "Mallet",
    "Mamborê", "Mandaguaçu", "Mandaguari", "Mandirituba", "Manfrinópolis", "Mangueirinha", "Manoel Ribas",
    "Marechal Cândido Rondon", "Maria Helena", "Marialva", "Marilândia do Sul", "Marilena", "Mariluz",
    "Maringá", "Mariópolis", "Maripá", "Marmeleiro", "Marquinho", "Marumbi", "Matelândia", "Matinhos",
    "Mato Rico", "Mauá da Serra", "Medianeira", "Mercedes", "Mirador", "Miraselva", "Missal",
    "Moreira Sales", "Morretes", "Munhoz de Melo", "Nossa Senhora das Graças", "Nova Aliança do Ivaí",
    "Nova América da Colina", "Nova Aurora", "Nova Cantu", "Nova Esperança", "Nova Esperança do Sudoeste",
    "Nova Fátima", "Nova Laranjeiras", "Nova Londrina", "Nova Olímpia", "Nova Prata do Iguaçu",
    "Nova Santa Bárbara", "Nova Santa Rosa", "Nova Tebas", "Novo Itacolomi", "Ortigueira", "Ourizona",
    "Ouro Verde do Oeste", "Paiçandu", "Palmas", "Palmeira", "Palmital", "Palotina", "Paraíso do Norte",
    "Paranacity", "Paranaguá", "Paranapoema", "Paranavaí", "Pato Bragado", "Pato Branco", "Paula Freitas",
    "Paulo Frontin", "Peabiru", "Perobal", "Pérola", "Pérola d'Oeste", "Piên", "Pinhais", "Pinhal de São Bento",
    "Pinhalão", "Pinhão", "Piraí do Sul", "Piraquara", "Pitanga", "Pitangueiras", "Planaltina do Paraná",
    "Planalto", "Ponta Grossa", "Pontal do Paraná", "Porecatu", "Porto Amazonas", "Porto Barreiro",
    "Porto Rico", "Porto Vitória", "Prado Ferreira", "Pranchita", "Presidente Castelo Branco", "Primeiro de Maio",
    "Prudentópolis", "Quarto Centenário", "Quatiguá", "Quatro Barras", "Quatro Pontes", "Quedas do Iguaçu",
    "Querência do Norte", "Quinta do Sol", "Quitandinha", "Ramilândia", "Rancho Alegre", "Rancho Alegre d'Oeste",
    "Realeza", "Rebouças", "Renascença", "Reserva", "Reserva do Iguaçu", "Ribeirão Claro", "Ribeirão do Pinhal",
    "Rio Azul", "Rio Bom", "Rio Bonito do Iguaçu", "Rio Branco do Ivaí", "Rio Branco do Sul", "Rio Negro",
    "Rolândia", "Roncador", "Rondon", "Rosário do Ivaí", "Sabáudia", "Salgado Filho", "Salto do Itararé",
    "Salto do Lontra", "Santa Amélia", "Santa Cecília do Pavão", "Santa Cruz de Monte Castelo", "Santa Fé",
    "Santa Helena", "Santa Inês", "Santa Isabel do Ivaí", "Santa Izabel do Oeste", "Santa Lúcia",
    "Santa Maria do Oeste", "Santa Mariana", "Santa Mônica", "Santana do Itararé", "Santa Tereza do Oeste",
    "Santa Terezinha de Itaipu", "Santo Antônio da Platina", "Santo Antônio do Caiuá", "Santo Antônio do Paraíso",
    "Santo Antônio do Sudoeste", "Santo Inácio", "São Carlos do Ivaí", "São Jerônimo da Serra",
    "São João", "São João do Caiuá", "São João", "São João do Caiuá", "São João do Ivaí","São João do Triunfo","São Jorge do Ivaí","São Jorge do Patrocínio","São José da Boa Vista",
    "São José das Palmeiras","São Manoel do Paraná","São Mateus do Sul","São Miguel do Iguaçu","São Pedro do Iguaçu", "São Pedro do Paraná","São Sebastião da Amoreira","São Tomé","Sapopema","Sarandi","Saudade do Iguaçu","Sengés","Serranópolis do Iguaçu", "Sertaneja",
    "Sertanópolis", "Siqueira Campos","Sulina", "Tamarana", "Tamboara", "Tapejara","Tapira","Teixeira Soares","Telêmaco Borba","Terra Boa", "Terra Rica","Terra Roxa","Tibagi", "Tijucas do Sul","Toledo", "Tomazina", "Três Barras do Paraná", "Tunas do Paraná", "Tuneiras do Oeste", "Tupãssi", "Turvo", "Ubiratã", "Umuarama","União da Vitória", "Uniflor", "Uraí", "Ventania","Vera Cruz do Oeste", "Verê","Virmond","Vitorino","Wenceslau Braz","Xambrê"];

const tipoConsulta = document.getElementById("tipoConsulta");
const formConsulta = document.getElementById("consulta");
const labelForm = document.getElementById("labelForm");
const inputForm = document.getElementById("inputForm");

const msgErro = document.getElementById("error-mensagem");

const container = document.getElementById('responses');

const haveItem = document.getElementById('haveItem'); // saber se tiver item

const inputCidades = document.getElementById("searchCidades");
const listaCidades = document.getElementById("cidadeLista");

inputCidades.addEventListener("input", () => {
    const valor = inputCidades.value.toLowerCase();
    listaCidades.innerHTML = ""; // Limpa a lista

    if (valor) {
        const cidadesFiltradas = cidadesPr.filter(cidade =>
            cidade.toLowerCase().includes(valor)
        );

        if (cidadesFiltradas.length > 0) {
            listaCidades.style.display = "block"; // Exibe a lista
            cidadesFiltradas.forEach(cidade => {
                const item = document.createElement("li");
                item.textContent = cidade;
                item.className = "list-group-item";
                item.addEventListener("click", () => {
                    inputCidades.value = cidade; 
                    listaCidades.style.display = "none"; 
                });
                listaCidades.appendChild(item);
            });
        } else {
            listaCidades.style.display = "none"; 
        }
    } else {
        listaCidades.style.display = "none"; 
    }
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
        if (!inputCidades.value){
            msgErro.hidden = false;
            msgErro.textContent = "Escolha uma cidade";
            return null;
        }
        msgErro.hidden = true;

        let resps;
        try {
            const url = `https://viacep.com.br/ws/PR/${inputCidades.value}/${inputForm.value}/json/`;
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
    inputCidades.value = "";
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
        searchCidades.hidden = true;
        labelCidades.hidden = true; // Esconde o select
    } else if (tipoConsulta.value === "rua") {
        inputForm.placeholder = "Digite aqui a rua";
        // exibir e ocultar outros elementos
        labelForm.hidden = true;
        searchCidades.hidden = false;
        labelCidades.hidden = false;
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