import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    window.dispatchEvent(
      new CustomEvent("daily-word-soup:update-ready", {
        detail: { update: updateSW },
      })
    );
  },
  onRegisteredSW(_swUrl, registration) {
    if (!registration) return;

    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);
  },
});
