import { Cover } from "../ui/panel/types";

interface Location {
  name: string;
  city: string;
  description: string;
  cover: Cover;
  amenities?: string[];
}

export interface LocationsProps {
  locations: Location[];
}