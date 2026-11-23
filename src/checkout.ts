import { siteConfig } from './siteConfig';

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

const FORWARDED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'fbclid', 'gclid'];

/** Checkout URL carrying the visitor's UTMs, so Cakto attributes each sale to its ad. */
export function checkoutUrl(): string {
  const url = new URL(siteConfig.courseCheckoutUrl);
  if (typeof window !== 'undefined') {
    const current = new URLSearchParams(window.location.search);
    FORWARDED_PARAMS.forEach(key => {
      const value = current.get(key);
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    });
  }
  return url.toString();
}

/** Pushes a `checkout_click` event to GTM with the CTA position that was clicked. */
export function trackCheckoutClick(location: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'checkout_click', cta_location: location, value: 97, currency: 'BRL' });
}

export function checkoutProps(location: string) {
  return { href: checkoutUrl(), onClick: () => trackCheckoutClick(location) };
}
