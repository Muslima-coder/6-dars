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
    <div className="flex justify-center gap-5 mt-10">
      {teachersList.map(item => <TeachersCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Teachers