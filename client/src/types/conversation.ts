import type { User } from "./user";

import type { Message } from "./message";

export type Conversation = {
  author: User;
  messages: Message[];
};
