import { HasFormatter } from "../interfaces/formatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owned # ${this.amount} for ${this.details}`;
  }
}
