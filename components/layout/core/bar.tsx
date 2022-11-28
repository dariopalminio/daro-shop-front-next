import styled from "styled-components";
import { AccessType, MenuItemType, MenuIconButton } from '../../../lib'
import { RiUserSearchFill, RiShieldUserFill, RiUserAddFill } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiFunctionFill } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

const TopMenuContainer = styled.div`
  position: relative;
  width: 100%;
  right: 30px;
  margin-right: 30px;
  left: 5px;
  display: flex; 
  align-items: center;
  justify-content: right;
`;

const Bar: React.FC = () => {

  const SubMenuUser: MenuItemType[] = [
    {
      key: "11",
      title: ("menu.login"),
      path: "/user/login",
      icon: <RiShieldUserFill />,
      access: [AccessType.ANONYMOUS],
      submenu: null
    },
    {
      key: "12",
      title: ("menu.logout"),
      path: "/user/logout",
      icon: <RiShieldUserFill />,
      access: [AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
    {
      key: "13",
      title: ("menu.register"),
      path: "/user/register/form",
      icon: <RiUserAddFill />,
      access: [AccessType.ANONYMOUS],
      submenu: null
    },
    {
      key: "14",
      title: ("menu.profile"),
      path: "/profile",
      icon: <RiUserSearchFill />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: null
    },
  ];

  const handleClick = (item: MenuItemType) => {
    const redirectToPath: string = item.path;
    alert(redirectToPath);
    //navigate(redirectToPath, { state: location }); // programmatically redirect
  }

  const UserTopMenuData: MenuItemType[] = [
    {
      key: "15",
      title: ("menu.user"),
      path: "/",
      icon: <RiAccountCircleFill size={24} />,
      access: [AccessType.ANONYMOUS, AccessType.USER, AccessType.ADMIN],
      submenu: SubMenuUser
    },
  ];

  return (
    <TopMenuContainer>

      <MenuIconButton 
      permission={'user'} 
      menuList={UserTopMenuData} 
      onClick={(item: MenuItemType) => handleClick(item)}
      />
      
    </TopMenuContainer>
  );
};

export default Bar;