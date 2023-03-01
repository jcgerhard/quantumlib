import { env } from '../../src/env/env';

const manual = async (packzFolder: string, languageToken: string): Promise<string | undefined> => {
    const macAppBundle = 'PACKZ 8.5.1 Build 29.app'; // ! Needs to be changed!
    if (env.osType === 'darwin') {
        return new URL(
            `file://${env.applicationsFolderBrowser}/${packzFolder}/${macAppBundle}/Contents/Resources/Manual/${languageToken}/index_frames.html`,
        ).toString();
    } else if (env.osType === 'win32') {
        return new URL(
            `file://${env.applicationsFolderBrowser}/${packzFolder}/Resources/Manual/${languageToken}/index_frames.html`,
        ).toString();
    } else {
        return undefined;
    }
};

export const packz = { manual };
