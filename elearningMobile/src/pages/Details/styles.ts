import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

interface Lesson {
    id: string,
    name: string,
    description: string,
    duration: number,
    video_id: string
}

export const Container = styled.View`

`

export const Content = styled.View`
    height: 100%;
    width: 100%;

    background-color: #F0EDF5;
    padding: 24px;
`

export const ContentTop = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 20px;
`

export const Title = styled.Text`
    font-size: 24px;
    color: #3D3D4C;
`

export const LessonsNumber = styled.Text`
    font-size: 18px;
    color: #A0A0B2;
` 

export const LessonsList = styled(FlatList as new () => FlatList<Lesson>)`
    margin-bottom: 16px;
`

export const LessonCard = styled(RectButton)`
    width: 90%;
    height: 120px;
    margin-left: auto;
    background-color: #FFF;
    border-radius: 16px;
    margin-top: 16px;
    padding: 16px;
    position: relative;
`
export const PlayContainer = styled.View`
    align-items: center;
    justify-content: center;

    position: absolute;
    left: -30px;
    top: 22%;
    bottom: auto;

    height: 80px;
    width: 80px;
    border-radius: 16px;
    background-color: #FF6680;
`

export const CardContent = styled.View`
    margin-left: 48px;
    height: 100%;
    width: 100%;
`

export const CardTitle = styled.Text`
    color: #6C6C80;
    font-size: 20px;
    max-width: 280px;

    margin-bottom: 4px;
`

export const CardInfoContainer = styled.View`
    flex-direction: row;
`

export const CardInfo = styled.Text`
    color: #C4C4D1;
    font-size: 16px;
    margin-right: 16px;
`