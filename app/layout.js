import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Atelier Noor | Interior Design Studio",
    template: "%s | Atelier Noor",
  },
  description:
    "Luxury interior design portfolio for residential, commercial, and hospitality projects. Book a consultation with Atelier Noor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
