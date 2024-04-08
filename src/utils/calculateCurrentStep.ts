import { ShipmentResponse } from "../types/ShipmentDetailsResponse.type";

/**
 * @param transitEvents
 * @returns current step of the shipment
 * @description This function calculates the current step of the shipment based on the transit events.
 */

export const calculateCurrentStep = (
  transitEvents: ShipmentResponse["TransitEvents"]
) => {
  const stateToStep: { [key: string]: number } = {
    TICKET_CREATED: 0,
    PACKAGE_RECEIVED: 1,
    IN_TRANSIT: 2,
    DELIVERED: 3,
  };

  let currentStep = -1;
  const isCancelled = transitEvents.some(
    (event) => event.state === "CANCELLED"
  );

  if (isCancelled) {
    for (const event of transitEvents) {
      if (event.state === "CANCELLED") break;
      currentStep = Math.max(currentStep, stateToStep[event.state] ?? -1);
    }
  } else {
    currentStep = transitEvents.reduce(
      (acc, event) => Math.max(acc, stateToStep[event.state] ?? -1),
      currentStep
    );
  }

  return currentStep;
};
