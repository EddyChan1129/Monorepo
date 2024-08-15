<template>
  <div id="game-content">
    <div class="top-section">
      <img src="images/home/game2/start.svg" alt="game content svg" />
    </div>

    <div class="notice">
      <img src="/images/home/speaker.svg" alt="" />
      <p>
        尊敬的客户：当日总有效投注额满足活动要求，即可申请最高8,888元现金流水
      </p>
    </div>

    <div class="message">
      <img src="/images/home/rectangle/rec1.svg" alt="rectangle.logo" />
      <img src="/images/home/rectangle/rec2.svg" alt="rectangle.logo" />
      <img src="/images/home/rectangle/rec3.svg" alt="rectangle.logo" />
      <h3>赛道选择</h3>
      <img src="/images/home/rectangle/rec4.svg" alt="rectangle.logo" />
      <img src="/images/home/rectangle/rec5.svg" alt="rectangle.logo" />
      <img src="/images/home/rectangle/rec6.svg" alt="rectangle.logo" />
    </div>
    <div
      class="game-track2"
      v-for="(track, index) in trackStore.trackList"
      :key="index"
    >
      <img :src="track.img" alt="" />
      <div class="game-right">
        <img :src="track.miniTrack" alt="" />
        <div class="game-detail">
          <div>
            <p>跑道长度</p>
            <b
              ><i>{{ track.detail.length }}</i></b
            >
          </div>
          <div>
            <p>弯道</p>
            <b
              ><i>{{ track.detail.turn }}</i></b
            >
          </div>
          <div>
            <p>圈数</p>
            <b
              ><i>{{ track.detail.lap }}</i></b
            >
          </div>
          <div>
            <p>球粒</p>
            <b
              ><i>{{ track.detail.marbles }}</i></b
            >
          </div>
        </div>
      </div>
      <div class="game-bottom">
        <div class="start-logo">
          <img src="/images/home/game2/track-logo.png" alt="" />賽道
          {{ index + 1 }}
        </div>
        <span class="ready">
          准备中
          <div class="time">01:58</div>
        </span>
        <div class="gotry">前往体验</div>
      </div>
    </div>

    <div class="game-track" v-for="(item, index) in 4" :key="index">
      <img
        :src="
          index % 2 === 0
            ? '/images/home/game/gameTrack-1.svg'
            : '/images/home/game/gameTrack-2.svg'
        "
        alt=""
      />
      <div class="game-right">
        <img src="/images/home/game/track.svg" alt="" />
        <div class="game-detail">
          <div>
            <p>LENGTH</p>
            <b><i>3220CM</i></b>
          </div>
          <div>
            <p>TURN</p>
            <b><i>27</i></b>
          </div>
          <div>
            <p>LAPS</p>
            <b><i>1</i></b>
          </div>
          <div>
            <p>MARBLES</p>
            <b><i>10</i></b>
          </div>
        </div>
      </div>
      <div class="game-bottom">
        <div class="start-logo">
          <img src="/images/home/game/start.svg" alt="" />Track 01
        </div>
        <span class="ready">
          准备中
          <div class="time">01:58</div>
        </span>
        <div class="gotry">前往体验</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="GameContent">
import { ref, reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useTrackStore } from '@/utils/track';

const trackStore = useTrackStore();
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
#game-content {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-section {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .notice {
    background: rgb(248, 248, 248);
    display: flex;
    align-items: center;
    color: $normalColor;
    font-size: $normal;
    width: 100%;

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    p:hover {
      overflow: visible;
      white-space: normal;
    }
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.7rem 0;

    h3 {
      color: $normalColor;
    }
  }

  .game-track {
    position: relative;
    font-size: 0.72em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 1rem;

    .game-right {
      position: absolute;
      font-size: 0.6em;
      padding-right: 2%;
      right: 0;
      top: 0;
      height: 7rem;

      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 1) 100%
      );

      display: flex;
      align-items: center;

      img {
        width: 5.7rem;
      }

      .game-detail {
        display: flex;
        flex-direction: column;
        color: $ActiveColor;
        gap: 0.2rem;
        transform: scale(0.8);
      }
    }

    .game-bottom {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) 0%,
        #ffffff 100%
      );
      height: 2rem;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 0px 0px 5px 5px;
      color: $normalColor;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 0.5rem;

      .start-logo {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font-weight: bold;
      }
      .ready {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        color: rgba(7, 176, 34, 1);
        font-weight: bold;

        .time {
          border: 1px solid rgba(7, 176, 34, 1);
          background: transparent;
          color: rgba(7, 176, 34, 1);
          padding: 0 0.2rem;
          border-radius: 15px;
        }
      }

      .gotry {
        background: rgba(29, 107, 245, 1);
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 15px;
      }
    }
  }

  .game-track2 {
    position: relative;
    font-size: 0.6em;
    border-radius: 5px;
    margin-bottom: 1rem;

    .game-right {
      position: absolute;
      font-size: 0.6em;
      padding-right: 2%;
      right: 0;
      top: 0;
      height: 7rem;
      // from left to right left background: rgb(66, 56, 56, 0.1); right background: rgb(66, 56, 56, 1);
      background: linear-gradient(
        90deg,
        rgba(66, 56, 56, 0.1) 0%,
        rgba(0, 0, 0, 1) 100%
      );

      display: flex;
      align-items: center;

      img {
        width: 5.7rem;
      }

      .game-detail {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        gap: 0.2rem;
        transform: scale(0.8);
      }
    }

    .game-bottom {
      height: 2.2rem;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 0px 0px 5px 5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 0.5rem;

      .start-logo {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font-weight: bold;
      }
      .ready {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        color: #ffffff;
        font-weight: bold;

        .time {
          border: 1px solid #ffffff;
          background: #ffffff;
          color: rgba(7, 176, 34, 1);
          padding: 0 0.2rem;
          border-radius: 15px;
        }
      }

      .gotry {
        background: rgba(29, 107, 245, 1);
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 15px;
      }
    }
  }
}
</style>
