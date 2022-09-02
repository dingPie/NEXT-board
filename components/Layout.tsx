import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
