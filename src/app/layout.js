import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "/src/app/globals.css";
import LayoutClient from "/src/app/LayoutClient"; // sesuaikan path jika perlu

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Jeep Tlogo Putri",
  description: "Website untuk mengelola Komunitas Jeep Tlogo Putri",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.variable} font-poppins`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });