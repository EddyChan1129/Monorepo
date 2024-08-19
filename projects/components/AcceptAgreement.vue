<template>
  <div class="private" v-show="!open">
    <h1>隐私条款</h1>
    <p>
      资料收集
      <br />
      1.不论您访问平台或平台代理的网站、注册一个账号、订阅任何我们的产品和服务、填写一份表格、回答调查问卷、开立银行账户、承诺为我们任何游戏捐赠奖金，还是参与我们促销活动，平台都将保留收集可识别资讯的权利。<br />
      2.当在网站上交易时，将要求您提供以下个人资讯：姓名、电子邮箱、电话号码，<br />
      3.当存款或取款时，将会要求输入您的真实姓名、银行卡号、开户行地址。尽管如此，您仍可匿名访问我们网站。<br /><br />

      保密性及安全<br />
      我们实施了一套严格的安全措施，以保障您个人资料的保密性。提供给我们的信用资料，通过国家最先进的SSL技术进行传输，并加密进我们合法的支付系统
      供应商资料库，只有授权的个人可以对它进行访问。<br /><br />

      什么是Cookies?<br />
      Cookies就是小型文档，由网站或其服务供应商通过浏览器传输到您电脑的硬盘（您应允许它），让网站或服务供应商有资格识别您的浏览器并获取以及记忆
      一些资料。供您参考：为了未来再次访问、监测广告、收集流量资料以及网站互动，平台平台使用cookies理解并记住您的喜好，以便于提高我们的工具及结构。<br /><br />

      备注<br />
      1.根据平台自主决定，资讯信息可能时时弹出，用户可选择禁用此功能。<br />
      2.另一方面，平台保留其权利向您提供服务相关的资讯，如服务通告和管理资讯，这些都被视为您账号的一部分，故用户不能禁用。<br />
      3.若您决定删除平台的账号，请联系我们客户服务部。不过，删除的账号可能会留在我们档案中。<br /><br />

      保密<br />
      除了信任和授权的协力厂商，即确保网站及我们整体商业的平稳运作的合作伙伴外，平台限制所有方式的销售、交易或转移我们客户的个人资讯到外界各方。同样地，这些协力厂商公司也承诺维护您个人资讯的保密性。<br /><br />

      用户同意<br />
      已经注册并提交您的个人资讯给我们，就视为您同意我们的隐私政策。
      私隐申明的修改
      平台在必要时，有权更新隐私申明。一旦更新，我们将通过邮件发送通知或通告，并张贴在主页上。
      任何反馈，请通过填写表格或使用我们客户邮件服务。
    </p>
    <hr />
    <div class="iknow">
      <a @click="tooglePrivateStatement">知道了</a>
    </div>
  </div>

  <div class="agreement">
    <Checkbox @click="handleChecked" />
    <span>我已阅读并同意</span>
    <a class="agreement-link" @click="tooglePrivateStatement">
      《条款和隐私政策》
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import useOverlay from '@/hooks/useOverlay';

const props = defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue']);

const handleChecked = () => {
  emit('update:modelValue', !props.modelValue);
};

const open = ref(true);
const { ToggleOverlay } = useOverlay();

const tooglePrivateStatement = () => {
  ToggleOverlay();
  open.value = !open.value;
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.private {
  position: absolute;
  background: $SelectBg;
  padding: 5%;
  font-size: 0.7rem;
  border-radius: 15px;
  margin: 0 5%;
  height: 80%;
  left: 0;
  top: 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    margin-bottom: 5%;
  }
  p {
    position: relative;
    text-align: left;
    height: 100%;
    overflow: auto;
  }

  .iknow {
    display: grid;
    place-content: center;
    height: 10%;
    text-align: center;
    font-weight: bold;

    a {
      color: $ActiveColor;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
.agreement {
  color: $normalColor;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.75rem;

  .agreement-link {
    color: $ActiveColor;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
