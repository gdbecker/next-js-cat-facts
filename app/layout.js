import { Outfit } from 'next/font/google';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

const outfit = Outfit({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Next.js Cat Facts App',
  description: 'Click the button to learn a new fact about cats',
  keywords:
    'cat, facts, meow, whiskers, breed, furball',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>

        {children}

        <footer className="attribution">
          Coded by <a href="https://github.com/gdbecker/next-js-cat-facts" target="_blank">Garrett Becker</a>
        </footer>
      </body>
    </html>
  )
};
