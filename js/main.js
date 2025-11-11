// Импорт модулей
import { comments } from './comments.js';
import { renderComments } from './renderer.js';
import { initEventListeners } from './events.js';

// Запуск приложения
document.addEventListener("DOMContentLoaded", () => {
  renderComments(comments);
  initEventListeners(comments, renderComments);
});