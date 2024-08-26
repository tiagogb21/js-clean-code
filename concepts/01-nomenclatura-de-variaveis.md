# Nomenclatura de Variáveis

* Evite diminutivos

    ```js
        const users = ['Diego', 'Mayk', 'Rodrigo'];

        const usersStatsWithLetter = (letter) => {
            if(typeof letter !== 'string') return [];

            const filteredName = users.filter((user) => user.toLowerCase().startsWith(letter));

            return filteredName;
        }

        console.log(usersStatsWithLetter('d')) // ['diego']
    ```

* Evite nomes genéricos (data, response, list, args, params)

    - nomes genéricos: falam sobre a estrtura de dados, mas não sobre os dados

    ```js
        const getUsers = () => {
            // ex. de nome ruim --> por que podemos ter mais implementações e um nome não adequado vai dificultar a manutenção
            // const data = ...

            // ex. de extensão que uma função pode receber:
                // validação
                // manipulação dos dados (mapping)

            // ex. de nome mais acertivo
            const user = getUserFromDatabase();

            return user;
        }
    ```
