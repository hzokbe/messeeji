export type Message = {
  content: string;
  date: Date;
  type: "sent" | "received";
};
