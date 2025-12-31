"use client";

import Script from "next/script";

const BotpressChatbot = () => {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/12/30/16/20251230160623-O7WT6KLH.json"
        strategy="afterInteractive"
      />
    </>
  );
};

export default BotpressChatbot;
