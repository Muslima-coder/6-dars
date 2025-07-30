import { Link } from "react-router-dom"
import StudentsCard from "../components/StudentsCard"

export const studentsList = [
  {id:1, name:"Hamroz", surname:"Nuriddinov", age:18, img:"https://picsum.photos/id/200/800/800", teacherId:1},
  {id:2, name:"Jamshid", surname:"Akramov", age:20, img:"https://picsum.photos/id/201/800/800", teacherId:1},
  {id:3, name:"Sarvar", surname:"Azamov", age:18, img:"https://picsum.photos/id/204/800/800", teacherId:2},
  {id:4, name:"Ulug'bek", surname:"Rahmatullayev", age:19, img:"https://picsum.photos/id/17/800/800", teacherId:2},
  {id:5, name:"Dilnoza", surname:"Rahmatullayeva", age:17, img:"https://picsum.photos/id/7/800/800", teacherId:3},
  {id:6, name:"Layloxon", surname:"Ismatullayeva", age:16, img:"https://picsum.photos/id/255/800/800", teacherId:3},
]
const Students = () => {
  return (
    <div className="flex justify-center mx-auto gap-5 py-10 flex-wrap w-[80%]">
       <Link to="/" className="border-none absolute right-12 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </Link>
      {studentsList.map(item => <StudentsCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Students