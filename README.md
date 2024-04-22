# CRUD de Horas Complementares

Este é um projeto de CRUD de horas complementares desenvolvido com React no frontend, Node.js no backend e SQL (MySQL) no Banco de Dados.

## Instalação

1. Clone o repositório.
2. Instale as dependências do cliente e do servidor:
    ```
    cd cliente
    npm install
    cd ../servidor
    npm install
    ```
3. Configure o banco de dados MySQL e importe o arquivo `db_horascomplementares_tb_horas_complementares.sql` para criar a estrutura do banco de dados.
4. Inicie o servidor:
    ```
    cd servidor
    npm start
    ```
5. Inicie o cliente:
    ```
    cd cliente
    npm start
    ```

## Endpoints da API

### Obter todas as horas complementares do banco de dados.

- **URL:** `/horasComplementares`
- **Método:** `GET`

#### Resposta de Sucesso

- **Código:** 200 OK
- **Conteúdo:** Array de objetos contendo informações sobre as horas complementares.

#### Exemplo de Requisição
[
  {
    "id": 1,
    "dimensao": "Acadêmica",
    "tipo_atividade": "Participação em evento científico",
    "qtd_horas": 10
  },
  {
    "id": 2,
    "dimensao": "Voluntariado",
    "tipo_atividade": "Trabalho voluntário em instituição de caridade",
    "qtd_horas": 8
  },
  ...
]

### Obtém uma hora complementar pelo id e busca-o na base de dados.

- **URL:** `/horasComplementares/:id`
- **Método:** ` GET`

#### Resposta de Sucesso

- **Código:** 200 OK
- **Conteúdo:** Array de objetos contendo informações sobre as horas complementares.

#### Exemplo de Requisição
{
    "id": 1,
    "dimensao": "Acadêmica",
    "tipo_atividade": "Participação em evento científico",
    "qtd_horas": 10
  }



### Insere uma nova hora complementar na base de dados.
- **URL:** `/horasComplementares`
- **Método:** ` POST`

#### Resposta de Sucesso
- **Código:** 201 Created
- **Conteúdo:** Objeto contendo mensagem de sucesso.


#### Exemplo de Requisição

POST /horasComplementares
Content-Type: application/json

{
  "dimensao": "Acadêmica",
  "tipo_atividade": "Participação em congresso",
  "qtd_horas": 12
}




### Atualiza uma hora complementar na base de dados.

- **URL:** `/horasComplementares/:id`
- **Método:** ` PUT`

#### Resposta de Sucesso
- **Código:** 200 OK
- **Conteúdo:** Objeto contendo mensagem de sucesso.

#### Exemplo de Requisição

PUT /horasComplementares/1
Content-Type: application/json
{
  "dimensao": "Acadêmica",
  "tipo_atividade": "Participação em congresso internacional",
  "qtd_horas": 15
}




### Deleta uma hora complementar do banco de dados pelo id.

- **URL:** `/horasComplementares/:id`
- **Método:** ` DELETE`

#### Resposta de Sucesso
- **Código:** 200 OK
- **Conteúdo:** Objeto contendo mensagem de sucesso.

#### Exemplo de Requisição

DELETE /horasComplementares/1

{
  "message": "Hora complementar removida com sucesso!"
}
