import styled from "styled-components";

type DataItemValueProps = {
  state: string;
};

export const TrackShipmentContent = styled.div`
  padding: 0.5rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    padding: 1.4rem;
  }
  // medium devices
  @media screen and (max-width: 1024px) {
    padding: 2.4rem;
  }
`;

export const ShipmentDetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e7e7;
  border-radius: 7px;
  border-bottom: 0;
  margin-top: 2rem;
`;
export const ShipmentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1.4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.4rem;
  }
`;
export const ShipmentProgress = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DataItem = styled.div``;

export const DataItemTitle = styled.p`
  font-size: 0.9rem;
  color: #a09d9d;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const DataItemValueState = styled.p<DataItemValueProps>`
  font-weight: bold;
  ${(props) => {
    if (props.state === "DELIVERED") {
      return `
                color: green;
            `;
    } else if (props.state === "CANCELLED") {
      return `
                color: red;
            `;
    } else if (props.state === "DELIVERED_TO_SENDER") {
      return `
                color: #F9BA02;
            `;
    }
  }}
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const DataItemValue = styled.p`
  font-size: 1.2rem;
  color: #2a324c;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Heading = styled.p<{
  size: "small" | "medium" | "large";
  color?: string;
  bold?: boolean;
}>`
  font-size: ${(props) => {
    if (props.size === "small") {
      return "1rem";
    } else if (props.size === "large") {
      return "1.5rem";
    } else {
      return "1.25rem";
    }
  }};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => (props.color ? props.color : "#2a324c")};
`;

export const BottomLayout = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: flex-start;
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const DeliveryAddressContainer = styled.div`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BottomLayoutTableItem = styled.div`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div<{ color: string }>`
  padding: 1rem;
  border-radius: 7px;
  background: ${(props) => props.color};
  border: 1px solid #e7e7e7;
  margin-bottom: 1rem;
`;

export const Text = styled.p<{
  properties: {
    color: string;
    fontWeight: "bold" | "semi-bold" | "light" | "normal";
    fontSize: number;
    onSmallScreen?: { fontSize: number };
  };
}>`
  color: ${(props) => props.properties.color};
  font-weight: ${(props) => {
    if (props.properties.fontWeight === "bold") {
      return "bold";
    } else if (props.properties.fontWeight === "semi-bold") {
      return "600";
    } else if (props.properties.fontWeight === "light") {
      return "300";
    } else {
      return "normal";
    }
  }};
  font-size: ${(props) => props.properties.fontSize}px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;

    ${(props) => {
      if (props.properties.onSmallScreen) {
        return `
          font-size: ${props.properties.onSmallScreen.fontSize}px;
        `;
      }
    }}
  }
`;
