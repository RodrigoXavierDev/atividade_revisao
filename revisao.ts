class Funcionario {
    private id_funcionario: string;
    nome: string;
    private cpf: string;
    private email: string;
    cargo: string;
    private telefone: string;
    data_nascimento: Date;
    genero?: string;
    constructor(id_funcionario: string, nome: string, cpf: string, email: string, cargo: string, telefone: string, data_nascimento: Date, genero: string) {
        this.id_funcionario = id_funcionario;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.cargo = cargo;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
        this.genero = genero
    }
    mostrarDados() {
        console.log(`ID do funcionario: ${this.id_funcionario}`)
        console.log(`Nome do funcionario: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Email: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data de nascimento: ${this.data_nascimento}`)
        if (this.genero) {
            console.log(`Genero: ${this.genero}`)
        }
        console.log(`____________________________________________________________`)
    }
}

class Tarefa {
    id_tarefa: string;
    responsavel: Funcionario;
    membro?: Funcionario[];
    descricao: string;
    titulo: string;
    status: string;
    prazo: Date
    constructor(id_tarefa: string, responsavel: Funcionario, membro: Funcionario[], descricao: string, titulo: string, status: string, prazo: Date) {
        this.id_tarefa = id_tarefa;
        this.responsavel = responsavel;
        this.membro = membro;
        this.descricao = descricao;
        this.titulo = titulo;
        this.status = status;
        this.prazo = prazo;
    }
    mostrarDados() {
        console.log(`ID da tarefa: ${this.id_tarefa}`)
        console.log(`Reesponsavel: ${this.responsavel}`)
        if (this.membro) {
            console.log(`Membro: ${this.membro}`)
        }
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Status: ${this.status}`)
        console.log(`Prazo: ${this.prazo}`)
        console.log(`____________________________________________________________`)
    }
}

class Projeto {
    id_projeto: string;
    titulo: string;
    descricao: string;
    tarefa: Tarefa;
    data_inicio: Date;
    prazo_entrega: Date;
    status: string;
    lider: Funcionario;
    membro: Funcionario[];
    constructor(id_projeto: string, titulo: string, descricao: string, tarefa: Tarefa, data_inicio: Date, prazo_entrega: Date, status: string, lider: Funcionario, membro: Funcionario[]) {
        this.id_projeto = id_projeto;
        this.titulo = titulo;
        this.descricao = descricao;
        this.tarefa = tarefa
        this.data_inicio = data_inicio;
        this.prazo_entrega = prazo_entrega;
        this.status = status;
        this.lider = lider;
        this.membro = membro;
    }
    mostrarDados() {
        console.log(`ID do projeto: ${this.id_projeto}`)
        console.log(`Titulo do projeto: ${this.titulo}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Tarefa: ${this.tarefa}`)
        console.log(`Data de Inicio: ${this.data_inicio}`)
        console.log(`Prazo para entrega: ${this.prazo_entrega}`)
        console.log(`Status do projeto: ${this.status}`)
        console.log(`Lider do projeto: ${this.lider}`)
        console.log(`Membro/membros: ${this.membro}`)
        console.log(`____________________________________________________________`)
    }
}

class Equipe {
    id_equipe: string;
    lider: Funcionario;
    lista_membro: Funcionario[];
    projeto: Projeto[];
    tarefa: Tarefa[];
    constructor(id_equipe: string, lider: Funcionario, lista_membro: Funcionario[], projeto: Projeto[], tarefa: Tarefa[]) {
        this.id_equipe = id_equipe;
        this.lider = lider;
        this.lista_membro = lista_membro;
        this.projeto = projeto;
        this.tarefa = tarefa;
    }
    mostrarDados() {
        console.log(`ID da equipe: ${this.id_equipe}`)
        console.log(`Lider: ${this.lider}`)
        console.log(`Lista de membros: ${this.lista_membro}`)
        console.log(`Projeros: ${this.projeto}`)
        console.log(`Tarefas: ${this.tarefa}`)
    }
}

const funcionario1 = new Funcionario('55555', 'paulo', '77777777777', 'paulao@gmail.com', 'junior', '845599999999', new Date('2000-05-05'), 'masculino');
const tarefa1 = new Tarefa('44444', funcionario1, [funcionario1,funcionario1], 'Tarefa nova', 'Tarefa1', 'em andamento', new Date('2025-05-05'))
const projeto1 = new Projeto('33333', 'projeto1', 'projeto novo', tarefa1, new Date('2024-03-19'), new Date('2024-03-19'), 'Em andamento', funcionario1, [funcionario1, funcionario1])
const equipe1 = new Equipe('22222', funcionario1, [funcionario1, funcionario1], [projeto1, projeto1], [tarefa1, tarefa1])