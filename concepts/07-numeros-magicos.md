# Numeros Mágicos

* Devemos dar valor para os números, para que quem venha a trabalhar sobre ele, tenha noção sobre o que está trabalhando

* obs.: no js podemos separar números com "_" SEM prejuízo para o valor que ele iria assumir

    ```js
        // Ao invés de escrever 1234567890
        // Podemos escrever para facilitar a leitura:
        const numbers = 1_234_567_890
    ```

* Devemos trazer no nome da variável, o formato em que ela está salva

    ```js
        // Uso incorreto:
        function calculateDiscount(price, discount) {}

        // Uso correto:
        function calculateDiscount(priceInCents, discountInPercentage) {}
    ```
