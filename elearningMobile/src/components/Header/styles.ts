import styled from 'styled-components/native'

export const Container = styled.View`

    background-color: #6548A3;
    width: 100%;

    padding: 24px;
    padding-bottom: 60px;
`

export const TopContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
`

export const Image = styled.Image`

`

export const SerachBarContainer = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 24px;
    padding: 0 16px;

    width: 100%;
    height: 48px;
    border-radius: 24px;

    background-color: #FFF;
`

export const SearchBarInput = styled.TextInput`
    flex: 1;
    color: #C4C4D1;
`