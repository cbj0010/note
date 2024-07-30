import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/**body태그에 inter 폰트 적용 */}
      <body
        className={`${inter.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        {children}
      </body>
    </html>
  );
}
