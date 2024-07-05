// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
// constant
const icons = {
  LocalShippingIcon,
  StoreIcon,
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Category',
      type: 'item',
      url: '/utils/category',
      icon: icons.StoreIcon,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Orders',
      type: 'item',
      url: '/utils/orders',
      icon: icons.LocalShippingIcon,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'User',
      type: 'item',
      url: '/utils/user',
      icon: PersonIcon,
      breadcrumbs: false
    },
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default utilities;
