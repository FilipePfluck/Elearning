import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useCourses } from '../../context/CoursesContext'

import api from '../../services/api'

import Header from '../../components/Header'

import Math from '../../assets/Math.png'

import * as S from './styles'

const Dashboard: React.FC = () => {
    const { navigate } = useNavigation()

    const { courses, setCourses } = useCourses()

    useEffect(()=>{
        courses.map(course => {
            console.log(course.avatar)
        })
    },[courses])

    return(
        <S.Container>
            <S.Content>
                <S.ContentTopContainer>
                    <S.Title>Cursos</S.Title>
                    <S.CoursesNumber>{courses.length} cursos</S.CoursesNumber>
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
                            <S.CourseImage source={{uri: course.avatar}}/>
                            <S.CourseName>{course.name}</S.CourseName>
                            <S.CourseLessons>{course.number_of_classes} aulas</S.CourseLessons>
                        </S.CourseCard>
                    )}
                />

            </S.Content>
        </S.Container>
    )
}

export default Dashboard
