import React from 'react'

import { FavoritesProvider } from './FavoritesContext'
import { CoursesProvider } from './CoursesContext'

const AppProvider: React.FC = ({children}) => {
    return(
        <FavoritesProvider>
            <CoursesProvider>
                {children}
            </CoursesProvider>
        </FavoritesProvider>
    )
}

export default AppProvider 