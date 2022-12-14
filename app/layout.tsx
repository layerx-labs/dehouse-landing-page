import RootStyleRegistry from "./RootStyleRegistry";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head />
        <body>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </body>
      </html>
    </>
  );
}
