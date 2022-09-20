export type StatusType = "online" | "offline" | "away";

export type MessageType =
  | "reacted_your_post"
  | "followed_you"
  | "joined_your_group"
  | "private_message"
  | "commented_your_picture"
  | "left_the_group";

export interface INotification {
  id: number;
  user: IUser;
  time: string;
  read: boolean;
  body: ICardBody;
  status: StatusType;
}

export interface ICardBody {
  type: MessageType;
  message_inline?: string;
  message_box?: string;
  image?: string;
}

export interface IUser {
  name: string;
  avatar: string;
}
