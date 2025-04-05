interface MenuItem {
  title: string;
  route: string;
  prefetch: boolean;
}

interface MenuItems {
  primaryNavigation: MenuItem[];
}

const menuItems: MenuItems = {
  primaryNavigation: [
    {
      title: 'Home',
      route: '/',
      prefetch: true
    },
    {
      title: 'About',
      route: '/about',
      prefetch: true
    },
    {
      title: 'Blog',
      route: '/blog',
      prefetch: true
    },
    {
      title: 'CV',
      route: '/cv',
      prefetch: true
    },
    {
      title: 'Contact',
      route: '/contact',
      prefetch: true
    }
  ]
};

export default menuItems;
