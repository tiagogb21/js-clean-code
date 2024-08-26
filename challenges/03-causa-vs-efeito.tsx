// Causa vs Efeito
import { useEffect, useState } from "react";

interface User {
    name: string;
    github: string;
}

function fetchUser() {
    return {
        data: {
            user: {
                name: "John Doe",
                github: "https://github.com/johndoe",
            },
        },
    };
}

export function UserProfile() {
    const [gettingGithubUserData, setGettingGithubUserData] =
        useState(false);
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        function loadUser() {
            setGettingGithubUserData(true);

            const fetchUserResponse = fetchUser();

            setUserData(fetchUserResponse.data.user);

            setGettingGithubUserData(false);
        }

        loadUser();
    });

    if (gettingGithubUserData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={`${userData?.github}.png`} alt="" />
            <a href={userData?.github}>{userData?.name}</a>
        </div>
    );
}
