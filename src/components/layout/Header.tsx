import ProfileCard from '@/components/layout/ProfileCard';

import NavBar from './navigation/NavBar';

const Header = () => (
  <header className="flex justify-between pb-[85px] md:pb-12">
    <ProfileCard />
    <NavBar />
  </header>
);

export default Header;
