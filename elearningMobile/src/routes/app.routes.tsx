
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'

import Tabs from './appTabs.routes'

const App = createStackNavigator()

const AppRoutes: React.FC = ()=>{
    return(
        <App.Navigator screenOptions={{
            headerShown: false,
        }} >
            
            <App.Screen name="Landing" component={Landing} />
            <App.Screen name="Tabs" component={Tabs} />

        </App.Navigator>
    )
}

export default AppRoutes