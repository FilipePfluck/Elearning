import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    background-color: #6548A3;
    flex: 1;
    
    
    align-items: center;
`

export const Background = styled.Image`
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 600px;
`

export const Content = styled.View`
    z-index: 5;
    padding: 32px;

    margin-top: auto;

`

export const Image = styled.Image`
    margin-bottom: 72px;
`

export const Title = styled.Text`
    color: #FF6680;
    font-size: 40px;
    max-width: 300px;
`

export const Subtitle = styled.Text`
    color: #EDEBF5;
    font-size: 18px;
    margin-top: 8px;
`

export const Button = styled.TouchableOpacity`
    height: 60px;
    
    border-radius: 30px;
    background-color: #FF6680;
    margin-top: 40px;

    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
`