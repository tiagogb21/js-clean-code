const hours = {
    opening: 9,
    closing: 18,
};

const getMessage = (username: string) => ({
    error: {
        closedPark: "O parque está fechado!",
        userDoesNotHaveATicket: `O ${username} não possui um bilhete para entrar no parque!`,
        userCantEnterInToy: `O ${username} não pode entrar no brinquedo!`,
    },
    success: {
        userHadFun: `O ${username} se divertiu muito! :)`,
    },
});

const user = {
    name: "John Doe",
    height: 190,
    hasTicket: true,
};

const firstName = user.name.split(" ")[0];
const messages = getMessage(firstName);

const minimumHeightInCentimeters = 130;
const currentHour = new Date().getHours();

const isParkOpen = currentHour > hours.opening && currentHour < hours.closing;

if (!isParkOpen) {
    throw new Error(messages.error.closedPark);
}

if (!user.hasTicket) {
    throw new Error(messages.error.userDoesNotHaveATicket);
}

const userCanEnterInToy = user.height > minimumHeightInCentimeters;

if (!userCanEnterInToy) {
    throw new Error(messages.error.userCantEnterInToy);
}

console.log(messages.success.userHadFun);
