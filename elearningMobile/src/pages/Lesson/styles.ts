import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
    
`

export const Content = styled.ScrollView`
    height: 100%;
    padding: 24px;
    background-color: #F0EDF5;
`

export const Video = styled.View`
    width: 100%;
    height: 240px;

    background-color: #3D3D4C;
    border-radius: 16px;

`

export const Title = styled.Text`
    color: #6C6C80;
    font-size: 32px;
    max-width: 280px;

    margin-top: 24px;
`

export const InfoContainer = styled.View`
    flex-direction: row;

    margin: 20px 0;
`

export const Info = styled.Text`
    color: #C4C4D1;
    font-size: 16px;
    margin-right: 16px;
`

export const Description = styled.Text`
    color: #6C6C80;
    font-size: 18px;

    margin-bottom: 24px;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: auto;
`

export const Button = styled(RectButton)`
    width: 45%;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`

export const PreviousButton = styled(Button)`
    background-color: #F0EDF5;
    color: #FF6680;
`

export const NextButton = styled(Button)`
    background-color: #FF6680;
    color: #F0EDF5;
`

export const ButtonText = styled.Text`
    font-size: 16px;
`