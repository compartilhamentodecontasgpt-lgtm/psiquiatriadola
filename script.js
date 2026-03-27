// --- NAVEGAÇÃO ---
const pages = document.querySelectorAll('.page');
const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-page');
        
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// --- SALVAR DADOS AUTOMÁTICO ---
function salvarDados() {
    const dados = {
        nome: document.getElementById('nome').value,
        nascimento: document.getElementById('nascimento').value,
        telefone: document.getElementById('telefone').value,
        queixa: document.getElementById('queixa').value,
        historia: document.getElementById('historia').value,
        soape: {
            s: document.getElementById('s_subjetivo').value,
            o: document.getElementById('o_objetivo').value,
            a: document.getElementById('a_analise').value,
            p: document.getElementById('p_plano').value,
            e: document.getElementById('e_evolucao').value
        }
    };
    
    localStorage.setItem('prontuario', JSON.stringify(dados));
    alert('✅ Dados salvos com sucesso!');
}

// --- RECEITUÁRIO ---
let medicamentos = JSON.parse(localStorage.getItem('medicamentos') || '[]');

function salvarMedicamento() {
    const med = {
        nome: document.getElementById('med_nome').value,
        dose: document.getElementById('med_dose').value,
        poso: document.getElementById('med_poso').value,
        indicacao: document.getElementById('med_indicacao').value,
        riscos: document.getElementById('med_riscos').value,
        contra: document.getElementById('med_contra').value,
        colaterais: document.getElementById('med_colaterais').value
    };

    medicamentos.push(med);
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
    atualizarListaMeds();
    
    // Limpar campos
    document.getElementById('med_nome').value = '';
    document.getElementById('med_dose').value = '';
    alert('💊 Medicamento adicionado!');
}

function atualizarListaMeds() {
    const lista = document.getElementById('listaMedicamentos');
    lista.innerHTML = '';
    
    medicamentos.forEach((med, i) => {
        lista
