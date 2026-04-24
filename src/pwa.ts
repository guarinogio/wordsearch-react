import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
  onNeedRefresh() {
    window.location.reload();
  },
  onRegisteredSW(_swUrl, registration) {
    if (!registration) return;

    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);
  },
});
