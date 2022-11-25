const USER_BY_CREDENTIAL = `
    SELECT * FROM users WHERE name = $1 AND password = $2 and role = $3 returning *
`;

export const auth = (name, password, role) =>
    fetchData(USER_BY_CREDENTIAL, name, password, role);
