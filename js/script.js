// script.js — основная логика приложения
import { getComments } from './api.js';
import { renderComments } from './renderer.js';
import { initEventListeners, setCommentsState } from './events.js';

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const commentsFromServer = await getComments();
    setCommentsState(commentsFromServer);
    renderComments(commentsFromServer);
    initEventListeners();
  } catch (error) {
    console.error("Ошибка инициализации:", error);
    alert("Не удалось загрузить комментарии.");
  }
});

