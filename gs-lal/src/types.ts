export type Doacao = {
  ID_DOACOES: number
  ID_CONDOMINIO: number
  ID_MATERIAIS: number
  NR_QUANTIDADE: number
  NR_DESCONTOS: number
  DT_DOACAO: string
}

export type Condominio = {
  ID_CONDOMINIO: number
  NM_CONDOMINIO: string
  NR_CEP: string
  NM_BAIRRO: string
  NM_ESTADO: string
  NM_CIDADE: string
  DS_COMPLEMENTO: string
  DS_SENHA: string
  NM_LOGRADOURO: string
  NM_EMAIL: string
}

export type Produtos = {
  ID_PRODUTOS: number
  NR_QUANTIDADE: number
  NR_PRECO: number
  DS_PRODUTO: string
  NM_PRODUTO: string
}

export type WorkShop = {
  ID_WORKSHOPS: number
  DT_WORKSHOP: string
  TP_WORKSHOPS: string
  ST_WORKSHOP: string
  DS_WORKSHOP: string
  NM_WORKSHOP: string
  NM_LOGRADOURO: string
}
