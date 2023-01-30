import { userInfo } from 'os';

const applicationFolder = '/Applications';
const userName = userInfo().username;
const userFolder = userInfo().homedir;

export const os = { applicationFolder, userName, userFolder };
