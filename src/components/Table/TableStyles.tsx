import styled from "styled-components";

export const Thead = styled.thead`
  background: #fafafa;
`;

interface ThProps {
  language: "en" | "ar";
}

export const Th = styled.th<ThProps>`
  padding: 0.8rem 1rem;
  color: #878e9d;
  font-weight: 500;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  text-align: ${(props) => (props.language === "ar" ? "right" : "left")};

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    font-size: 0.7rem;
  }
`;

export const Tr = styled.tr`
  &:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
`;

export const Td = styled.td`
  padding: 0.8rem;
  border-bottom: 1px solid #e7e7e7;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    font-size: 0.7rem;
  }
`;

export const TableWrapper = styled.table`
  border-collapse: separate;
  width: 100%;
  border: 1px solid #e7e7e7;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  // Phones
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  // Tablets
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`;
