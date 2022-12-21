export function modalIcon () {
    const modalContainer = document.createElement('div');
    const modalBody = document.createElement('div');
    const textModal = document.createElement('p');
    const close = document.createElement('a');

    modalContainer.classList.add('modal-container');
    modalBody.classList.add('modal-body');
    textModal.classList.add('text-modal');
    close.classList.add('close');

    textModal.innerText = 'Купленно!';
    close.innerText = 'x';
    close.addEventListener('click', () => {
        modalContainer.remove();
    });

    document.body.append(modalContainer);
    modalContainer.append(modalBody);
    modalBody.append(textModal);
    modalBody.append(close);
};
