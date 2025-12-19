document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const testMessage = document.createElement("div");
  testMessage.innerText = "✅ JavaScript is running!";
  testMessage.style.padding = "16px";
  testMessage.style.marginTop = "20px";
  testMessage.style.background = "#1f2933";
  testMessage.style.color = "#7dd3fc";
  testMessage.style.borderRadius = "8px";
  testMessage.style.fontSize = "16px";

  app.appendChild(testMessage);
});
