import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface Course {
    id: string,
    name: string,
    number_of_classes: string,
    avatar: string
}

export const Container = styled.View`

`

export const Content = styled.View`
    height: 100%;
    width: 100%;
    
    border-radius: 32px;
    padding: 24px;
    background: #F0EDF5;
`

export const ContentTopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`

export const Title = styled.Text`
    font-size: 24px;
    color: #3D3D4C;
`

export const CoursesNumber = styled.Text`
    font-size: 18px;
    color: #A0A0B2;
`

export const CardsContainer = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`

export const CoursesList = styled(FlatList as new () => FlatList<Course>)`
    width: 100%;
`

export const CourseCard = styled(RectButton)`
    width: 48%;
    padding: 32px;
    border-radius: 16px;
    background-color: #FFF;  

    justify-content: center;
    align-items: center;   
    text-align: center;   

    margin: 4px;
`

export const CourseImage = styled.Image`

`

export const CourseName = styled.Text`
    font-size: 18px;
    color: #6C6C80
`

export const CourseLessons = styled.Text`
    color: #C4C4D1;
`

