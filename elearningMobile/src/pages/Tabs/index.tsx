import React from 'react'
import { withNavigation } from 'react-navigation'

import Header from '../../components/Header'
import RouteTabs from '../../routes/appTabs.routes'

import * as S from './styles'

const Tabs: React.FC = () => {
    return (
        <>
        <Header/>
        <RouteTabs/>
        </>
    )
}

export default Tabs