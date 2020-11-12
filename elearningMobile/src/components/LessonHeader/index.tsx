import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { useFavorite } from '../../context/FavoritesContext'

import Logo from '../../assets/logo.png'
import Favorite from '../../assets/favorite.svg'

import * as S from './styles'

interface HeaderParams {
    CourseId: string
}

const LessonHeader: React.FC<HeaderParams> = ({ CourseId })=>{
    const { goBack } = useNavigation()
    const { toggleFavorite, verifyIfIsFavorite } = useFavorite()

    const [isFavorite, setIsFavorite] = useState(()=>{
        return verifyIfIsFavorite(CourseId)
    })

    const toggle = useCallback(async()=>{
        const favorite = await toggleFavorite(CourseId)

        setIsFavorite(favorite)
    },[toggleFavorite])

    return(
        <S.Container>
            <S.TopContainer>
                <S.Touchable onPress={()=>goBack()}>
                <Icon 
                    name="arrow-left" 
                    color="#FFF" 
                    size={24}
                />
                </S.Touchable>
                <S.Image source={Logo}/>
                <S.Touchable onPress={toggle}>
                {isFavorite && (
                    <Icon 
                        name="heart" 
                        color="#FF6680" 
                        size={24}
                        
                    />
                )}
                {!isFavorite && (
                    <Icon 
                        name="heart" 
                        color="#FFF" 
                        size={24}
                    />
                )}
                </S.Touchable>
            </S.TopContainer>
        </S.Container>
    )
}

export default LessonHeader