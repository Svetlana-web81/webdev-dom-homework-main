const apiKey = "svetlana_web81";
fetch("https://webdev-api.sky.pro/api/v1/svetlana_web81/comments", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
  fetch("https://webdev-api.sky.pro/api/v1/svetlana_web81/comments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Светлана",
    text: "Привет, это мой комментарий!",
  }),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Ошибка при добавлении");
  })
  .then((data) => console.log("Добавлено:", data));
  