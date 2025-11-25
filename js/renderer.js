// renderer.js — отрисовка комментариев
import { escapeHTML } from './validators.js';

export function renderComments(comments) {
  const commentsList = document.querySelector(".comments");
  if (!commentsList) return;

  commentsList.innerHTML = "";

  comments.forEach((comment, index) => {
    const safeName = escapeHTML(comment.name);
    const safeText = escapeHTML(comment.text);
    const safeDate = escapeHTML(comment.date);

    const li = document.createElement("li");
    li.classList.add("comment");
    li.dataset.index = index;

    li.innerHTML = `
      <div class="comment-header">
        <div>${safeName}</div>
        <div>${safeDate}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">${safeText}</div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likes}</span>
          <button class="like-button ${comment.isLiked ? "-active-like" : ""}" data-index="${index}">👍</button>
        </div>
      </div>
    `;

    commentsList.appendChild(li);
  });
}

