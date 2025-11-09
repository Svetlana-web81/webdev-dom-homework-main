export function initEventListeners(comments, renderComments) {
  const nameInput = document.querySelector(".add-form-name");
  const commentInput = document.querySelector(".add-form-text");
  const addButton = document.querySelector(".add-form-button");

  // Переключение лайка
  function toggleLike(index) {
    const comment = comments[index];
    comment.isLiked = !comment.isLiked;
    comment.likes += comment.isLiked ? 1 : -1;
    renderComments(comments);
  }

  // Добавление нового комментария
  function addComment() {
    const name = nameInput.value.trim();
    const text = commentInput.value.trim();

    if (!name) {
      alert("Пожалуйста, введите ваше имя.");
      nameInput.focus();
      return;
    }
    if (!text) {
      alert("Пожалуйста, введите ваш комментарий.");
      commentInput.focus();
      return;
    }

    const now = new Date();
    const date = now.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '');

    comments.push({
      name: name,
      text: text,
      date: date,
      likes: 0,
      isLiked: false,
    });

    renderComments(comments);
    nameInput.value = "";
    commentInput.value = "";
    nameInput.focus();
  }

  // Обработчик клика по комментарию
  document.querySelector(".comments").addEventListener("click", (e) => {
    const commentEl = e.target.closest(".comment");
    if (!commentEl) return;

    const text = comments[commentEl.dataset.index].text;
    commentInput.value = `${text}\n\n`;
    commentInput.focus();
  });

  // Обработчик лайка
  document.querySelector(".comments").addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button")) {
      e.stopPropagation();
      const index = e.target.dataset.index;
      toggleLike(index);
    }
  });

  // Кнопка отправки
  addButton.addEventListener("click", addComment);
}