
import styled from "styled-components";
import { RiHome2Fill, RiShieldUserFill, RiUserAddFill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiFunctionFill } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";


import { AccessType, MenuItemType, MenuList } from '../../../lib'


//Styled-components
const SideBarInner = styled.div`
        width: 100%;
        height: 100%;
        margin: 0px;
        background: #F9F9F9;
`;

interface Props {
  menuList?: MenuItemType[];
  style?: any;
}

/**
 * Patterns: Compound Components, Context Provider and Extensible Styles
 */
const SideBar: React.FC<Props> = ({ menuList, style }) => {

  
  const LeftMenuData: MenuItemType[] = [
    {
      key: "11",
      title: ("menu.home"),
      path: "/",
      icon: <RiHome2Fill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
    {
      key: "12",
      title: ("menu.catalog"),
      path: "/catalog",
      icon: <RiFunctionFill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
    {
      key: "13",
      title: ("menu.my.cart"),
      path: "/cart",
      icon: <RiShoppingCart2Fill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
    {
      key: "14",
      title: ("menu.login"),
      path: "/user/login",
      icon: <RiShieldUserFill />,
      access: [AccessType.ANONYMOUS],
      submenu: null
    },
    {
      key: "15",
      title: ("menu.logout"),
      path: "/user/logout",
      icon: <RiShieldUserFill />,
      access: [AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
    {
      key: "16",
      title: ("menu.register"),
      path: "/user/register/form",
      icon: <RiUserAddFill />,
      access: [AccessType.ANONYMOUS],
      submenu: null
    },
    {
      key: "17",
      title: ("menu.contact"),
      path: "/contact",
      icon: <RiMailSendFill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    }
  ];


  
  return (
    <SideBarInner style={style ? style : {}}>
      <MenuList
        onClick={(item: MenuItemType) => {}}
        id="MenuLeft"
        permission={'user'}
        menuList={LeftMenuData}></MenuList>
    </SideBarInner>
  );
};

export default SideBar;