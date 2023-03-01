import { userInfo, platform } from 'os';

const userName = userInfo().username;
const userHome = userInfo().homedir;

const osType = platform();

const applicationsFolder = osType === 'darwin' ? '/Applications' : 'C:\\Program Files';
const applicationsFolderBrowser = osType === 'darwin' ? '/Applications' : '/C:/Program Files';

export const env = {
    userName,
    userHome,
    osType,
    applicationsFolder,
    applicationsFolderBrowser,
};
