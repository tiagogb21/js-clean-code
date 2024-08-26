# Parâmtros e Desestruturação

* É preferível retornar os dados passados para as funções do que o objeto inteiro

    ```js
        // problema: qual o valor de data que está sendo passado?

        function createUserRoute(data) {

        }

        function createUserController(data) {

        }

        function usersRepository(data) {
            create(data) {

            }
        }
    ```

    ```js
        // obs.: devemos lembrar que o código ts é transformado em js em produção, ts é APENAS desenvolvimento

        // solução: fazer a desestruturação dos parâmetros
        function createUserRoute(body) {

            // sabemos exatamente quais são os parâmetros que estão sendo passados
            const {name, email, password} = body
        }

        function createUserController(data) {

        }

        function usersRepository(data) {
            create(data) {

            }
        }
    ```

* Devemos utilizar objetos ao invés de múltiplos parâmetros

    - body --> NÃO fica visível na requisição

    - params e query string --> fica visível na requisição

    * ex.: http://localhost:3333/users/{id}/?{query}

    ```js
        // incorreto
        createUserRoute({ name, email, password }, id)

        // Problema; se o body for nulo
        createUserRoute(null, id)

        // Preferir utilizar objeto
        createUserRoute({
            body: { name, email, password },
            params: { id: 1 },
        })

        // O caso acima resolve o caso de passagem de parâmetros nulos
        // Passamos APENAS o que queremos
        createUserRoute({
            params: { id: 1 },
        })

        // Faz sentido a resposta da requisição ser um objeto, por que mais para frente podemos ter mais dados sendo retornados
    ```
