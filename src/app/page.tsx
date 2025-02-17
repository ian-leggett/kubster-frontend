import ThemeSwitch from '@/components/ui/ThemeSwitch';

import ProfileCard from './features/home/ProfileCard';
import SoftwareIcons from './features/home/SoftwareIcons';
import Summary from './features/home/Summary';

export default function Home() {
  return (
    <div className="mx-auto sm:w-full md:w-full lg:w-full w-2/3">
      <div className="flex justify-end pb-10">
        <ThemeSwitch />
      </div>
      <div className="relative">
        <div className="absolute inset-0 -top-3 origin-bottom-left -rotate-1 rounded-xl border-gray-300 bg-[#10B3D7] motion-rotate-in-1"></div>
        <div className="relative z-10 size-full border border-b rounded-xl border-gray-300 bg-gray-50 p-10 mt-5">
          <header className="w-[400px] group">
            <ProfileCard />
          </header>
          <main className="pt-20">
            <Summary />
            <SoftwareIcons />
          </main>
        </div>
      </div>
    </div>
  );
}
