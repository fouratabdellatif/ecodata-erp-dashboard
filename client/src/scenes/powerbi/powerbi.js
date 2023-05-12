import AuthenticationContext from 'adal-node';

const tenant = 'b8c6720c-0fea-4daa-aad0-b07917e89c92';
const clientId = 'c009a629-4394-428c-b80d-6d0ac1a792f2';
const clientSecret = '6504fe7c-a9f5-43d6-a8e4-bdfbf2f8a8f4';

export function getAccessToken() {
  return new Promise((resolve, reject) => {
    const authorityUrl = `https://login.microsoftonline.com/${tenant}`;
    const resource = 'https://analysis.windows.net/powerbi/api';
    const context = new AuthenticationContext(authorityUrl);

    context.acquireTokenWithClientCredentials(resource, clientId, clientSecret, (err, tokenResponse) => {
      if (err) {
        reject(err);
      } else {
        resolve(tokenResponse.accessToken);
      }
    });
  });
}
