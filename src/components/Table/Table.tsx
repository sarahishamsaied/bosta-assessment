import React from "react";
import { ShipmentResponse } from "../../types/ShipmentDetailsResponse.type";
import { useTranslation } from "react-i18next";
import { Thead, Th, Tr, TableWrapper, Td, Reason } from "./TableStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Status } from "../../types/ShipmentDetailsResponse.type";

type Props = {
  data: ShipmentResponse["TransitEvents"];
  headers: string[];
};

const Table = ({ data, headers }: Props) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.localization);

  const getTime = (timestamp: string) => {
    const dateObject = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const time12Hour = dateObject.toLocaleTimeString(
      language,
      options as Intl.DateTimeFormatOptions
    );
    return time12Hour;
  };

  const getDate = (timestamp: string) => {
    const dateObject = new Date(timestamp);
    const date = dateObject.toISOString().split("T")[0];
    return date;
  };

  return (
    <div>
      <TableWrapper cellSpacing={0}>
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th language={language === "ar" ? "ar" : "en"} key={index}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <Td>{t("MadinatNasr")}</Td>
              <Td>{getDate(row.timestamp)}</Td>
              <Td>{getTime(row.timestamp)}</Td>
              <Td>
                {t(row.state)}
                {row.reason && (
                  <Reason state={row.state}>{t(row.reason ?? "")}</Reason>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
};

export default Table;
