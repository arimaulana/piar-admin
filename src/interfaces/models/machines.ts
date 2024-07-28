export type IMachineSession = {
  machineSessionId: string;
  machineId: string;
  machineCode: string;
  machineName: string;
  clientInfo: string;
  sessionCode: string; // -- generated session code, will be used to show on machine and user device
  sessionDate: string; // -- full date time
  sessionKey: string; // -- unique, sha256(`machineId|clientInfo`)
};

export type IMachineSessionHistory = {
  machineSessionId: string;
  machineId: string;
  machineCode: string;
  machineName: string;
  clientInfo: string;
  sessionDate: string;
  sessionDuration: number; // -- in seconds, session stop time - session date
  sessionCode: string; // -- generated session code, will be used to show on machine and user device
  isBuying: boolean;
  productId?: string;
  productName?: string;
  productPrice?: number;
  productQty?: number;
  paymentMethod?: string;
};

export type IMachineProduct = {
  machineProductId: string;
  machineId: string;
  productId: string;
  productCategoryId: string;
  machineCode: string;
  machineName: string;
  productName: string;
  productImageUrl: string;
  productCategoryName: string;
  productPrice: number;
  productStock: number;
  isActive: boolean;
};

export type IMachine = {
  machineId: string;
  machineCode: string;
  machineName: string;
  note: string;
  isActive: boolean;
};
