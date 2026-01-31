// api.js — работа с API Sky.Pro
export const apiKey = "svetlana_web81";
const apiURL = `https://webdev-api.sky.pro/api/v1/${apiKey}/comments`;

/**
 * Получение списка комментариев
 */
export async function getComments() {
  const response = await fetch(apiURL, { method: "GET" });
  if (!response.ok) {
    throw new Error("Ошибка загрузки комментариев");
  }
  return response.json();
}

/**
 * Отправка нового комментария
 */
export async function postComment(comment) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка отправки комментария");
  }
  return response.json();
}




  