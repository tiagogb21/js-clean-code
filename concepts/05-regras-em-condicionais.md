## Regras em Condicionais

* Evite:

    - SEMPRE que possível negações

    ```js
        const isUserOlderThan18Years = true;

        // Nosso cérebro não trabalha bem com negações
        if(!isUserOlderThan18Years) {}

        // É melhor alterar o nome para evitar a condicional negativa:
        const isUserYoungerThan18Years = true;

        if(isUserYoungerThan18Years) {}

        // Outro caso:
        const doesUserLivesInBrazil = true

        if(!doesUserLivesInBrazil) {}

        // Trocar por:
        const doesUserLivesOutsideBrazil = true

        if(!doesUserLivesOutsideBrazil) {}
    ```

* Early Return vs Else (devemos pensar em legibilidade)

    ```js
        // Early Return
        function isUserOlderThan18Years(user) {
            if(!user) {
                return { error: '...' }
            }

            return user.age >= 18;
        }

        function isUserOlderThan18Years(user) {
            if(!user) {
                return { error: '...' }
            } else {
                return user.age >= 18;
            }
        }

        // utilidade semântica do else:
            // Quando o early return NÃO é facilmente visto no código
                // ex.: Vários ifs aninhados
    ```

* Evite condicionais aninhadas

    ```js
        if() {
            if() {
                if() {

                }
            }
        }

        // 1 - verificar se os if podem ser desalinhadoss

        // 2 - verificar se conseguimos fazer early return
    ```
