import styled from 'styled-components';

export const InputField = styled.input`
    width: 40%;
    border-radius: 10px;
    height: 1.5rem;
    border: 1px black solid;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

export const BodyInput = styled.textarea`
    width: 40%;
    border-radius: 10px;
    height: 5rem;
    border: 1px black solid;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    @media screen and (max-width: 768px) {
        width: 80%
    }
`

export const SubmitPost = styled.input`
    margin-top: 1rem;
    border-radius: 50px;
    background: #0180e7;
    font-weight: bold;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 3rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ebebeb;
        color: #0180e7;
    }
`