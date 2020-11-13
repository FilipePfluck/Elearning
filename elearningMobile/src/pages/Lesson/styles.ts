import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

export const Container = styled.View`
    flex: 1;
`

export const Content = styled.View`
    flex: 1;
    padding: 24px;
    background-color: #F0F0F5;
`

export const Video = styled.View`

    background-color: #3D3D4C;
    border-radius: 16px;
`

export const Title = styled.Text`
    color: #6C6C80;
    font-size: 32px;
    max-width: 280px;

    margin-top: -24px;
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
    position: absolute; bottom: 0px;
    padding: 24px;
    width: ${width};
    flex-direction: row;
    justify-content: space-between;
    
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