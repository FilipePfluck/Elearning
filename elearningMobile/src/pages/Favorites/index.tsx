import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native'
import { SvgUri } from 'react-native-svg'

import { useFavorite } from '../../context/FavoritesContext'
import { useCourses } from '../../context/CoursesContext'

import Math from '../../assets/Math.png'

import * as S from './styles'

interface Course {
    id: string,
    name: string,
    number_of_classes: string,
    avatar: string
}

const Favorites: React.FC = () => {
    const { navigate } = useNavigation()
    const isFocused = useIsFocused()
    const { favorites } = useFavorite()
    const { courses } = useCourses()

    const [favoritesCourses, setFavoritesCourses] = useState<Course[]>([])

    useEffect(()=>{
        setFavoritesCourses(state => {
            return courses.filter(course => {
                return favorites.includes(course.id)
            })
        })
    },[courses, favorites, isFocused])

    return(
        <S.Container>
            <S.Content>
                <S.ContentTopContainer>
                    <S.Title>Cursos favoritos</S.Title>
                </S.ContentTopContainer>
                <S.CoursesList 
                    data={favoritesCourses}
                    keyExtractor={course => course.id}
                    horizontal={false}
                    numColumns={2}
                    renderItem={({item: course})=>(
                        <S.CourseCard 
                            onPress={()=>navigate('Details', {id: course.id, name: course.name})}
                        >
                            <SvgUri
                                width={64}
                                height={64}
                                uri={course.avatar}
                            />
                            <S.CourseName>{course.name}</S.CourseName>
                            <S.CourseLessons>{course.number_of_classes} aulas</S.CourseLessons>
                        </S.CourseCard>
                    )}
                />
            </S.Content>
        </S.Container>
    )
}

export default Favorites
