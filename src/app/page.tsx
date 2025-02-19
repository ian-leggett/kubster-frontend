import ProfileCard from './home/ProfileCard';
import SoftwareIcons from './home/SoftwareIcons';
import Summary from './home/Summary';

export default function Home() {
  return (
    <>
      <section className="w-[400px] group">
        <ProfileCard />
      </section>
      <Summary />
      <SoftwareIcons />
    </>
  );
}
