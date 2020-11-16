import React, {useState, useCallback, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Video from 'react-native-video'
import YoutubePlayer from "react-native-youtube-iframe"

import LessonHeader from '../../components/LessonHeader'

import * as S from './styles'
import { View } from 'react-native'
import { LessonsList } from '../Details/styles'

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
    id: string,
    lessons: Lesson[]
}

const Lesson: React.FC = ()=>{
    const route = useRoute()
    const { navigate } = useNavigation()

    const RouteParams = route.params as Params

    const {lesson, lessons, index, id} = RouteParams

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, [])

    const handleNextLesson = useCallback(()=>{
        if(index < lessons.length - 1){
            const nextLesson = lessons[index+1]

            navigate('Lesson', {lesson: nextLesson, index: index+1, id, lessons})
        }
        return
    },[lesson, index, id, lessons])

    const handlePreviousLesson = useCallback(()=>{
        if(index > 0){
            const previousLesson = lessons[index-1]

            navigate('Lesson', {lesson: previousLesson, index: index-1, id, lessons})
        }
        return
    },[lesson, index, id, lessons])

    return(
        <S.Container>
            <LessonHeader CourseId={id}/>
            <S.Content>

                <YoutubePlayer
                    height={300}
                    videoId={lesson.video_id}
                    play={playing}
                    onChangeState={onStateChange}
                    initialPlayerParams={{
                        controls: true,
                    }}
                />
                
                <S.Title>{lesson.name}</S.Title>
                <S.InfoContainer>
                    <S.Info>Aula {index+1}</S.Info>
                    <S.Info>{lesson.duration}</S.Info>
                </S.InfoContainer>
                <S.Description>
                    {lesson.description}
                </S.Description>
                <S.ButtonsContainer>
                    <S.PreviousButton onPress={handlePreviousLesson}>
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
                    <S.NextButton onPress={handleNextLesson}>
                        <S.ButtonText
                            style={{color: '#FFF'}}
                        >
                            Próxima aula
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