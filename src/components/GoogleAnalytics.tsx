'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '@/lib/analytics';

export default function Analytics() {
  if (!isAnalyticsEnabled()) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
