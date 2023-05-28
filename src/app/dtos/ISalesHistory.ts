export class ISalesHistory {
  productName?: string;
  quantity: number = 0;
  timeStamp: Date = new Date();
  get timeStampFormatted(): string {
    return this.timeStamp.toString();
  }
}
