import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import Header from '../../components/Header'

import Math from '../../assets/Math.png'

import * as S from './styles'

const Dashboard: React.FC = () => {
    const { navigate } = useNavigation()

    const [courses, setCourses] = useState([])

    useEffect(()=>{
        api.get('/courses').then(response => {
            setCourses(response.data)
        })
    },[])

    return(
        <S.Container>
            <S.Content>
                <S.ContentTopContainer>
                    <S.Title>Cursos</S.Title>
                    <S.CoursesNumber>43 Cursos</S.CoursesNumber>
                </S.ContentTopContainer>
                
                <S.CoursesList 
                    data={courses}
                    keyExtractor={course => course.id}
                    horizontal={false}
                    numColumns={2}
                    renderItem={({item: course})=>(
                        <S.CourseCard 
                            onPress={()=>navigate('Details', {id: course.id, name: course.name})}
                        >
                            <S.CourseImage source={Math}/>
                            <S.CourseName>{course.name}</S.CourseName>
                            <S.CourseLessons>{course.number_of_classes} aulas</S.CourseLessons>
                        </S.CourseCard>
                    )}
                />

                {/* <S.CardsContainer>
                    <S.CourseCard onPress={()=>navigate('Details')}>
                        <S.CourseImage source={Math}/>
                        <S.CourseName>Matemática</S.CourseName>
                        <S.CourseLessons>16 aulas</S.CourseLessons>
                    </S.CourseCard>
                    <S.CourseCard onPress={()=>navigate('Details')}>
                        <S.CourseImage source={Math}/>
                        <S.CourseName>Matemática</S.CourseName>
                        <S.CourseLessons>16 aulas</S.CourseLessons>
                    </S.CourseCard>
                </S.CardsContainer> */}

            </S.Content>
        </S.Container>
    )
}

export default Dashboard
