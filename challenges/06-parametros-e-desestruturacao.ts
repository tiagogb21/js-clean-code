function updateUserRoute(body, params) {
    updateUserController({ data: { body }, params });
}

function updateUserController(props) {
    const { data, params } = props;
    userRepository.update({ data, params });
}

const userRepository = {
    update: ({ data, params }) => {},
};
