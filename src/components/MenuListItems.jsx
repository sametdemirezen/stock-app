
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import { useNavigate } from 'react-router-dom';

const icons = [{
    icon: <GridViewRoundedIcon/>,
    title: "Dashboard",
    url: "/stock",
},
{
    title: "Purchase",
    icon: <ShoppingBagRoundedIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <PaidRoundedIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreRoundedIcon/>,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsRoundedIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryRoundedIcon />,
    url: "/stock/products/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisedUserCircleRoundedIcon />,
    url: "https://10001.fullstack.clarusway.com/admin",
  },
]
const MenuListItems = () => {

    const navigate = useNavigate()

  return (
    <div>
       <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </div>
  )
}

export default MenuListItems