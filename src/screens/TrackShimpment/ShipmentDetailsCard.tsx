import React from "react";
import {
  ShipmentDetails,
  ShipmentDetailsWrapper,
  DataItem,
  DataItemTitle,
  DataItemValue,
  DataItemValueState,
} from "./TrackShipmentStyles";
import { ShipmentResponse } from "../../types/ShipmentDetailsResponse.type";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type Props = {
  shipmentNumber: number;
  data: ShipmentResponse | null | undefined;
};

const ShipmentDetailsCard = ({ data, shipmentNumber }: Props) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.localization);

  const convertToArabicDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const arabicDate = date.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return arabicDate;
  };

  const convertToEnglishDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const englishDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return englishDate;
  };
  return (
    <div>
      <ShipmentDetailsWrapper>
        <ShipmentDetails>
          <DataItem>
            <DataItemTitle>
              {t("ShipmentNumber")}: {shipmentNumber}
            </DataItemTitle>
            <DataItemValueState state={data?.CurrentStatus.state ?? ""}>
              {data?.CurrentStatus.state !== "DELIVERED" &&
              data?.CurrentStatus.state !== "CANCELLED"
                ? t("SHIPMENT_NOT_DELIVERED")
                : t(data?.CurrentStatus.state ?? "DELIVERED")}
            </DataItemValueState>
          </DataItem>
          <DataItem>
            <DataItemTitle>{t("LastUpdate")}</DataItemTitle>
            <DataItemValue>
              {language === "ar"
                ? convertToArabicDate(data?.CurrentStatus.timestamp ?? "")
                : convertToEnglishDate(data?.CurrentStatus.timestamp ?? "")}
            </DataItemValue>
          </DataItem>
          <DataItem>
            <DataItemTitle>{t("SellerName")}</DataItemTitle>
            <DataItemValue>
              {data?.provider ?? t("NOT_AVAILABLE")}
            </DataItemValue>
          </DataItem>
          <DataItem>
            <DataItemTitle>{t("DateOfDeliveryWithin")}</DataItemTitle>
            <DataItemValue>
              {language === "ar"
                ? convertToArabicDate(data?.PromisedDate ?? "")
                : convertToEnglishDate(data?.PromisedDate ?? "")}
            </DataItemValue>
          </DataItem>
        </ShipmentDetails>
      </ShipmentDetailsWrapper>
    </div>
  );
};

export default ShipmentDetailsCard;
