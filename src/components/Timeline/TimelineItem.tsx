import React from "react";
import styled from "styled-components";
import {
  FaCheckCircle,
  FaRegCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const TimelineItemContainer = styled.div<{
  lineColor: string;
  overallStatus: "completed" | "current" | "error" | "upcoming";
}>`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    height: 12px;
    border-radius: 10px;
    width: 100%; /* Or a value to make it stretch to the next item */
    background: ${({ lineColor }) => lineColor || "#ccc"};
  }
`;

const IconWrapper = styled.div`
  z-index: 1;
  background-color: #fff;
  line-height: 0;
`;

const TimelineText = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
`;

const TimelineItem = ({
  status,
  label,
  overallStatus,
}: {
  status: "completed" | "current" | "error" | "upcoming";
  label: string;
  overallStatus: "completed" | "current" | "error" | "upcoming";
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <FaCheckCircle color="green" />;
      case "current":
        return <FaRegCircle color="orange" />;
      case "error":
        return <FaExclamationCircle color="red" />;
      default:
        return <FaRegCircle color="grey" />;
    }
  };

  return (
    <TimelineItemContainer
      overallStatus={overallStatus}
      lineColor={
        overallStatus === "completed"
          ? "green"
          : status === "error"
          ? "red"
          : "grey"
      }
    >
      <IconWrapper>{getStatusIcon()}</IconWrapper>
      <TimelineText>{label}</TimelineText>
    </TimelineItemContainer>
  );
};

export default TimelineItem;
