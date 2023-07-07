import { Cover } from "../ui/panel/types";

interface Event {
  name: string;
  date: string;
  eventWebsite: string;
  cover: Cover;
}

export interface EventsProps {
  events: Event[];
}