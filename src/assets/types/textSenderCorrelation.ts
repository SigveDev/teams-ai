import { SenderEnum } from "../enums/senderEnum";

export interface TextSenderCorrelation {
  sender: SenderEnum;
  text: string;
}
