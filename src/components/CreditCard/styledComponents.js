// Style your elements here
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 10px;
`
export const CreditCardDiv = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding: 15px;
  }
`
export const Heading = styled.h1`
  border-bottom: solid #ffd773 4px;
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const CreditCardBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 8px;
  margin-top: 70px;
  margin-bottom: 70px;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 18px;
  padding: 15px;
  padding-top: 30px;
`
export const HolderName = styled.p`
  color: #d3d9e0;
  font-size: 9px;
  position: fixed;
  padding-left: 10px;
`
export const Name = styled.p`
  color: #ffffff;
  font-size: 18px;
  padding: 15px;
  padding-top: 23px;
`
export const MethodCard = styled.div`
  background-color: transparent;
  border: solid #d3d9e0 2px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  margin-top: 120px;
  margin-bottom: 150px;
`
export const MethodHeading = styled.h1`
  color: #344e7a;
  font-size: 15px;
  text-align: center;
`
export const NumberInput = styled.input`
  border: solid #c3cad9 2px;
  border-radius: 2px;
  outline: none;
  color: #475569;
  font-size: 10px;
  margin-bottom: 10px;
  padding: 5px;
  padding-right: 60px;
  @media screen and (max-width: 576px) {
    padding-right: 0px;
  }
`
export const NameInput = styled.input`
  border: solid #c3cad9 2px;
  border-radius: 2px;
  outline: none;
  color: #475569;
  font-size: 10px;
  padding: 5px;
`
