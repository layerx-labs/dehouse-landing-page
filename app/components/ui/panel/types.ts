import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Cover {
  url: string | StaticImport;
  width: number;
  height: number;
}

export interface PanelProps {
  title: string;
  cover: Cover;
  icons?: string[];
  children: React.ReactNode;
  buttonUrl: string;
  buttonLabel: string;
}