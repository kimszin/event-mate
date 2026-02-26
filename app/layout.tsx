import type { Metadata } from "next";
import "./globals.css";

// Removing Geist fonts in favor of Stitch project fonts

export const metadata: Metadata = {
  title: "경조사 장부 - 소중한 마음을 관리하는 가장 스마트한 방법",
  description:
    "결혼식, 장례식, 돌잔치 등 복잡한 경조사 비용 관리, 이제 종이 장부 대신 디지털로 간편하게 시작하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
