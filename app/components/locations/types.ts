import { Cover } from "../ui/panel/types";

interface Location {
  name: string;
  city: string;
  description: string;
  cover: Cover;
}

export interface LocationsProps {
  locations: Location[];
}