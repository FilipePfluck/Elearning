import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api'

import LessonHeader from '../../components/LessonHeader'

import * as S from './styles'

interface Params {
    id: string,
    name: string
}

const Details: React.FC = ()=>{
    const { navigate } = useNavigation()
    const route = useRoute()

    const {id, name} = route.params as Params

    const [lessons, setLessons] = useState([])

    useEffect(()=>{
        api.get(`/lessons/${id}`).then(response => {
            setLessons(response.data)
        })
    },[id])

    return(
        <S.Container>
            <LessonHeader CourseId={id}/>
            <S.Content>
                <S.ContentTop>
                    <S.Title>{name}</S.Title>
                    <S.LessonsNumber>{lessons.length} aulas</S.LessonsNumber>
                </S.ContentTop>

                <S.LessonsList 
                    data={lessons}
                    keyExtractor={lesson => lesson.id}
                    renderItem={({item: lesson, index})=>(
                        <S.LessonCard
                            onPress={()=>navigate('Lesson', {lesson, index, id, lessons})}
                        >
                            <S.PlayContainer>
                                <Icon name="play-circle" color="#FFF" size={48}/>
                            </S.PlayContainer>
                            <S.CardContent>
                                <S.CardTitle>{lesson.name}</S.CardTitle>
                                <S.CardInfoContainer>
                                    <S.CardInfo>Aula {index+1}</S.CardInfo>
                                    <S.CardInfo>{lesson.duration/60}min</S.CardInfo>
                                </S.CardInfoContainer>
                            </S.CardContent>
                        </S.LessonCard>
                    )}
                />
            </S.Content>
        </S.Container>
    )
}

export default Details