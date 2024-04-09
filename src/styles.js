import styled from "styled-components";
import Background from './assets/backgroundLogin.png'

export const Container = styled.div`
    background: url(${Background});
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const ContainerItens = styled.div`
  
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;

    text-align: center;
    color:#FFFFFF;

    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;

    cursor: pointer;
 
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;

    color: #9CA41F;
    border-radius: 14px;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #FFFFFF;

    &:hover {
        opacity: 0.8;
        
        &:active {
            opacity: 0.5;
        }
    }
`;

