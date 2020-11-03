import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import LessonHeader from '../../components/LessonHeader'

import * as S from './styles'

const Details: React.FC = ()=>{
    const { navigate } = useNavigation()

    return(
        <S.Container>
            <LessonHeader/>
            <S.Content>
                <S.ContentTop>
                    <S.Title>Matemática</S.Title>
                    <S.LessonsNumber>16 aulas</S.LessonsNumber>
                </S.ContentTop>

                <S.LessonsCardContainer>
                    <S.LessonCard
                        onPress={()=>navigate('Lesson')}
                    >
                        <S.PlayContainer>
                            <Icon name="play-circle" color="#FFF" size={48}/>
                        </S.PlayContainer>
                        <S.CardContent>
                            <S.CardTitle>Introdução à teoria matemática</S.CardTitle>
                            <S.CardInfoContainer>
                                <S.CardInfo>Aula 01</S.CardInfo>
                                <S.CardInfo>5 min</S.CardInfo>
                            </S.CardInfoContainer>
                        </S.CardContent>
                    </S.LessonCard>
                    <S.LessonCard
                        onPress={()=>navigate('Lesson')}
                    >
                        <S.PlayContainer>
                            <Icon name="play-circle" color="#FFF" size={48}/>
                        </S.PlayContainer>
                        <S.CardContent>
                            <S.CardTitle>Introdução à teoria matemática</S.CardTitle>
                            <S.CardInfoContainer>
                                <S.CardInfo>Aula 01</S.CardInfo>
                                <S.CardInfo>5 min</S.CardInfo>
                            </S.CardInfoContainer>
                        </S.CardContent>
                    </S.LessonCard>
                    <S.LessonCard
                        onPress={()=>navigate('Lesson')}
                    >
                        <S.PlayContainer>
                            <Icon name="play-circle" color="#FFF" size={48}/>
                        </S.PlayContainer>
                        <S.CardContent>
                            <S.CardTitle>Introdução à teoria matemática</S.CardTitle>
                            <S.CardInfoContainer>
                                <S.CardInfo>Aula 01</S.CardInfo>
                                <S.CardInfo>5 min</S.CardInfo>
                            </S.CardInfoContainer>
                        </S.CardContent>
                    </S.LessonCard>
                    <S.LessonCard>
                        <S.PlayContainer>
                            <Icon name="play-circle" color="#FFF" size={48}/>
                        </S.PlayContainer>
                        <S.CardContent>
                            <S.CardTitle>Introdução à teoria matemática</S.CardTitle>
                            <S.CardInfoContainer>
                                <S.CardInfo>Aula 01</S.CardInfo>
                                <S.CardInfo>5 min</S.CardInfo>
                            </S.CardInfoContainer>
                        </S.CardContent>
                    </S.LessonCard>
                </S.LessonsCardContainer>
            </S.Content>
        </S.Container>
    )
}

export default Details