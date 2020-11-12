import React, {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import axios, {Cancel} from 'axios'

import { useCourses } from '../../context/CoursesContext'

import api from '../../services/api'

import Logo from '../../assets/logo.png'

import * as S from './styles'

const Header: React.FC = () => {
    const { setCourses } = useCourses()
    
    const [search, setSearch] = useState('')

    useEffect(()=>{
        let cancel: any
        api.get('/courses', { 
            params: {
                search: `${search}`
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(response => {
            setCourses(response.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    },[search])

    return(
        <S.Container>
            <S.TopContainer>
                <S.Image source={Logo}/>
                <Icon name="power" color="#FFF" size={24}/>
            </S.TopContainer>
            <S.SerachBarContainer>
                <Icon name="search" color="#C4C4D1" size={18} style={{marginRight: 16}}/>
                <S.SearchBarInput 
                    onChangeText={text => setSearch(text)}
                    placeholder="Pesquise um curso"
                />
            </S.SerachBarContainer>
        </S.Container>
    )
}

export default Header