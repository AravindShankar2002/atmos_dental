import { sendGAEvent } from '@next/third-parties/google';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export const isAnalyticsEnabled = (): boolean => {
  return (
    process.env.NODE_ENV === 'production' &&
    Boolean(GA_MEASUREMENT_ID)
  );
};

export function trackEvent(params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) {
  if (!isAnalyticsEnabled()) return;
  sendGAEvent({
    event_name: params.action,
    event_category: params.category || 'engagement',
    event_label: params.label,
    value: params.value,
  });
}
