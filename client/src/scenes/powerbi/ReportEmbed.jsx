import React, { useEffect, useRef } from 'react';
import * as powerbi from 'powerbi-client';

export const ReportEmbed = ({ embedToken, reportId }) => {
  const powerBiElement = useRef(null);
  const report = useRef(null);

  async function getNewAccessToken() {
    const tenantId = 'b8c6720c-0fea-4daa-aad0-b07917e89c92';
    const clientId = 'c009a629-4394-428c-b80d-6d0ac1a792f2';
    const clientSecret = '6504fe7c-a9f5-43d6-a8e4-bdfbf2f8a8f4';
    const resource = 'https://analysis.windows.net/powerbi/api';
  
    const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        resource: resource,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to get new access token');
    }
  
    const data = await response.json();
    return data.access_token;
  }

  useEffect(() => {
    const config = {
      type: 'report',
      tokenType: powerbi.models.TokenType.Embed,
      accessToken: embedToken,
      embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}`,
      id: reportId,
      permissions: powerbi.models.Permissions.All,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true,
      },
    };

    // Embed the report
    report.current = powerbi.embed(powerBiElement.current, config);

    // Set up token refresh
    const tokenRefreshInterval = setInterval(() => {
      // Get a new access token
      const newAccessToken = getNewAccessToken();

      // Set the new access token
      report.current.setAccessToken(newAccessToken);
    }, 60 * 60 * 1000); // Refresh token every hour

    // Clean up
    return () => {
      clearInterval(tokenRefreshInterval);
      report.current.off('loaded');
      report.current.off('error');
    };
  }, [embedToken, reportId]);

  return <div ref={powerBiElement}></div>;
};
