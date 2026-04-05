'use client';

import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '@/lib/analytics';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Analytics() {
  console.log("GA ID:", GA_MEASUREMENT_ID);
  console.log("Enabled:", isAnalyticsEnabled());
  
  if (!isAnalyticsEnabled()) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
