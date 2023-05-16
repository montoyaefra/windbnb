import {
  ButtonG,
  BtnWrapper,
  GuestWrapper,
  Title,
  TitleSub,
  Count,
} from '../GuestDropdown/GuestDropdownElements';

function GuestDropdown({ adult, setAdult, child, setChild }) {
  function incrementAdult() {
    setAdult(adult + 1);
  }

  function decrementAdult() {
    setAdult(adult - 1);
  }

  function incrementChild() {
    setChild(child + 1);
  }

  function decrementChild() {
    setChild(child - 1);
  }
  return (
    <>
      <GuestWrapper>
        <Title>Adults</Title>
        <TitleSub text>Age 13 or above</TitleSub>
        <BtnWrapper>
          <ButtonG onClick={decrementAdult} disabled={adult <= 0}>
            -
          </ButtonG>
          <Count>{adult}</Count>
          <ButtonG onClick={incrementAdult} disabled={adult >= 10}>
            +
          </ButtonG>
        </BtnWrapper>
      </GuestWrapper>

      <GuestWrapper>
        <Title>Children</Title>
        <TitleSub text>Age 2 - 12</TitleSub>
        <BtnWrapper>
          <ButtonG onClick={decrementChild} disabled={child <= 0}>
            -
          </ButtonG>
          <Count>{child}</Count>
          <ButtonG onClick={incrementChild} disabled={child >= 10}>
            +
          </ButtonG>
        </BtnWrapper>
      </GuestWrapper>
    </>
  );
}

export default GuestDropdown;
