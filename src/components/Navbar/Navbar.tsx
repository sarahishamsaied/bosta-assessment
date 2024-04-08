import React, { useEffect, useState } from "react";
import {
  Nav,
  Logo,
  Menu,
  MenuItem,
  MobileIcon,
  MenuItemsWrapper,
  TrackingPopup,
  TrackingInput,
  TrackingInputContent,
  SearchButton,
} from "./NavbarStyles";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLanguage } from "../../localization/localization.slice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import logoEn from "../../assets/logo_en.svg";
import logoAr from "../../assets/logo_ar.svg";
import { useParams } from "react-router-dom";
import { Text } from "../../screens/TrackShimpment/TrackShipmentStyles";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackingPopupOpen, setIsTrackingPopupOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [trackingNumber, setTrackingNumber] = useState(id);
  const language = useSelector(
    (state: RootState) => state.localization.language
  );
  const toggleBodyScroll = (isMenuOpen: boolean) => {
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const updateParams = (trackingNumber: string) => {
    window.location.href = `/track-shipment/${trackingNumber}`;
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  return (
    <Nav language={language}>
      <Logo src={`${language === "en" ? logoEn : logoAr}`} />
      <MobileIcon
        onClick={() => {
          setIsOpen(!isOpen);
          toggleBodyScroll(isOpen);
        }}
      >
        {isOpen ? (
          <FaTimes color="#3c3c3c" size={24} />
        ) : (
          <FaBars color="#3c3c3c" size={24} />
        )}
      </MobileIcon>
      <Menu isOpen={isOpen}>
        <MenuItemsWrapper>
          <MenuItem>{t("MainPage")}</MenuItem>
          <MenuItem>{t("Prices")}</MenuItem>
          <MenuItem>{t("ContactSales")}</MenuItem>
        </MenuItemsWrapper>
        <MenuItemsWrapper>
          <MenuItem
            onClick={() => setIsTrackingPopupOpen(!isTrackingPopupOpen)}
          >
            {t("TrackYourShipment")}
            {isTrackingPopupOpen && (
              <TrackingPopup>
                <Text
                  properties={{
                    color: "#2a324c",
                    fontWeight: "semi-bold",
                    fontSize: 14,
                  }}
                >
                  {t("TrackYourShipment")}
                </Text>
                <TrackingInputContent>
                  <TrackingInput
                    language={language}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onChange={(e) => {
                      setTrackingNumber(e.target.value);
                    }}
                    type="text"
                    placeholder={t("TrackingNumber")}
                  />
                  <SearchButton
                    language={language}
                    onClick={() => {
                      updateParams(trackingNumber ?? "");
                    }}
                  >
                    <IoSearchOutline />
                  </SearchButton>
                </TrackingInputContent>
              </TrackingPopup>
            )}
          </MenuItem>
          <MenuItem>{t("Login")}</MenuItem>{" "}
          <Button
            fontWeight="bold"
            size="small"
            variant="secondary"
            onClick={() => {
              dispatch(setLanguage(language === "en" ? "ar" : "en"));
            }}
          >
            {language === "en" ? "العربية" : "ENG"}
          </Button>
        </MenuItemsWrapper>
      </Menu>
    </Nav>
  );
};

export default Navbar;
