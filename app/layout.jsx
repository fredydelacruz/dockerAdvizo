import FooterAdvizo from "./body/FooterAdvizo";
import HeaderAdvizo from "./body/HeaderAdvizo";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <HeaderAdvizo></HeaderAdvizo>
        {children}
        <FooterAdvizo></FooterAdvizo>
      </body>
    </html>
  );
}
