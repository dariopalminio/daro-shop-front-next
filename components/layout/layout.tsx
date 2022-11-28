import React from "react";
import { LayoutContextProvider, LayoutCore, TopNavBar } from '../../lib';
import Bar from "./core/bar";
import Footer from "./core/footer";
import SideBar from "./core/sidebar";
import noimage from '../../public/logo_app.png'
import Image from 'next/image'

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props: IProps) => {

  const { children } = props;

  const LogoImage = () => {
    return (
      <Image
        src={noimage}
        alt="Picture of the author"
      />
    )
  }

  return (
    <LayoutContextProvider>
      <LayoutCore
        topbar={<TopNavBar logo={ LogoImage()} bar={<Bar />} />}
        leftbar={<SideBar style={{ background: "#F9F9F9" }}></SideBar>}
        footer={<Footer companyName={'Footer data'} />}
      >
        {children}
      </LayoutCore>
    </LayoutContextProvider>
  );
}


export default Layout;