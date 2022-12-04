import { fetchData } from "../../utils/postgres.js";

const USER_BY_CREDENTIAL = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2
`;

const FIND_BANK = `
select * from banks where REPLACE(upto, ' ', '')::bigint >= $1 and mortgage_duration::bigint = $2
order by REPLACE(upto, ' ', '')::bigint
offset 0 limit 1

`;

export const loginAdmin = (username, password) =>
    fetchData(USER_BY_CREDENTIAL, username, password);

export const findBank = (upto, duration) =>
    fetchData(FIND_BANK, upto, duration);
