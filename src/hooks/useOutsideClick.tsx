import { useEffect } from "react";

export function useOutsideClick(
  enabled: boolean,
  elementRef: React.RefObject<HTMLElement | null>,
  cb: () => void,
) {
  useEffect(() => {
    // 🧩 Exit early if the feature is disabled.
    // This keeps the hook's call order stable while skipping its logic.
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    // 🖱️ Handler that detects clicks outside the target element.
    function handle(e: MouseEvent) {
      if (!element?.contains(e.target as Node)) cb();
    }

    // 🔗 Attach event listener only when enabled.
    document.addEventListener("click", handle);

    // ♻️ Clean up listener when disabled, dependencies change, or component unmounts.
    return () => {
      document.removeEventListener("click", handle);
    };
  }, [enabled, elementRef, cb]);
}

// enabled controls whether the effect runs.
// The cleanup still happens automatically when the dependency changes or component unmounts.
