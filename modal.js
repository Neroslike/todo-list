const DOMModal = (() => {
  const modal = document.querySelector("#modal");
  const modalContainer = document.querySelector("#modalContainer");
  let closeButton = document.querySelector(".closeButton");

  const showModal = () => {
    if (!modal.classList.contains("hidden")) {
      resetModal();
    } else {
      modal.classList.remove("hidden");
    }
  };

  const resetModal = () => {
    let modalContent = modalContainer.querySelector("div");
    modalContent.remove();
  };

  const hideModal = () => {
    resetModal();
    modal.classList.add("hidden");
  };

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      DOMModal.hideModal();
    }
  });

  closeButton.addEventListener("click", (e) => {
    DOMModal.hideModal();
  });

  return {
    hideModal,
    showModal,
    resetModal,
  };
})();

export default DOMModal;
