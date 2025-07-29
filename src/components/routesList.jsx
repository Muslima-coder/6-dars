import { Groups, SingleTeacher, Students, Teachers, SingleStudent } from "../pages";
import { PATH } from "./path";

export const PageRouteList = [
    {
        id:1,
        path:PATH.teachers,
        element:<Teachers/>,
        title:"Teachers",
        children:[]
    },
    {
        id:2,
        path:PATH.students,
        element:<Students/>,
        title:"Students",
        children:[]
    },
    {
        id:3,
        path:PATH.groups,
        element:<Groups/>,
        title:"Groups",
        children:[]
    },
    {
        id:4,
        path:PATH.singleTeacher,
        element:<SingleTeacher/>,
        title:null,
        children:[]
    },
    {
        id:5,
        path:PATH.singleStudent,
        element:<SingleStudent/>,
        title:null,
        children:[]
    },
]