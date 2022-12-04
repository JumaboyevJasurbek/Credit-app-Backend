import { fetchData } from "../../utils/postgres.js";

const ALL_BANKS = `
    select * from banks
`;

const NEW_BANK = `
    insert into banks(bank_name, upto, mortgage_duration, starting_payment, bank_img) values ($1, $2, $3, $4, $5)
`;
const UPDATE_BANK = `
    UPDATE banks SET bank_name = $1, upto = $2, mortgage_duration = $3, starting_payment = $4, bank_img = $5 WHERE bank_id = $6 RETURNING *
`;

const DELETE_BANK = `
    DELETE FROM banks where bank_id = $1`;

const SELECT_ID = `
    SELECT * FROM banks where bank_id = $1`;

export const allBanks = () => fetchData(ALL_BANKS);

export const createBanks = (name, upto, duration, starting, bank_img) =>
    fetchData(NEW_BANK, name, upto, duration, starting, bank_img);

export const updateBanks = async (
    name,
    upto,
    duration,
    starting,
    bank_img,
    id
) => {
    const [oldBank] = await fetchData(SELECT_ID, id);

    await fetchData(
        UPDATE_BANK,
        name ? name : oldBank.bank_name,
        upto ? upto : oldBank.upto,
        duration ? duration : oldBank.mortgage_duration,
        starting ? starting : oldBank.starting_payment,
        bank_img ? bank_img : oldBank.bank_img,
        id
    );
};

export const deleteBanks = async (id) => {
    await fetchData(DELETE_BANK, id);
};
