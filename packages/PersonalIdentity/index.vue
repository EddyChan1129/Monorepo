<template>
  <Header>身份绑定</Header>
  <div id="identity">
    <div>
      <h3>基本信息</h3>
      <div class="form-input">
        <input type="text" placeholder="请填写真实姓名" v-model="name" />
      </div>
      <p class="notice">*平台只会转账到该姓名下的银行卡，否则充值无法到账</p>
      <div class="form-input select-sex" @click="isSelect = !isSelect">
        <input type="text" placeholder="请选择性别" v-model="sex" />
        <img src="/images/input/polygonDown-logo.png" />
        <div class="selectPopup" v-show="isSelect">
          <p @click="sex = '男'">男</p>
          <p @click="sex = '女'">女</p>
        </div>
      </div>

      <div class="form-input">
        <input type="text" :placeholder="'注册于' + dateTime" />
      </div>

      <div class="form-input">
        <input
          type="text"
          :value="formatedDate"
          placeholder="请选择出生日期"
          @click="selectBirth"
        />
        <img src="/images/input/polygonDown-logo.png" />
      </div>
      <div v-if="showDatePicker" class="date-picker-overlay">
        <div class="date-picker-container">
          <p @click="confirmDate" class="confirm-btn">确定</p>
          <div class="date-picker">
            <div class="middle-line"></div>
            <div
              class="date-column"
              @scroll="onScroll('year')"
              ref="yearColumn"
            >
              <div v-for="(year, index) in years" :key="year" class="date-item">
                {{ year }}
              </div>
            </div>
            <div
              class="date-column"
              @scroll="onScroll('month')"
              ref="monthColumn"
            >
              <div v-for="month in months" :key="month" class="date-item">
                {{ month }}
              </div>
            </div>
            <div class="date-column" @scroll="onScroll('day')" ref="dayColumn">
              <div v-for="day in days" :key="day" class="date-item">
                {{ day }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SummitBtn :isok="isok" @click="handleSubmit">确认修改</SummitBtn>
  </div>
</template>
<script setup lang="ts" name="index">
import Header from '%/components/Header.vue';
import SummitBtn from '%/components/SummitBtn.vue';
import { ref, onMounted, nextTick, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}年${month}月${day}日 ${hour}：${minute}：${second}`;
};
const handleSubmit = () => {
  if (!isok.value) {
    alert('请填写完整信息');
    return;
  }
  // rounte push /comfirmIdentity and send parms to it
  console.log('submit');
  route.push({
    name: 'comfirmIdentity',
    query: {
      name: name.value,
      sex: sex.value,
      dateTime: dateTime.value,
      birth: `${selectedYear.value}-${selectedMonth.value}-${selectedDay.value}`,
    },
  });
};
const name = ref('');
const sex = ref('');
const dateTime = ref(formatDate(new Date()));
const isSelect = ref(false);
const showDatePicker = ref(false);
const isok = ref(false);

const selectedYear = ref('');
const selectedMonth = ref('');
const selectedDay = ref('');

const formatedDate = computed(() => {
  // format should be like "01日01月2021年"
  if (!selectedYear.value || !selectedMonth.value || !selectedDay.value) {
    return '';
  }
  const day = String(selectedDay.value).padStart(2, '0');
  const month = String(selectedMonth.value).padStart(2, '0');
  return `${day}日${month}月${selectedYear.value}年`;
});

const years = ref<number[]>([]);
const months = ref<number[]>(Array.from({ length: 12 }, (_, i) => i + 1));
const days = ref<number[]>([]);

const yearColumn = ref<HTMLElement | null>(null);
const monthColumn = ref<HTMLElement | null>(null);
const dayColumn = ref<HTMLElement | null>(null);

const selectBirth = () => {
  showDatePicker.value = true;
};

const confirmDate = () => {
  console.log(
    `Selected Date: ${selectedYear.value}-${selectedMonth.value}-${selectedDay.value}`
  );
  showDatePicker.value = false;
};

const onScroll = (type: 'year' | 'month' | 'day') => {
  let column: HTMLElement | null;
  switch (type) {
    case 'year':
      column = yearColumn.value;
      break;
    case 'month':
      column = monthColumn.value;
      break;
    case 'day':
      column = dayColumn.value;
      break;
    default:
      column = null;
  }

  if (column) {
    const itemHeight = column.querySelector('.date-item')?.offsetHeight || 0;
    const middleLineTop = column.clientHeight / 2;
    let selectedIndex = -1;

    column.querySelectorAll('.date-item').forEach((item, index) => {
      const itemTop =
        item.getBoundingClientRect().top - column.getBoundingClientRect().top;
      const itemBottom = itemTop + itemHeight;

      if (itemTop <= middleLineTop && itemBottom >= middleLineTop) {
        selectedIndex = index;
      }
    });

    if (selectedIndex !== -1) {
      switch (type) {
        case 'year':
          selectedYear.value = years.value[selectedIndex];
          break;
        case 'month':
          selectedMonth.value = months.value[selectedIndex];
          break;
        case 'day':
          selectedDay.value = days.value[selectedIndex];
          break;
      }
    }
  }
};

// if all input filled isok = true
watch([name, sex, selectedYear, selectedMonth, selectedDay], () => {
  isok.value =
    name.value &&
    sex.value &&
    selectedYear.value &&
    selectedMonth.value &&
    selectedDay.value
      ? true
      : false;
});

onMounted(() => {
  const currentYear = new Date().getFullYear();
  years.value = [
    ...Array(8).fill(''), // Extra padding at the start
    ...Array.from({ length: 100 }, (_, i) => currentYear - i),
    ...Array(8).fill(''), // Extra padding at the end
  ];

  months.value = [
    ...Array(8).fill(''), // Extra padding at the start
    ...Array.from({ length: 12 }, (_, i) => i + 1),
    ...Array(8).fill(''), // Extra padding at the end
  ];

  days.value = [
    ...Array(8).fill(''), // Extra padding at the start
    ...Array.from(
      {
        length: new Date(selectedYear.value, selectedMonth.value, 0).getDate(),
      },
      (_, i) => i + 1
    ),
    ...Array(8).fill(''), // Extra padding at the end
  ];

  nextTick(() => {
    const itemHeight =
      yearColumn.value?.querySelector('.date-item')?.offsetHeight || 0;
    if (yearColumn.value)
      yearColumn.value.scrollTop =
        (years.value.indexOf(selectedYear.value) - 3) * itemHeight; // Adjusted for padding
    if (monthColumn.value)
      monthColumn.value.scrollTop = (selectedMonth.value - 1) * itemHeight;
    if (dayColumn.value)
      dayColumn.value.scrollTop = (selectedDay.value - 1) * itemHeight;
  });
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

#identity {
  background: rgba(248, 248, 248, 1);
  height: 90vh;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.notice {
  font-size: 0.5em;
}

.form-input {
  background: rgba(255, 255, 255, 1);
  position: relative;
  display: flex;
  align-items: center;
  margin: 5% 0;
  border-radius: 0.7rem;

  input {
    font-size: calc($normal + 0.05rem);
    width: 100%;
    height: 2.3rem;
    border: none;
    padding-left: 5%;
    border-radius: 0.7rem;
  }

  input:focus {
    border: none;
    outline: none;
    padding-left: 5%;
  }

  img {
    position: absolute;
    right: 1rem;
  }
}

.form-input.select-sex {
  position: relative;

  .selectPopup {
    top: 90%;
    width: 100%;
    z-index: 100;
    position: absolute;

    p {
      background: rgba(255, 255, 255, 1);
      opacity: 0.8;
      padding: 0.3rem 1rem;
      font-size: $normal;
    }
  }
}
.date-picker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: end;
  font-size: xx-small;
}

.date-picker-container {
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.date-picker {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  overflow: hidden;
  scroll-snap-type: y mandatory; /* Ensure smooth scrolling to align items */
}

.middle-line {
  position: absolute;
  width: 85%;
  height: 1.5rem; /* Increase height to ensure item alignment */
  border-top: 1px solid rgba(127, 173, 255, 1);
  border-bottom: 1px solid rgba(127, 173, 255, 1);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.date-picker-container {
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: relative;
}

.date-column {
  width: 30%;
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-snap-type: y mandatory; /* Ensure smooth scrolling to align items */
  position: relative;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0)
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0)
  );
}

.date-item {
  text-align: center;
  padding: 0.4rem 0; /* Adjust padding to align text in the middle */
  font-size: 1.6em;
  color: gray;
  scroll-snap-align: center; /* Ensure each item snaps to the center */
  opacity: 1;
}
</style>
