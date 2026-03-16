import localFont from "next/font/local";

export const perfectCorporate = localFont({
  src: [
    {
      path: "../../public/fonts/perfect-corporate/PerfectCorporate-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/perfect-corporate/PerfectCorporate-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/perfect-corporate/PerfectCorporate-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/perfect-corporate/PerfectCorporate-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-perfect",
});
