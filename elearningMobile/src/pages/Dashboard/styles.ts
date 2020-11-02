import styled from 'styled-components/native'

export const Container = styled.View`

`

export const Content = styled.View`
    height: 100%;
    width: 100%;
    
    border-radius: 32px;
    margin-top: -20px;
    padding: 24px;
    background: #F0EDF5;
`

export const ContentTopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const CourseCard = styled.View`
    width: 48%;
    padding: 32px;
    border-radius: 16px;
    background-color: #FFF;  

    justify-content: center;
    align-items: center;     
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