import { defineStore } from 'pinia';

export const useTrackStore = defineStore('track', {
  state() {
    return {
      trackList: [
        {
          trackName: '賽道一',
          img: '/images/home/game2/track1.png',
          miniTrack: '/images/home/game2/mini-track1.png',
          detail: {
            length: '3,220 CM',
            turn: '27',
            lap: '1',
            marbles: '10',
          },
          isRepair: false,
        },
        {
          trackName: '賽道二',
          img: '/images/home/game2/track2.png',
          miniTrack: '/images/home/game2/mini-track2.png',
          detail: {
            length: '2,050 CM',
            turn: '16',
            lap: '2',
            marbles: '10',
          },
          isRepair: false,
        },
        {
          trackName: '賽道三',
          img: '/images/home/game2/track3.png',
          miniTrack: '/images/home/game2/mini-track3.png',
          detail: {
            length: '2,180 CM',
            turn: '27',
            lap: '3',
            marbles: '4',
          },
          isRepair: true,
        },
      ],
    };
  },
});
