import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Background from '../../assets/e.learning.png'
import LandingImg from '../../assets/landing.png'

import * as S from './styles'

const Landing: React.FC = () => {
    const {navigate} = useNavigation()

    return(
        <S.Container>
            <S.Background source={Background}/>
            <S.Content>
                <S.Image source={LandingImg}/>
                <S.Title>Aprenda da melhor forma</S.Title>
                <S.Subtitle>Entre na plataforma e acesse cursos de diversas áreas do conhecimento</S.Subtitle>
                <S.Button 
                    activeOpacity={0.8} 
                    onPress={() => navigate('Tabs')}
                >
                    <S.ButtonText>Começar os estudos</S.ButtonText>
                </S.Button>
            </S.Content>
        </S.Container>
    )
}

export default Landing