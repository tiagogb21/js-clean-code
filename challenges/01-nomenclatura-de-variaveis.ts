const GITHUB_BASE_URL = "https://api.github.com/users/";

const errorMessages = {
    usernameNotFound: "Please provide a username to search on the GitHub API",
    userNotFound: (username: string) =>
        `User with username "${username}" not found`,
};

interface UserFollowers {
    title: string;
    followers: number;
}

const userFollowersCategories: UserFollowers[] = [
    {
        title: "User",
        followers: 5,
    },
    {
        title: "Friendly",
        followers: 50,
    },
    {
        title: "Famous", followers: 500 },
    {
        title: "Super Star", followers: 1000 },
];

// Ordena categorias uma vez
const sortedFollowersCategories = [...userFollowersCategories].sort(
    (a, b) => b.followers - a.followers
);

export default async function fetchUserFollowersCategory(req, res) {
    const { username } = req.query;

    if (!username) {
        return res
            .status(400)
            .json({ message: errorMessages.usernameNotFound });
    }

    try {
        const fetchGithubUser = await fetch(`${GITHUB_BASE_URL}${username}`);

        if (!fetchGithubUser.ok) {
            return res
                .status(fetchGithubUser.status)
                .json({ message: errorMessages.userNotFound(username) });
        }

        const githubUserData = await fetchGithubUser.json();
        const userCategory = sortedFollowersCategories.find(
            (category) => githubUserData.followers > category.followers
        );

        return res.status(200).json({
            username,
            category: userCategory?.title || "No Category",
        });
    } catch (error) {
        return res
            .status(500)
            .json({
                message:
                    "An error occurred while fetching data from GitHub API",
            });
    }
}
