## Booleanos

* Devemos escrever booleans SEMPRE como uma pergunta (sim/não ou true/false)

    - Faça a leitura como se tivesse um "if" na frente, se tiver um valor semântico, então a regra foi atendida

    - Podemos utilizar as flags: is, does, has

    - NÃO devemos utilizar nomes genéricos: loading, disabled, data, fetching, list

    - Evite variáveis genéricas, os nomes devem passar o máximo de informações possíveis sobre uma variável

    ```js
        // Ao invés de:
        const disabled = true;

        // Devemos utilizar:
        const isDisabled = true;

        // Ao invés de:
        const loading = true;

        // Devemos utilizar:
        const isUserProfileLoading = true;
    ```
