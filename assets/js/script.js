// Objeto que armazena as transações (Estado da aplicação)
const Transaction = {
    all: [], // Nosso array que guardará os objetos

    add(transaction) {
        Transaction.all.push(transaction);
        console.log(Transaction.all);
    }
};

// Objeto que cuida do formulário
const Form = {
    description: document.querySelector('#description'),
    amount: document.querySelector('#amount'),
    category: document.querySelector('#category'),

    handleSave(event) {
        // 1. Desafio: Não deixar a página recarregar
        event.preventDefault();

        // 2. Criar o objeto com os dados capturados
        const newTransaction = {
            description: Form.description.value,
            amount: Form.amount.value,
            category: Form.category.value,
            date: new Date().toLocaleDateString('pt-BR')
        };

        // 3. Salvar no array
        Transaction.add(newTransaction);

        // 4. Limpar o formulário para a próxima entrada
        event.target.reset();
    }
};

// Escutar o evento de 'submit' (enviar) do formulário
document.querySelector('#form').addEventListener('submit', Form.handleSave);