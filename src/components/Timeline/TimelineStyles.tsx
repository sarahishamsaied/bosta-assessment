import styled from "styled-components";

export const TimelineContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Circle = styled.div<{
  bgColor: string;
  padding: string;
  border: string;
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};

  @media screen and (max-width: 768px) {
    padding: 0.2rem;
  }
`;

// Styled component for the connecting line
export const Line = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 0.5rem;
  background-color: ${(props) => props.bgColor};

  @media screen and (max-width: 768px) {
    height: 0.3rem;
  }
`;

// Styled component for the description
export const Description = styled.span<{
  textAlign: string;
  numberOfSteps: number;
}>`
  font-weight: bold;
  color: #2a324c;
  font-size: 0.9rem;
  text-align: ${(props) => props.textAlign};
  width: ${(props) => `${100 / props.numberOfSteps}%`};

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

// Styled component for the container of the circles and lines
export const StepsContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;
