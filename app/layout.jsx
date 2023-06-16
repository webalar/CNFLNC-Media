import '@styles/globals.css';
import { Poppins } from 'next/font/google'

import { ThemeProvider } from '@helpers/ThemeContext';

import Header from '@components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  // variable: '--font-poppins',
})

export const metadata = {
    title: "CNFLNC Media",
    description: "CNFLNC Media",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className={poppins.className}>
          <ThemeProvider>

            <Header />
            <main className="app">
                {children}
            </main>

          </ThemeProvider>
        </body>
    </html>
  )
}

export default RootLayout;