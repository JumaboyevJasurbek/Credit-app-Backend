import { fetchData } from "../../utils/postgres.js";

const ALL_COMPLEX = `
    select * from complex
`;

const SELECT_COMPLEX = `
   Select * from complex where company_id = $1
`;

const NEW_COMPLEX = `
    insert into complex(complex_name, company_id) values ($1, $2)
`;
const UPDATE_COMPLEX = `
    UPDATE complex SET complex_name = $1, company_id = $2 WHERE complex_id = $3 RETURNING *
`;

const FIND_COMPANY = `
    Select * from company where company_id = $1
`;

const DELETE_COMPLEX = `
    DELETE FROM complex where complex_id = $1`;

const SELECT_ID = `
    SELECT * FROM complex where complex_id = $1`;

export const allComplex = () => fetchData(ALL_COMPLEX);

export const selectComplex = (id) => fetchData(SELECT_COMPLEX, id);
export const selectCompany = (id) => fetchData(FIND_COMPANY, id);

export const postComplex = (name, company) =>
    fetchData(NEW_COMPLEX, name, company);

export const putComplex = async (name, company, id) => {
    const [oldComplex] = await fetchData(SELECT_ID, id);

    console.log(oldComplex);

    await fetchData(
        UPDATE_COMPLEX,
        name ? name : oldComplex.complex_name,
        company ? company : oldComplex.company_id,
        id
    );
};

export const deleteComplex = async (id) => {
    await fetchData(DELETE_COMPLEX, id);
};
