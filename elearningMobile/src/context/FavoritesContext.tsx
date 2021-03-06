 
import React, {createContext, useCallback, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface FavoritesContextData {
    favorites: string[]
    toggleFavorite: (id: string)=>Promise<boolean>
    verifyIfIsFavorite: (id: string)=>boolean
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export const FavoritesProvider:React.FC = ({children}) => {

    const [favorites, setFavorites] = useState([] as string[])

    useEffect(()=>{
        async function LoadStorage(){
            const storagedFavorites = await AsyncStorage.getItem('@elearning:favorites')
            if(storagedFavorites){
                setFavorites(JSON.parse(storagedFavorites))
            }
        }

        LoadStorage()
    },[])

    const toggleFavorite = useCallback(async(id: string)=>{
        var isFavorite = false
        var newState

        setFavorites(state => {
            isFavorite = state.some(fav => {
                return fav === id
            })

            if(isFavorite){
                newState = state.filter(fav => {
                    return fav !== id
                })
            }else{
                newState = [...state, id]
            }

            return newState
        })

        await AsyncStorage.setItem('@elearning:favorites', JSON.stringify(newState))

        return !isFavorite
    },[])

    const verifyIfIsFavorite = useCallback((id: string)=>{
        const isFavorite = favorites.some(fav => {
            return fav === id
        })

        return isFavorite
    },[favorites])

    return(
        <FavoritesContext.Provider value={{favorites, toggleFavorite, verifyIfIsFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorite(): FavoritesContextData {
    const context = useContext(FavoritesContext)

    if(!context){
        throw new Error('useFavorites must be used within an FavoritesProvider')
    }

    return context
}