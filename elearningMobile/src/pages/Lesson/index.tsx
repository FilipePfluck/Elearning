import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import LessonHeader from '../../components/LessonHeader'

import * as S from './styles'

const Lesson: React.FC = ()=>{
    return(
        <S.Container>
            <LessonHeader/>
            <S.Content>
                <S.Video/>
                <S.Title>Introdução à teoria matemática</S.Title>
                <S.InfoContainer>
                    <S.Info>Aula 01</S.Info>
                    <S.Info>5min</S.Info>
                </S.InfoContainer>
                <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus condimentum gravida. Aenean condimentum vehicula sapien, eleifend metus congue vel. Suspendisse vitae tellus eu lacus facilisis auctor nec tristique eros.
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