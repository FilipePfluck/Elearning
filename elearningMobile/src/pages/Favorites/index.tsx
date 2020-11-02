import React from 'react'

import Header from '../../components/Header'

import Math from '../../assets/Math.png'

import * as S from './styles'

const Favorites: React.FC = () => {
    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.ContentTopContainer>
                    <S.Title>Cursos favoritos</S.Title>
                </S.ContentTopContainer>
                <S.CardsContainer>
                    <S.CourseCard>
                        <S.CourseImage source={Math}/>
                        <S.CourseName>Matemática</S.CourseName>
                        <S.CourseLessons>16 aulas</S.CourseLessons>
                    </S.CourseCard>
                    <S.CourseCard>
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
