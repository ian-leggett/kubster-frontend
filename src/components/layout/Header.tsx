import ProfileCard from '@/components/ui/ProfileCard';

import NavBar from './navigation/NavBar';
import ThemeSwitch from './navigation/ThemeSwitch';

const Header = () => (
  <header className="flex justify-between pb-[85px] md:pb-12">
    <ProfileCard />
    <div className="flex items-start gap-4 pt-2">
      <ThemeSwitch className="md:hidden bg-slate-800 rounded-md p-1 flex items-center" />
      <NavBar />
    </div>
  </header>
);

export default Header;
