import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import {
  Heading,
  TrackShipmentContent,
  DeliveryAddressContainer,
  BottomLayout,
  BottomLayoutTableItem,
  Card,
  Text,
} from "./TrackShipmentStyles";
import { useTranslation } from "react-i18next";
import { useShipmentDetails } from "../../hooks/useShipmentDetails";
import ShipmentDetailsCard from "./ShipmentDetailsCard";
import Table from "../../components/Table/Table";
import faq from "../../assets/faq.png";
import Button from "../../components/Button/Button";
import { Timeline } from "../../components/Timeline/Timeline";
import { calculateCurrentStep } from "../../utils/calculateCurrentStep";

type Props = {};

const TrackShimpment = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { data, error, isLoading } = useShipmentDetails(Number(id));
  console.log(data, error, isLoading);

  const statusMapper: { [key: string]: "completed" | "error" | "warning" } = {
    DELIVERED: "completed",
    CANCELLED: "error",
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Navbar />
      <TrackShipmentContent>
        <ShipmentDetailsCard data={data} shipmentNumber={Number(id)} />
        <Card color="transparent">
          <Timeline
            overallStatus={
              statusMapper[data?.CurrentStatus.state ?? ""] ?? "warning"
            }
            currentStep={calculateCurrentStep(data?.TransitEvents ?? [])}
            numberOfSteps={4}
          />
        </Card>

        <BottomLayout>
          <BottomLayoutTableItem>
            <Heading size="small" bold={true} color="#2a324c">
              {t("ShipmentDetails")}
            </Heading>
            <Table
              data={data?.TransitEvents ?? []}
              headers={[t("Branch"), t("Date"), t("Timing"), t("Details")]}
            />
          </BottomLayoutTableItem>
          <DeliveryAddressContainer>
            <Heading size="small">{t("DeliveryAddress")}</Heading>
            <Card color="#fbfbfb">
              <Text
                properties={{
                  color: "#596174",
                  fontWeight: "semi-bold",
                  fontSize: 16,
                }}
              >
                امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 ,
                Cairo
              </Text>
            </Card>
            <Card color="transparent">
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "30%" }}>
                  <img src={faq} width={"100%"} alt="Do you have a problem?" />
                </div>
                <div>
                  <Text
                    properties={{
                      color: "#596174",
                      fontWeight: "semi-bold",
                      fontSize: 16,
                    }}
                  >
                    {t("DoYouHaveProblemsWithYourShipment")}
                  </Text>
                  <Button
                    fontWeight="normal"
                    variant="primary"
                    size="medium"
                    onClick={() => {}}
                  >
                    {t("ReportAProblem")}
                  </Button>
                </div>
              </div>
            </Card>
          </DeliveryAddressContainer>
        </BottomLayout>
      </TrackShipmentContent>
    </div>
  );
};

export default TrackShimpment;
