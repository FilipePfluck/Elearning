import React, {useEffect} from 'react'

import { useCourses } from '../../context/CoursesContext'

import api from '../../services/api'

import Header from '../../components/Header'
import RouteTabs from '../../routes/appTabs.routes'

import * as S from './styles'

const Tabs: React.FC = () => {
    const { setCourses } = useCourses()

    useEffect(()=>{
        api.get('/courses').then(response => {
            setCourses(response.data)
        })
    },[])

    return (
        <>
        <Header/>
        <RouteTabs/>
        </>
    )
}

export default Tabs