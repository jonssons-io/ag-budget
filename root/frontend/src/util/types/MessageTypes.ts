type MessageType = "success" | "error" | "warning" | "info" | "loading";

export type MessagePopup = {
  key: string;
  type: MessageType;
  content: string;
  duration?: number;
};
