import React from 'react'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Dashboard from '../pages/Dashboard'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createMaterialTopTabNavigator()

function StudyTabs(){
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                    borderWidth: 0,
                    borderColor: "#fff",
                    backgroundColor: "#fff"
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 0,
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,         
                },
                labelStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginLeft: 16,
                },
                indicatorStyle: {
                    backgroundColor: '#FF6680',
                    height: 4
                },
                activeTintColor: "#FF6680",
                inactiveTintColor: "#999591",
            }}

            swipeEnabled
            tabBarPosition='bottom'

        >
            <Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{
                    tabBarLabel:"Home"
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel:"Favoritos"
                }}
            />
        </Navigator>
    )
}

export default StudyTabs