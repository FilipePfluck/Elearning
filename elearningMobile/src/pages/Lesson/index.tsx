import React from 'react'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Video from 'react-native-video'

import LessonHeader from '../../components/LessonHeader'

import * as S from './styles'
import { View } from 'react-native'

interface Lesson {
    id: string,
    name: string,
    description: string,
    duration: number,
    video_id: string
}

interface Params {
    lesson: Lesson,
    index: number,
    id: string
}

const Lesson: React.FC = ()=>{
    const route = useRoute()

    const RouteParams = route.params as Params

    const {lesson, index, id} = RouteParams

    return(
        <S.Container>
            <LessonHeader CourseId={id}/>
            <S.Content>
                
                <Video
                    source={{uri: `https://youtu.be/${lesson.video_id}`}}
                    controls
                    style={{
                        height: 200,
                        width: 700
                    }}
                />
                
                <S.Title>{lesson.name}</S.Title>
                <S.InfoContainer>
                    <S.Info>Aula {index+1}</S.Info>
                    <S.Info>{lesson.duration/60} min</S.Info>
                </S.InfoContainer>
                <S.Description>
                    {lesson.description}
                </S.Description>
                <S.ButtonsContainer>
                    <S.PreviousButton>
                        <Icon 
                            name="arrow-left" 
                            color="#FF6680"
                            size={18}
                            style={{marginRight: 4}}
                        />
                        <S.ButtonText
                            style={{color: '#FF6680'}}
                        >
                            Aula anterior
                        </S.ButtonText>
                    </S.PreviousButton>
                    <S.NextButton>
                        <S.ButtonText
                            style={{color: '#FFF'}}
                        >
                            Aula anterior
                        </S.ButtonText>
                        <Icon 
                            name="arrow-right" 
                            color="#FFF"
                            size={18}
                            style={{marginLeft: 4}}
                        />
                    </S.NextButton>
                </S.ButtonsContainer>
            </S.Content>
        </S.Container>
    )
}

export default Lesson