import { Link } from "react-router-dom"

const TeachersCard = ({ item }) => {

    return (
        <Link to={`${item.id}`} className="mx-auto text-white hover:scale-[1.05] duration-300 teachers-card w-[300px] p-3  rounded-lg cursor-pointer shadow-lg shadow-slate-700">
            <img className="mb-2 rounded-md mx-auto" src={item.image} alt="Teachers img" width={270} height={90} />
            <h2 className="text-center font-medium text-[18px] mb-[2px]" >{item.name} - {item.surname}</h2>
            <p className="text-center font-normal text-[16px] mb-[2px]" >Email: {item.gmail}</p>
            <p className="text-center font-normal text-[16px] mb-[2px]" >Age: {item.age}</p>
        </Link>
    )
}

export default TeachersCard