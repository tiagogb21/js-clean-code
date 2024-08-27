# Evite syntatic sugar

* ATENÇÃO! Essa regra NÃO é aplicável a TODOS

* O uso de syntatic sugar NÃO é recomendado por que se uma pessoa que NÃO está acostumada com a linguagem for ver o código NÃO vai conseguir interpretar da forma correta

    ```js
        const numberInString = "1979";

        // Forma NÃO legível
        // const number = +numberInString;

        // preferível:
        const number = Number(numberInString);

        // Forma NÃO legível
        // const numberAsString = '' + numberInString;
        // const numberAsString = `${numberInString}`;

        // preferível:
        const numberAsString = String(numberInString);

        // Forma NÃO legível
        // const isAValidNumber = !!number;

        const isAValidNumber = Boolean(number)
    ```
