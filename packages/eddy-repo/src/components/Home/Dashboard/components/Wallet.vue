<template>
  <div class="wallet">
    <div class="my-wallet">我的钱包</div>
    <div class="money-container">
      <div class="money">
        <img src="@/assets/home/money.png" alt="money" />
        <h2>0.00</h2>
      </div>
      <div class="money-action">
        <button class="save">存款</button>
        <button class="extract">取款</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Wallet"></script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.wallet {
  margin-top: 5%;
  border-radius: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 5%;

  .money-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .money-action {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      .save {
        background: $ActiveColor;
        border-radius: 0.5rem;
        padding: 0.35rem 1rem;
        color: white;
        border: none;
      }

      .extract {
        background: transparent;
        border-radius: 0.5rem;
        padding: 0.35rem 1rem;
        color: $ActiveColor;
        border: $ActiveColor 1px solid;
      }
    }
  }

  .my-wallet {
    font-size: 1em;
    font-weight: bold;
    color: $ActiveColor;
  }

  .money {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3em;
  }
}
</style>
