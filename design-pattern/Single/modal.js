/**
 * 实现有个全局唯一的Modal弹框。
 */
// 1.闭包版
const Modal = (function () {
  let modal = null;
  return function () {
    if (!modal) {
      modal = document.createElement('div');
      modal.innerHTML = '我是一个全局唯一的Modal';
      modal.id = 'modal';
      modal.style.display = 'none';
      document.body.appendChild(modal);
    }

    return modal; 
  }
})();

// 2.class版
class ModalClass {
  static getInstance () {
    if (!ModalClass.instance) {
      ModalClass.instance = new ModalClass();
      setHtml(ModalClass.instance);
    }
    
    return ModalClass.instance;
  }

  setHtml (modal) {
    modal = document.createElement('div');
    modal.innerHTML = '我是一个全局唯一的Modal';
    modal.id = 'modal';
    modal.style.display = 'none';
    document.body.appendChild(modal);
  }

}

document.getElementById('open').addEventListener('click', () => {
  const modal = new Modal();
  modal.style.display = 'block';
})

document.getElementById('close').addEventListener('click', () => {
  const modal = new Modal();
  if (modal) {
    modal.style.display = 'none';
  }
})