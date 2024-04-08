export interface ShipmentResponse {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: Array<{
    state: string;
    timestamp: string;
    hub?: string;
    exceptionCode?: string;
    reason?: string;
  }>;
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: Array<{
    dayDate: string;
    dayName: string;
  }>;
}
