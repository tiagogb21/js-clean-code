# Causa x Efeito

* Problema: Criamos a variável com base na consequência que ela irá assumir na aplicação

    ```tsx
        const Button = () => {
            // Temos um problema com esse nome, ele está associado a um efeito específico
            const isButtonDisabled = true;

            return (
                // O efeito a que ele está associado é o botão estar desabilitado
                <button disabled={isButtonDisabled}>
                    // Para quem for ler APENAS o código abaixo, com base no nome da variável, pode NÃO fazer sentido, ou, no mínimo, irá necessitar que a pessoa gaste algum tempo pensando em seu significado
                    { isButtonDisabled ? 'Carregando' : 'Enviar' }
                </button>
            )
        }

        const Button = () => {
            // Evitando o problema acima:
            const isFormSubmitting = true;

            return (
                // Agora o efeito é mais genérico, por que ao invés de estar associado ao evento, está associado a causa
                <button disabled={isFormSubmitting}>
                    { isFormSubmitting ? 'Carregando' : 'Enviar' }
                </button>
            )
        }
    ```
