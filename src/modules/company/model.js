import { fetchData } from "../../utils/postgres.js";

const ALL_COMPANY = `
    select * from company
`;

const FIND_COMPANY = `
    Select * from company where company_id = $1
`;

const NEW_COMPANY = `
    insert into company(company_name, company_img) values ($1, $2)
`;
const UPDATE_COMPANY = `
    UPDATE company SET company_name = $1, company_img = $2 WHERE company_id = $3 RETURNING *
`;

const DELETE_COMPANY = `
    DELETE FROM company where company_id = $1`;

export const allCompany = () => fetchData(ALL_COMPANY);

export const findCompany = (id) => fetchData(FIND_COMPANY, id);

export const createCompany = (name, img) => fetchData(NEW_COMPANY, name, img);

export const updateCompany = async (name, img, id) => {
    const [oldCompany] = await fetchData(
        `SELECT * FROM company where company_id = $1`,
        id
    );

    console.log(oldCompany);

    await fetchData(
        UPDATE_COMPANY,
        name ? name : oldCompany.company_name,
        img ? img : oldCompany.company_img,
        id
    );
};

export const deleteCompany = async (id) => {
    await fetchData(DELETE_COMPANY, id);
};
