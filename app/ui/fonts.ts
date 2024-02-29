import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const kai = localFont({ src: '../../public/fonts/玄冬楷书.ttf' });

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
