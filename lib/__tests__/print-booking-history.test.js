const printBookingHistory = require('../print-booking-history');

import SoundPlayer from './sound-player';


test('prints passenger bookings', () => {
    const passenger = {
        name: "Oğuzhan",
        location: "İstanbul",
        bookings: [{
            passenger: {name: "Oğuzhan"},
            driver: {name: "Stefan"},
            origin: "İstanbul",
            destination: "Bolu"
        }]
    }
    const consoleSpy = jest.spyOn(console, 'log')   // console u dinliyor
    printBookingHistory(passenger)
    // fix this error here:
    expect(consoleSpy).toHaveBeenCalledWith("Oğuzhan booked Stefan to travel from İstanbul to Bolu")

    spy.mockRestore();

    // ---- end of real test ---- // 

//     jest.mock('fs');

//     describe('listFilesInDirectorySync', () => {
//     const MOCK_FILE_INFO = {
//         '/path/to/file1.js': 'console.log("file1 contents");',
//         '/path/to/file2.txt': 'file2 contents',
//     };

//     beforeEach(() => {
//         // Set up some mocked out file info before each test
//         require('fs').__setMockFiles(MOCK_FILE_INFO);
//     });

//     test('includes all files in the directory in the summary', () => {
//         const FileSummarizer = require('../FileSummarizer');
//         const fileSummary =
//         FileSummarizer.summarizeFilesInDirectorySync('/path/to');

//         expect(fileSummary.length).toBe(2);
//     });
//     });

//     Object.defineProperty(window, 'matchMedia', {
//         writable: true,
//         value: jest.fn().mockImplementation(query => ({
//           matches: false,
//           media: query,
//           onchange: null,
//           addListener: jest.fn(), // deprecated
//           removeListener: jest.fn(), // deprecated
//           addEventListener: jest.fn(),
//           removeEventListener: jest.fn(),
//           dispatchEvent: jest.fn(),
//         })),
//       });
// });


// export default class SoundPlayerConsumer {
//   constructor() {
//     this.soundPlayer = new SoundPlayer();
//   }

//   playSomethingCool() {
//     const coolSoundFileName = 'song.mp3';
//     this.soundPlayer.playSoundFile(coolSoundFileName);
//   }
//   playSomethingRelax() {
//     const coolRelaxCouch = 'relax.mp3';
//     this.soundPlayer.playRelaxCouch(coolRelaxCouch);
//   }

//   playSoundsDifferent() {
//     const coolPlayDifferent = 'testSong.mp3';
//     this.soundPlayer.playDifferentSounds(coolPlayDifferent);
//   }
// }