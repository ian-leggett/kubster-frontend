export const navLinks = [
  {
    label: 'Dashboard',
    authRequired: false,
    href: '/'
  },
  {
    label: 'Waitlist',
    authRequired: true,
    href: 'waitlists'
  }
];

export const nonUserLinks = [
  {
    label: 'Signup',
    authRequired: false,
    href: '/signup'
  },
  {
    label: 'Login',
    authRequired: false,
    href: '/login'
  }
];

export default navLinks;
