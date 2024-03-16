import '@/app/ui/global.css';
<<<<<<< HEAD
import { inter } from '@/app/ui/fonts';
=======
import { inter } from './ui/fonts';
>>>>>>> 0e763818c8e2e80f6973088ab52b44c250a41277

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
