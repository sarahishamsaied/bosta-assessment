import styled from "styled-components";
import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
}

interface NavProps {
  language: "en" | "ar";
}

export const Nav = styled.nav<NavProps>`
  ${(props) =>
    props.language === "ar" ? "direction: rtl;" : "direction: ltr;"}
  background: #ffffff;
  height: 60px;
  display: flex;
  /** Added "calc" to make the navbar responsive */
  padding: 0.5rem calc((100vw - 1300px) / 2);
  align-items: center;
  border-bottom: 1px solid #efefef;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 140px;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1rem;
    cursor: pointer;
    margin: 0 auto;
  }
`;

export const Menu = styled.ul<MenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 10;
    top: 60px;
    inline-start: ${({ isOpen }: any) => (isOpen ? "0" : "-115%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #eeeeee;
    overflow: hidden;

    // This is for older browsers that do not support logical properties ===>
    ${({ isOpen, theme }) =>
      theme.direction === "rtl"
        ? `left: ${isOpen ? "0" : "-115%"}`
        : `right: ${isOpen ? "0" : "-115%"}`}
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const MenuItem = styled.button`
  color: #2a324c;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: transparent;
  outline: 0;
  border: 0;
  font-family: Cairo, sans-serif;
  &:hover {
    color: #e30613;
    border: 2px solid #efefef;
    border-radius: 7px;
    border-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    text-align: center;
  }
`;

export const TrackingPopup = styled.div`
  position: absolute;
  left: 0%;
  top: 100%; // Position right below the MenuItem
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  width: 250px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 7px;
`;

export const TrackingInput = styled.input<{ language: "en" | "ar" }>`
  width: 100%;
  padding: 0.8rem;
  border-radius: 7px;
  border: 1px solid #efefef;
  font-family: Cairo, sans-serif;
  ${(props) =>
    props.language === "en"
      ? "border-bottom-right-radius: 0; border-top-right-radius: 0;"
      : "border-bottom-left-radius: 0; border-top-left-radius: 0;"}

  &:focus {
    outline: "1px";
  }
`;

export const TrackingInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchButton = styled.button<{ language: "en" | "ar" }>`
  background: #e30613;
  color: #fff;
  padding: 1.1rem;
  border: none;
  border-radius: 7px;
  ${(props) =>
    props.language === "ar"
      ? "border-bottom-right-radius: 0; border-top-right-radius: 0;"
      : "border-bottom-left-radius: 0; border-top-left-radius: 0;"}
  cursor: pointer;
`;
