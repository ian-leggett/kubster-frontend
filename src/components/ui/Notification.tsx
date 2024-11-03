import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

type NotificationProps = {
  title: string;
  message: string;
  error?: boolean;
};

const Notification = ({ title, message, error = false }: NotificationProps) => (
  <Card
    className={`mx-auto mb-5 ${error ? 'border-destructive' : 'border-success'}`}
  >
    <CardHeader className="pb-0">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>{message}</CardContent>
  </Card>
);

export default Notification;
