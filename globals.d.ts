declare module "react" {
  interface DOMAttributes<T> {
    css?: never;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: never;
    }
  }
}

declare module "*.svg";

export {};
