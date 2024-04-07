// assets
import { IconKey } from '@tabler/icons';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'category',
  caption: 'Product Category',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Product',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'Add',
          title: 'Add',
          type: 'item',
          url: '/product/add',
          icon: AddShoppingCartIcon,
          breadcrumbs: false
        },
        {
          id: 'View',
          title: 'View',
          type: 'item',
          url: '/product/view',
          icon: ShoppingBagIcon,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default pages;
