import {IconName} from "../../../assets/icons";

export interface IButton {
  title: string
  type: 'submit' | 'button' | 'reset'
  isFull?: boolean;
  iconNameLeft?: IconName;
  iconNameRight?: IconName;
}
