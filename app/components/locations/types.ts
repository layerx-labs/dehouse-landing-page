import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Cover {
  url: string | StaticImport;
  width: number;
  height: number;
}

interface Location {
  name: string;
  city: string;
  description: string;
  cover: Cover;
}

export interface LocationsProps {
  locations: Location[];
}