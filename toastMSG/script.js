const init = () => {
    const get = (target) => {
      return document.querySelector(target);
    };
  
    var count = 0;
    const $toastBtn = get(".toast-button");
    const $toastContainer = get(".toast-container");
  
    const removeToast = () => {
      const $toast = get(".toast.show");
      $toast.remove("toast");
    };
  
    const createToast = (count) => {
      let $div = document.createElement("div");
      $div.classList.add("toast", "show");
      $div.prepend(count + "번 토스트 입니다");
      return $div;
    };
  
    const renderToast = (count) => {
      $toastContainer.prepend(createToast(count));
    };
  
    $toastBtn.addEventListener("click", () => {
      count++;
      renderToast(count);
      setTimeout(() => {
        removeToast();
      }, 3000);
    });
    return;
  };
  
  init();
  
