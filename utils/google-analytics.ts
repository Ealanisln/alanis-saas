
  declare global {
    interface Window { 
        gtag: any;
    }
  }
  
  export const pageview = (url: string) => {
    if (window.gtag) {
      window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
        path_url: url,
      });
    }
  };
  