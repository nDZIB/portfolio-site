import { useEffect } from 'react';
import { analytics, logEvent } from '../config/firebase';

const useAnalytics = () => {
  useEffect(() => {
    const captureAnalytics = () => {
      try {
        // Device information
        const deviceInfo = {
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          viewport_size: `${window.innerWidth}x${window.innerHeight}`,
          pixel_ratio: window.devicePixelRatio,
          is_mobile: /Mobi|Android/i.test(navigator.userAgent),
          platform: navigator.platform,
          cpu_cores: navigator.hardwareConcurrency
        };

        // Browser information
        const browserInfo = {
          user_agent: navigator.userAgent,
          language: navigator.language,
          languages: navigator.languages,
          cookies_enabled: navigator.cookieEnabled,
          do_not_track: navigator.doNotTrack,
          online_status: navigator.onLine
        };

        // Page information
        const pageInfo = {
          page_path: window.location.pathname,
          page_location: window.location.href,
          page_title: document.title,
          referrer: document.referrer,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          timestamp: new Date().toISOString()
        };

        // Performance metrics
        const performanceInfo = {
          memory: performance.memory?.usedJSHeapSize, // Only works in Chrome
          timing: performance.timing?.domComplete - performance.timing?.domLoading,
          connection: navigator.connection?.effectiveType // Network information
        };

        const resp = logEvent(analytics, 'page_view', {
          ...deviceInfo,
          ...browserInfo,
          ...pageInfo,
          ...performanceInfo
        });
      } catch (error) {
      }
    };

    captureAnalytics();

    // Track user engagement
    const trackEngagement = () => {
      logEvent(analytics, 'user_engagement', {
        engagement_time: Math.floor(performance.now() / 1000)
      });
    };

    // Add event listeners for user engagement
    window.addEventListener('beforeunload', trackEngagement);
    
    return () => {
      window.removeEventListener('beforeunload', trackEngagement);
    };
  }, []);
};

export default useAnalytics;