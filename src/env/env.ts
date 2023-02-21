import { userInfo, platform } from 'os';

const userName = userInfo().username;
const userHome = userInfo().homedir;

const osType = platform.toString();

export const applicationsFolder = osType === 'darwin' ? '/Applications' : 'C:\\Program Files';

export const env = {
    userName,
    userHome,
    osType,
    applicationsFolder,
};
