function showNotification(message) {
  const defaults = {
    className: "default"
  }
  const config = { ...defaults, ...message };
  console.log(config.className);
  const notification = document.createElement('div');
  notification.innerHTML = config.html;
  notification.classList.add(config.className);

  notification.style.backgroundColor = 'rgb(102, 0, 235)';
  notification.style.color = 'rgb(232, 217, 252)';
  notification.style.fontFamily = 'sans-serif';
  notification.style.fontSize = '20px';
  notification.style.padding = "10px 20px";

  notification.style.position = "absolute";
  notification.style.top = config.top + "px";
  notification.style.right = config.right + "px";

  document.body.appendChild(notification);
}

document.addEventListener("DOMContentLoaded", function () {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "hello"
  });
});
