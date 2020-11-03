import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.png'

import * as S from './styles'

const LessonHeader: React.FC = ()=>{
    const { goBack } = useNavigation()

    return(
        <S.Container>
            <S.TopContainer>
                <Icon 
                    name="arrow-left" 
                    color="#FF6680" 
                    size={24}
                    onPress={()=>goBack()}
                />
                <S.Image source={Logo}/>
                <Icon name="heart" color="#FF6680" size={24}/>
            </S.TopContainer>
        </S.Container>
    )
}

export default LessonHeader