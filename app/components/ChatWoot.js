'use client'
import React, { useEffect } from "react";

const ChatwoptWidget = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
      expanded: true
    };

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    script.onload = function () {
      window.chatwootSDK.run({
        websiteToken: 'C6AFnSGTMefZurAMFfJVH71P',
        baseUrl: BASE_URL
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatwoptWidget;
