import React from 'react'

import { FavoritesProvider } from './FavoritesContext'

const AppProvider: React.FC = ({children}) => {
    return(
        <FavoritesProvider>
            {children}
        </FavoritesProvider>
    )
}

export default AppProvider 