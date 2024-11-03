import BaseLayout from '@/components/layout/BaseLayout';
import Profile from '@/components/ui/Profile';

export default function Dashboard() {
  return (
    <BaseLayout isAuthenticated={true}>
      <div className="grid-cols-2">
        <Profile />
      </div>
    </BaseLayout>
  );
}
