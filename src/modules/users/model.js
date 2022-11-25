import { fetchData } from "../../utils/postgres.js";


const USER_BY_CREDENTIAL = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2 AND role = $3
`;

const NEW_GROUPS = `
    INSERT INTO groups(group_name) VALUES(
        $1
    )RETURNING *
`;

const USER_BY_ID = `
    SELECT token_status FROM users WHERE id =$1
`;

export const loginAdmin = (username, password, role) =>
    fetchData(USER_BY_CREDENTIAL, username, password, role);


export const createGroup = (name, price) => fetchData(NEW_GROUPS, name, price);

export const userById = (id) => fetchData(USER_BY_ID, id);

// export const updateGroup = async (name, id) => {
//     const [oldGroup] = await fetchData(
//         "SELECT * FROM groups where group_id = $1",
//         id
//     );

//     return fetchData(UPDATE_GROUPS, name ? name : oldGroup.name, id);
// };
