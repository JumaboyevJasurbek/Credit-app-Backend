import { fetchData } from "../../utils/postgres.js";

const ALL_COMPANY = `
    select * from company
`;

// const NEW_COURSES = `
//         call newCourses($1, $2)
// `;

// const UPDATE_COURSE = `
//         call updateCourses($1, $2, $3)
// `;

// const DELETE_COURSE = `
//         call deleteCourses($1)
// `;

// const SELECT_ID = `
// SELECT * FROM courses where course_id = $1`;

export const allCompany = () => fetchData(ALL_COMPANY);
// export const createCourse = (title, price) =>
//     fetchData(NEW_COURSES, title, price);

// export const updateCourse = async (title, price, id) => {
//     const [oldCourse] = await fetchData(SELECT_ID, id);

//     await fetchData(
//         UPDATE_COURSE,
//         title ? title : oldCourse.title,
//         price ? price : oldCourse.price,
//         id
//     );
// };

// export const deleteCourse = async (id) => {
//     await fetchData(DELETE_COURSE, id);
// };
