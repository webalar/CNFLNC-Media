import '@styles/globals.css';
import Header from '@components/Header';

export const metadata = {
    title: "About - CNFLNC Media",
    description: "About - CNFLNC Media",
}

export default function AboutLayout({ children }) {
  return <main className='bg-white'>
    <Header />
    {children}
    </main>;
}
