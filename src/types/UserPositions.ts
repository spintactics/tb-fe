export interface UserPosition {
  user: string;
  channel?: string;
  securityType: string;
  direction: string;
  quantities?: number[]; // Array of numbers, optional
  openQuantities?: number[]; // Optional
  closeQuantities?: number[]; // Optional
  totalQuantity: number; // Default: 0
  securityName: string;
  prices?: number[]; // Optional
  openPrices?: number[]; // Optional
  closePrices?: number[]; // Optional
  avgPrice: number; // Default: 0
  avgOpenPrice: number; // Default: 0
  avgClosePrice: number; // Default: 0
  adjustedCostBasis: number; // Default: 0
  flags?: string[]; // Optional
  dateOpened: Date[]; // Required array of dates
  dateClosed?: Date[]; // Optional array of dates
  sentiment?: string; // Optional
  totalProfit: number; // Default: 0
  profitPercent: number; // Default: 0
  userTrades: string[]; // Required array of strings
  expirationDate?: Date; // Optional
  optionType?: string; // Optional
  strikePrice?: number; // Optional
  edited?: boolean; // Default: false
  tags?: string[]; // Optional
  info?: string[]; // Optional
  images?: string[]; // Optional
}

export interface GetUserPositionsResponse {
  data: UserPosition[]
}