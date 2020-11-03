import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Math from '../../assets/Math.png'

import * as S from './styles'

const Favorites: React.FC = () => {
    const { navigate } = useNavigation()

    return(
        <S.Container>
            <S.Content>
                <S.ContentTopContainer>
                    <S.Title>Cursos favoritos</S.Title>
                </S.ContentTopContainer>
                <S.CardsContainer>
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
                    
                </S.CardsContainer>
            </S.Content>
        </S.Container>
    )
}

export default Favorites
