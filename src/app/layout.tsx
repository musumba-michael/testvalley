import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "테스트밸리 - 전자제품 사는게 즐겁다",
  description:
    "테스트밸리,전자제품,전자제품 체험,무료 체험,렌탈,전자제품 렌탈,전자제품 중고,중고,리퍼,리퍼브,중고나라,번개장터,당근마켓,파손 보험,애플케어,전자제품 쇼핑몰,전자제품 할인,전자제품 최저가",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
