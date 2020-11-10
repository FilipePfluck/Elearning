 
import React, {createContext, useCallback, useState, useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

interface FavoritesContextData {
    favorites: any[]
    toggleFavorite: (id: string)=>void
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
        const isFavorite = favorites.some(fav => {
            return fav === id
        })

        var newState

        setFavorites(state => {
            
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
    },[])

    return(
        <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
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