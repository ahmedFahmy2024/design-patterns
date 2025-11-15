"use client";

import { useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function ConditionalHooks() {
  return <div>ConditionalHooks</div>;
}

function Dialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(isOpen, elementRef, () => onClose());

  return isOpen ? <div ref={elementRef} role="dialog" /> : null;
}

// in React you must not call hooks conditionally inside components
// if (isOpen) {
//   useEffect(() => { ... }); // ❌ not allowed
// }
// So instead of:
// if (isOpen) {
//   useOutsideClick(elementRef, onClose);
// } You do:
// useOutsideClick(isOpen, elementRef, onClose);

// The hook is always called — no violation of React’s rules.
// When isOpen is false, the hook simply doesn’t set up any listeners.
// When isOpen is true, it attaches a click listener to detect outside clicks.

// Conditional Hook Pattern = “Always call the hook, but let the hook decide whether to do anything based on a condition.”
// It’s a simple but powerful way to make hooks conditionally active without breaking React’s rules.
