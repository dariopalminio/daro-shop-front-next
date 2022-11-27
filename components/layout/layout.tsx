import React from "react";


interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props: IProps) => {

  const { children } = props;

  return (
    <div>
     
      <p>Layout</p>
      { children }
      
    </div>
  );
}


export default Layout;