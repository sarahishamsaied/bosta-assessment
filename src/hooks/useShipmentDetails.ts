import { useQuery } from "react-query";
import { getShipmentDetails } from "../api/services/shipmentDetails.service";

// Hook to get shipment details by tracking number
export const useShipmentDetails = (trackingNumber: number) => {
  return useQuery(["shipmentDetails", trackingNumber], () =>
    getShipmentDetails(trackingNumber)
  );
};
