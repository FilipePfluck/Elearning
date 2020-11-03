
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import Details from '../pages/Details'
import Lesson from '../pages/Lesson'

import Tabs from '../pages/Tabs'

const App = createStackNavigator()

const AppRoutes: React.FC = ()=>{
    return(
        <App.Navigator screenOptions={{
            headerShown: false,
        }} >
            
            <App.Screen name="Landing" component={Landing} />
            <App.Screen name="Tabs" component={Tabs} />
            <App.Screen name="Details" component={Details} />
            <App.Screen name="Lesson" component={Lesson} />

        </App.Navigator>
    )
}

export default AppRoutes