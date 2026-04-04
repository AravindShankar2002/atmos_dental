'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { trackEvent } from '@/lib/analytics';

export function WebVitals() {
  useReportWebVitals((metric) => {
    trackEvent({
      action: metric.name,
      category: 'Web Vitals',
      label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    });
  });
  return null;
}
