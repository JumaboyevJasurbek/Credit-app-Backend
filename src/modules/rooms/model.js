import { fetchData } from "../../utils/postgres.js";

const ROOMS = `
    select
        *
    from 
        room
    join
        complex
    on
        room.complex_id = complex.complex_id
`;

const SELECT_ROOM = `
select * from room where complex_id = $1
`;

const FIND_ROOM = `
select * from room where room_id = $1
`;

const select_complex = `
    select * from complex where  complex_id = $1
`;

const NEW_ROOM = `
    insert into room(room_count, room_meter_square_sum, room_meter_square, complex_id) values ($1, $2, $3, $4)
`;

const UPDATE_BANK = `
    UPDATE room SET room_count = $1, room_meter_square_sum = $2, room_meter_square = $3, complex_id = $4 WHERE room_id = $5 RETURNING *
`;

const DELETE_BANK = `
    DELETE FROM room where room_id = $1`;

const SELECT_ID = `
    SELECT * FROM room where room_id = $1`;

export const allRooms = () => fetchData(ROOMS);

export const selectRooms = (id) => fetchData(SELECT_ROOM, id);
export const selectComplex = (id) => fetchData(select_complex, id);
export const findRoom = (id) => fetchData(FIND_ROOM, id);

export const createRoom = (
    room_count,
    square_sum,
    room_meter_square,
    complex
) => fetchData(NEW_ROOM, room_count, square_sum, room_meter_square, complex);

export const updateRoom = async (
    room_count,
    square_sum,
    room_meter_square,
    complex,
    id
) => {
    const [oldRoom] = await fetchData(SELECT_ID, id);

    console.log(oldRoom);

    await fetchData(
        UPDATE_BANK,
        room_count ? room_count : oldRoom.room_count,
        square_sum ? square_sum : oldRoom.room_meter_square_sum,
        room_meter_square ? room_meter_square : oldRoom.room_meter_square,
        complex ? complex : oldRoom.complex_id,
        id
    );
};

export const deleteRoom = async (id) => {
    await fetchData(DELETE_BANK, id);
};
