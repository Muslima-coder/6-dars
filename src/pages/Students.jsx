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
      {studentsList.map(item => <StudentsCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Students