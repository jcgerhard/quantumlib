import { platform } from 'os';
import { applicationsFolder } from '../env/env';

//const manualBaseURL = `C:\\Program Files\\PACKZ-8.5.1\\Resources\\Manual\\de\\index.html`;
//const manualBaseURL = `file:///Applications/PACKZ-8.5.1/PACKZ 8.5.1 Build 29.app/Contents/Resources/Manual/en/index_frames.html`;

const manualURL = (packzFolder: string, language: string): string => {
    const packzAppBundle = '';
    if (platform.toString() === 'darwin') {
        return `file://${applicationsFolder}/${packzFolder}/${packzAppBundle}/Contents/Resources/Manual/${language}/index_frames.html`;
    }
    if (platform.toString() === 'win32') {
        return `${applicationsFolder}\\${packzFolder}\\Resources\\Manual\\${language}\\index.html`;
    }
};

export const packz = { manualURL };
