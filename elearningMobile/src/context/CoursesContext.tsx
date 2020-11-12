import React, {createContext, useCallback, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface Course {
    id: string,
    name: string,
    number_of_classes: string,
    avatar: string
}

interface CoursesContextData {
    courses: Course[]
    setCourses: React.Dispatch<React.SetStateAction<Course[]>>
}

export const CoursesContext = createContext({} as CoursesContextData)

export const CoursesProvider:React.FC = ({children}) => {

    const [courses, setCourses] = useState<Course[]>([])

    return(
        <CoursesContext.Provider value={{courses, setCourses}}>
            {children}
        </CoursesContext.Provider>
    )
}

export function useCourses(): CoursesContextData {
    const context = useContext(CoursesContext)

    if(!context){
        throw new Error('useCourses must be used within an CoursesProvider')
    }

    return context
}