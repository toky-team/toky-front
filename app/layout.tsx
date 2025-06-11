import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '신나는 정기전 승부예측, TOKY',
  description:
    '경기 결과를 예측해봐요. 예측에 성공하면 경기가 종료된 후 응모권을 받을 수 있어요. 응모권을 이용해 경품 당첨에 도전하세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
