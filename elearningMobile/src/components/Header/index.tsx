import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import Logo from '../../assets/logo.png'

import * as S from './styles'

const Header: React.FC = () => {
    return(
        <S.Container>
            <S.TopContainer>
                <S.Image source={Logo}/>
                <Icon name="power" color="#FF6680" size={24}/>
            </S.TopContainer>
            <S.SerachBarContainer>
                <Icon name="search" color="#C4C4D1" size={18} style={{marginRight: 16}}/>
                <S.SearchBarInput placeholder="Pesquise um curso"/>
            </S.SerachBarContainer>
        </S.Container>
    )
}

export default Header