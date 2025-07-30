import { Link } from "react-router-dom"
import TeachersCard from "../components/TeachersCard"

export const teachersList = [
  {
    id:1,
    name:"Boburmirzo",
    surname:"Rasulov",
    stack:"Frontend",
    gmail:"boburmirzo@gmail.com",
    age:"25",
    image:"https://media.licdn.com/dms/image/v2/D4D03AQFzRY3rskvD6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678385675817?e=2147483647&v=beta&t=9NNAImd3qXPNx5wKTeEXoyLBeWYXRAMvl4sgHvA-560"
  },
  {
    id:2,
    name:"Dilshod",
    surname:"Gaibnazarov",
    stack:"Backend",
    gmail:"dilshod@gmail.com",
    age:"49",
    image:"https://media.licdn.com/dms/image/v2/D4D03AQHtbsd9JaCIRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684503793191?e=2147483647&v=beta&t=TAbshb0SEcwIX6rpetPpM92fDQa-aSVHzBV3LohaONc"
  },
  {
    id:3,
    name:"Zabihulloh",
    surname:"Fathullayev",
    stack:"SMM",
    gmail:"zabihulloh@gmail.com",
    age:"73",
    image:"https://media.licdn.com/dms/image/v2/D4D03AQHDe1NrLjz5PQ/profile-displayphoto-shrink_800_800/B4DZaa4r4NGcAc-/0/1746355279063?e=1756339200&v=beta&t=D0swl2ryEA8u0FGKqXQTWjJSLPt1zDNOWAOVrKD-LqA"
  }
]

const Teachers = () => {
  return (
    <div className="py-10">
    <div>
      <Link to="/" className="border-none absolute right-12 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
      </Link>
      </div>
      <div className="flex  w-[70%] flex-wrap mx-auto  justify-center gap-5 mt-10">
        {teachersList.map(item => <TeachersCard key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Teachers