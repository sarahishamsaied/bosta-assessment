import { ShipmentResponse } from "../../types/ShipmentDetailsResponse.type";
import apiClient from "../apiClient";

// Function to get shipment details by tracking number
export const getShipmentDetails = async (trackingNumber: number) => {
  try {
    const response = await apiClient.get<ShipmentResponse>(
      `/${trackingNumber}`
    );
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
};
