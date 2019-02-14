// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  walletUrl: 'http://wallet.uos.network',
  votingUrl: 'http://wallet.uos.network/manageVoting/',
  appName: 'UOS u.community explorer',
  logoUrl: '/assets/logo.png',
  blockchainUrl: 'http://explorer.u.community:8888',
//  blockchainUrl: 'https://api-node-1.u.community:7888',
  chainId: '61887243d4467f0061b462a63a3e40f3dce917ed7d7cc6a79ad9a1a3be7e5e1e',
  showAds: false,
  tokensUrl: 'http://explorer.uos.network/tokens.json',
  tickerUrl: 'https://api.coinmarketcap.com/v2/ticker/1765/',
  token: 'UOS'
};
