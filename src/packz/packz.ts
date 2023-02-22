import { env } from '../env/env';

const manualURL = (packzFolder: string, languageToken: string): string | undefined => {
    const packzAppBundle = 'PACKZ 8.5.1 Build 29.app';
    if (env.osType === 'darwin') {
        // MacOS: `file:///Applications/PACKZ-8.5.1/PACKZ%208.5.1%20Build%2029.app/Contents/Resources/Manual/en/index_frames.html`
        return new URL(
            `file://${env.applicationsFolderBrowser}/${packzFolder}/${packzAppBundle}/Contents/Resources/Manual/${languageToken}/index_frames.html`,
        ).toString();
    }
    if (env.osType === 'win32') {
        // Windows: `file:///C:/Program%20Files/PACKZ-8.5.1/Resources/Manual/de/index_frames.html`
        return new URL(
            `file://${env.applicationsFolderBrowser}/${packzFolder}/${packzAppBundle}/Contents/Resources/Manual/${languageToken}/index_frames.html`,
        ).toString();
    }
    if (env.osType === 'linux') {
        // Linux: currently not supported!
        return undefined;
    }
};

export const packz = { manualURL };
