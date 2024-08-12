export default () => {
  const displaySuccess = (
    title: string = '注册成功',
    actions: string = '前住登錄頁面',
    goTo: string = '/'
  ) => {
    const msg = `
    <div class="success">
  <div class="success_content">
    <img src="/src/assets/success/success.png" alt="succesful image" />
  </div>
  <div class="success_content">${title}</div>
  <hr />
    <div class="success_content">
      <a href="${goTo}">${actions}</a>
  </div>
  </div>`;
    const toastBox = document.documentElement as HTMLElement;
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
  };

  return {
    displaySuccess,
  };
};
