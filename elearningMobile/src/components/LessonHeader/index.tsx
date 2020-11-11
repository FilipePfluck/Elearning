import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { useFavorite } from '../../context/FavoritesContext'

import Logo from '../../assets/logo.png'

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

    useEffect(()=>{
        console.log(CourseId)
    },[])

    const toggle = useCallback(async()=>{
        const favorite = await toggleFavorite(CourseId)

        console.log(favorite)

        setIsFavorite(favorite)
    },[toggleFavorite])

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
                <Icon 
                    name="heart" 
                    color="#FF6680" 
                    size={24}
                    onPress={toggle}
                />
            </S.TopContainer>
        </S.Container>
    )
}

export default LessonHeader