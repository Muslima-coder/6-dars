import { Link } from "react-router-dom"

const StudentsCard = ({ item }) => {

    return (
        <Link to={`${item.id}`} className="text-white hover:scale-[1.05] duration-300 students-card w-[300px] p-3  rounded-lg cursor-pointer shadow-lg shadow-slate-700">
            <img className="mb-2 rounded-md mx-auto" src={item.img} alt="Teachers img" width={270} height={90} />
            <h2 className="text-center font-medium text-[18px] mb-[2px]" >{item.name} - {item.surname}</h2>
            <p className="text-center font-normal text-[16px] mb-[2px]" >Age: {item.age}</p>
        </Link>
    )
}

export default StudentsCard