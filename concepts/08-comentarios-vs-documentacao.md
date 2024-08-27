# Comentério vs Documentação

* Comentário é diferente de Documentação

    - O comentário NÃO DEVE dizer o que o código faz, a responsabilidade DEVE ser da documentação

    - O comentário serve como um aviso, para a próxima pessoa que vai olhar o código, informando por que algo foi feito da forma X

* Quando usar comentários:

    1. informar sobre uma limitação
    2. sinalizar um erro encontrado
    3. sinalizar o funcionamento de uma biblioteca
    4. sinalizar um padrão seguido de uma forma diferente

    ```js
        /** Esse código foi escrito assim por que a biblioteca X ainda NÃO suporta a funcionalidade Y
         *
         * Referência:
         *
         * https://github.com/author/X/issues/123123
         *
        */
    ```
