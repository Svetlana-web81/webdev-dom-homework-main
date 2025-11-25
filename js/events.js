// events.js — обработка событий
import { postComment } from './api.js';
import { renderComments } from './renderer.js';

let comments = [];

export function initEventListeners() {
  const nameInput = document.querySelector(".add-form-name");
  const commentInput = document.querySelector(".add-form-text");
  const addButton = document.querySelector(".add-form-button");

  window.addComment = async function () {
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

    const now = new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '');

    const newComment = {
      name: name,
      text: text,
      date: now,
      likes: 0,
      isLiked: false,
    };

    try {
      const savedComment = await postComment(newComment);
      comments.push(savedComment);
      renderComments(comments);

      nameInput.value = "";
      commentInput.value = "";
      nameInput.focus();
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
      alert("Не удалось отправить комментарий.");
    }
  };

  window.toggleLike = function (index) {
    const comment = comments[index];
    comment.isLiked = !comment.isLiked;
    comment.likes += comment.isLiked ? 1 : -1;
    renderComments(comments);
  };

  document.querySelector(".comments").addEventListener("click", (e) => {
    const commentEl = e.target.closest(".comment");
    if (!commentEl) return;

    const text = comments[commentEl.dataset.index].text;
    commentInput.value = `${text}\n\n`;
    commentInput.focus();
  });

  document.querySelector(".comments").addEventListener("click", (e) => {
    if (e.target.classList.contains("like-button")) {
      e.stopPropagation();
      const index = e.target.dataset.index;
      toggleLike(index);
    }
  });

  addButton.addEventListener("click", addComment);
}

export function setCommentsState(newComments) {
  comments = newComments;
}

