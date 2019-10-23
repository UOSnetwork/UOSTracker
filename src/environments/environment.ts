// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'https://u.community',
  votingUrl: 'https://u.community/governance',
  appName: 'U°OS Network Explorer',
  logoUrl: '/assets/logo.png',
  blockchainUrl: 'https://history.uos.network:7889',
  chainId: '61887243d4467f0061b462a63a3e40f3dce917ed7d7cc6a79ad9a1a3be7e5e1e',
  showAds: false,
  tokensUrl: 'https://explorer.uos.network/tokens.json',
  tickerUrl: 'https://api.coinmarketcap.com/v2/ticker/4563/',
  token: 'UOS'
};
