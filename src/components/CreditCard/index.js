// Write your code here
import {useState} from 'react'
import {
  CreditCardContainer,
  CreditCardDiv,
  Heading,
  CreditCardBg,
  CardNumber,
  HolderName,
  Name,
  MethodCard,
  MethodHeading,
  NumberInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [numberInput, setNumber] = useState('')
  const [nameInput, setName] = useState('')

  const changeNumberInput = event => {
    setNumber(event.target.value)
  }

  const changeNameInput = event => {
    setName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CreditCardDiv>
        <Heading>CREDIT CARD</Heading>
        <CreditCardBg data-testid="creditCard">
          <CardNumber>{numberInput}</CardNumber>
          <HolderName>CARDHOLDER NAME</HolderName>
          <Name>{nameInput}</Name>
        </CreditCardBg>
      </CreditCardDiv>
      <MethodCard>
        <MethodHeading>Payment Method</MethodHeading>
        <NumberInput
          type="text"
          placeholder="Card Number"
          onChange={changeNumberInput}
          value={numberInput}
        />
        <NameInput
          type="text"
          placeholder="Cardholder Name"
          onChange={changeNameInput}
          value={nameInput}
        />
      </MethodCard>
    </CreditCardContainer>
  )
}

export default CreditCard
