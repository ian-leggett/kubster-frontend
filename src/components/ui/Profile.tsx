import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';

const Profile = () => {
  return (
    <Card className="rounded-lg max-w-sm">
      <div className="p-6">
        <h2 className="text-xl">Welcome back: Ian</h2>
        <ul className="my-5 ml-0 [&>li]:mt-2">
          <li>Username: </li>
        </ul>
      </div>
    </Card>
  );
};

export default Profile;
