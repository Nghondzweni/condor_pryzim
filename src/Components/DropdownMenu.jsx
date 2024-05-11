import { Menu, MenuItem, View, Image,MenuButton, Heading } from '@aws-amplify/ui-react';
import logoImage from '../Images/pryzim.online.jpg'
import '../Styles/DropdownMenu.scss'
import { useNavigate } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

export default function DropdownMenu({signOut}) {
  let org_name="The First Organization"
  const navigate = useNavigate()
  return (
    <View>

    <View className='MenuContainer'>
      <Menu className='DropdownOptions'  menuAlign="end">
        <MenuItem onClick={()=> navigate("/")}>Dashboard</MenuItem>
        <MenuItem onClick={()=> navigate("/financialperfornmance")}>Financial Performance</MenuItem>
        <MenuItem onClick={()=> navigate("/compliance")}>Compliance status</MenuItem>
        <MenuItem onClick={()=> navigate("/admin")}>Admin</MenuItem>
        <MenuItem onClick={()=> navigate("/settings")}>Settings</MenuItem>
        <MenuItem onClick={signOut}>Sign out</MenuItem>
      </Menu>
    </View>

    <View className='logocontainer'>
      <Image src={logoImage} alt="Logo" className="logo-image" />
    </View>

    <Heading marginBottom={20}>{org_name}</Heading>

    </View>
  );
};

