import React, { ReactElement } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { AiOutlineSave } from "react-icons/ai";
import { MdSaveAs } from "react-icons/md";
import { useTranslation } from "react-i18next";
import {
  Circle,
  Description,
  Line,
  StepsContainer,
  TimelineContainer,
} from "./TimelineStyles";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Text } from "../../screens/TrackShimpment/TrackShipmentStyles";
import { Status } from "../../types/ShipmentDetailsResponse.type";

const activeColor = (
  overallStatus: Status,
  currentStep: number,
  index: number
) => {
  if (currentStep >= index) {
    switch (overallStatus) {
      case "completed":
        return "green";
      case "warning":
        return "orange";
      case "error":
        return "red";
      default:
        return "lightgray";
    }
  } else {
    return "lightgrey";
  }
};
export function Timeline({
  currentStep,
  numberOfSteps,
  overallStatus,
  latestReason,
}: {
  currentStep: number;
  numberOfSteps: number;
  overallStatus: "completed" | "upcoming" | "error" | "warning";
  latestReason?: string;
}) {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.localization);

  const isFinalStep = (index: number) => index === numberOfSteps - 1;
  const isCurrentStep = (index: number) => index === currentStep;
  const iconColor = (index: number) => (index > currentStep ? "grey" : "#fff");
  // Mapping step index to corresponding icon
  const iconMapper: {
    [key: number]: { icon: ReactElement; description: string };
  } = {
    0: { icon: <MdSaveAs color="#fff" />, description: t("ShipmentCreated") },
    1: {
      icon: <FaTruckLoading color="#fff" />,
      description: t("ShipmentCollectedFromSeller"),
    },
    2: {
      icon: <FaTruckFast color="#fff" />,
      description: t("ShipmentOutForDelivery"),
    },
    3: {
      icon: <AiOutlineSave color="#fff" />,
      description: t("ShipmentDelivered"),
    },
  };

  const alignDescription = (index: number, language: "en" | "ar") => {
    if (index === 0) {
      if (language === "ar") return "right";
      else return "left";
    }
    if (isFinalStep(index)) {
      if (language === "ar") return "left";
      else return "right";
    }
    if (index === 1) {
      if (language === "ar") return "right";
      else return "left";
    }
    if (index === 2) {
      if (language === "ar") return "center";
      else return "center";
    }
  };
  return (
    <div>
      <TimelineContainer>
        {Array.from({ length: numberOfSteps }).map((_, index) => {
          const iconSize =
            isCurrentStep(index) || index > currentStep
              ? overallStatus === "completed"
                ? 14
                : 24
              : 14;

          return (
            <React.Fragment key={index}>
              <Circle
                bgColor={
                  index > currentStep
                    ? "transparent"
                    : activeColor(overallStatus, currentStep, index)
                }
                border={index > currentStep ? "3px solid lightgrey" : "none"}
                padding={
                  isCurrentStep(index) || index > currentStep
                    ? overallStatus === "completed"
                      ? "0.4rem"
                      : ".7rem"
                    : "0.4rem"
                }
              >
                {currentStep > index ||
                (currentStep === index && overallStatus === "completed") ? (
                  <FaCheck
                    color="#fff"
                    size={overallStatus === "completed" ? 14 : iconSize}
                  />
                ) : (
                  <>
                    {React.cloneElement(iconMapper[index].icon, {
                      size: iconSize,
                      color: iconColor(index),
                    })}
                  </>
                )}
              </Circle>
              {isFinalStep(index) ? null : (
                <Line
                  bgColor={activeColor(overallStatus, currentStep, index + 1)}
                ></Line>
              )}
            </React.Fragment>
          );
        })}
      </TimelineContainer>
      <StepsContainer>
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <Description
            key={index}
            textAlign={alignDescription(index, language) || ""}
            numberOfSteps={numberOfSteps}
          >
            {iconMapper[index].description}
            <Text
              properties={{
                color: activeColor(overallStatus, currentStep, index),
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {index === currentStep &&
                overallStatus !== "completed" &&
                latestReason}
            </Text>
          </Description>
        ))}
      </StepsContainer>
    </div>
  );
}
