import '@styles/globals.css';
import Header from '@components/Header';

export const metadata = {
    title: "Work - CNFLNC Media",
    description: "Work - CNFLNC Media",
}

export default function ProjectLayout({ children }) {
  return <main className=''>
    <Header />
    {children}
    </main>;
}
