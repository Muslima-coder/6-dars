import { Link, useParams } from "react-router-dom"
import { teachersList } from "./Teachers"
import TeachersCard from "../components/TeachersCard"
import { studentsList } from "./Students"
import StudentsCard from "../components/StudentsCard"

const SingleTeacher = () => {
  const { id } = useParams()
  const singleTeacherData = teachersList.find(item => item.id == id)
  const teacherStudents = studentsList.filter(item => item.teacherId == id)
  
  return (
    <div className="flex gap-5 mx-auto flex-col justify-center py-8">
      <div className="flex justify-center ">
      <Link to="/teachers" className="border-none absolute right-12 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
      </Link>
      <TeachersCard  item={singleTeacherData} />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {teacherStudents.map(student => (
          <StudentsCard key={student.id} item={student} />
        ))}
      </div>
    </div>
  )
}

export default SingleTeacher
