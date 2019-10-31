import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import budgetImg from 'assets/budget.png';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledBox = styled.div`
  background-image: linear-gradient(135deg, #6b6054 0%, #929487 100%);
  width: 50vw;
  height: 40rem;
  transform: rotateY(-40deg);
  position: relative;
  perspective: 1100px;
  box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.3);

  :nth-child(2) {
    right: 15rem;
  }

  :nth-child(1) {
    transform: rotateY(40deg);
    height: 50rem;
    right: -15rem;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  top: 45%;
  left: 60%;
  width: 80%;
  transform: translate(-50%, -50%) rotateY(30deg);
  color: #fff;
  text-align: right;
`;

const StyledGraphic = styled.div`
  background-image: url(${budgetImg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 45rem;
  width: 100rem;
  position: absolute;
  transform: rotateY(-20deg);
  top: 2rem;
  left: -15rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5rem;
`;

const HomeView = () => {
  return (
    <StyledWrapper>
      <StyledBox>
        <StyledGraphic />
      </StyledBox>
      <StyledBox>
        <StyledContent>
          <Heading>Budget Application</Heading>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            officia voluptatum? Beatae sequi ipsa sunt exercitationem
            voluptates.
          </StyledParagraph>
          <Button as={Link} to="/budget">
            Discover →
          </Button>
        </StyledContent>
      </StyledBox>
    </StyledWrapper>
  );
};

// const mapDispatchToProps = dispatch => ({
//   fetched: () => dispatch(fetchBudgetSuccess()),
// });

export default HomeView;
