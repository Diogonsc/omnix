export interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  whatsapp: string;
  endereco: Endereco;
  pendingValue: number;
}

export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface Produto {
  id: string;
  codigo: string;
  nome: string;
  descricao: string;
  categoria: string;
  precoCusto: number;
  precoVenda: number;
  margemLucro: number;
  estoque: number;
  estoqueMinimo: number;
  unidade: string;
  codigoBarras?: string;
  status: "ativo" | "inativo";
  dataCadastro: Date;
  ultimaAtualizacao: Date;
}

export interface ProdutoCompra {
  produto: Produto;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export interface Compra {
  id: string;
  clienteId: string;
  produtos: ProdutoCompra[];
  dataCompra: string;
  valorTotal: number;
  tipoPagamento: "avista" | "parcelado";
  numeroParcelas: number;
  valorPago: number;
  status: "em_aberto" | "parcialmente_pago" | "quitado";
}

export interface Pagamento {
  id: string;
  compraId: string;
  valor: number;
  data: string;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  funcao: "admin" | "vendedor" | "visualizador";
  senha?: string;
  precisaTrocarSenha?: boolean;
}

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export interface Empresa {
  nome: string;
  email: string;
  telefone: string;
  logo: string | null;
  corPrimaria: string;
}
