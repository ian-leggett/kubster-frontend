import * as React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

const Error = ({ error }: { error: string }) => (
  <Alert className="mx-auto mb-6 border-destructive">
    <AlertTitle className="text-destructive">
      <h2 className="text-lg">Error</h2>
    </AlertTitle>
    <AlertDescription className="text-destructive">{error}</AlertDescription>
  </Alert>
);

export default Error;
