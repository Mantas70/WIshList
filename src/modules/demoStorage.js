import students from "../data/studentsData";
const demoStorage = (data) =>{
    localStorage.setItem('students',JSON.stringify(data))
    const students = JSON.parse(localStorage.getItem('students'));
    console.log(students)
}

export default demoStorage