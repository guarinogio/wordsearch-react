import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const DISMISSED_KEY = "daily-word-soup-install-dismissed";

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in window.navigator && window.navigator.standalone === true);

const isIOS = () =>
  /iphone|ipad|ipod/i.test(window.navigator.userAgent);

export function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;
    if (localStorage.getItem(DISMISSED_KEY) === "true") return;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      setPromptEvent(null);
      localStorage.removeItem(DISMISSED_KEY);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    if (isIOS()) {
      const timeout = window.setTimeout(() => setShowIOSHelp(true), 1200);
      return () => {
        window.clearTimeout(timeout);
        window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
        window.removeEventListener("appinstalled", onAppInstalled);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "true");
    setPromptEvent(null);
    setShowIOSHelp(false);
  };

  const install = async () => {
    if (!promptEvent) return;

    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;

    if (choice.outcome === "dismissed") {
      localStorage.setItem(DISMISSED_KEY, "true");
    }

    setPromptEvent(null);
  };

  if (!promptEvent && !showIOSHelp) return null;

  return (
    <div className="installPrompt" role="dialog" aria-live="polite">
      <div>
        <strong>Install Daily Word Soup</strong>
        <p>
          {promptEvent
            ? "Add the game to your home screen for a better mobile experience."
            : "On iPhone/iPad: tap Share, then Add to Home Screen."}
        </p>
      </div>

      <div className="installActions">
        {promptEvent && (
          <button type="button" className="installPrimary" onClick={install}>
            Install
          </button>
        )}

        <button type="button" className="installSecondary" onClick={dismiss}>
          Not now
        </button>
      </div>
    </div>
  );
}
