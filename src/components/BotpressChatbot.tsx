"use client";

import Script from "next/script";

const BotpressChatbot = () => {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="afterInteractive"
      />
      <Script
        id="botpress-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.botpressWebChat = {
              configUrl: "https://files.bpcontent.cloud/2025/12/30/16/20251230160623-O7WT6KLH.json"
            };
          `,
        }}
      />
    </>
  );
};

export default BotpressChatbot;
