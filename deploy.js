const fs = require('fs');

const dotenv = require('dotenv');
const FtpDeploy = require('ftp-deploy');

dotenv.config();

const ftpDp = new FtpDeploy();

const localEnv = '.env.local';
if (fs.existsSync(localEnv)) {
  const localConfig = dotenv.parse(fs.readFileSync(localEnv));
  for (const k in localConfig) {
    process.env[k] = localConfig[k];
  }
}

const config = {
  user: 'dev',
  password: process.env.ED_FTP_PASS,
  host: '172.24.66.6',
  port: 8011,
  localRoot: __dirname + '/build',
  remoteRoot: `/data/ed/app/${process.argv[2]}`,
  include: ['*', '**/*'],
  deleteRemote: true,
  forcePasv: true,
};

ftpDp
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
