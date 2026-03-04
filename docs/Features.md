# Core Features 🛡️

Gemini-AI employs state-of-the-art techniques to harden your browser identity.

## 🎨 Canvas & WebGL Poisoning
Injects subtle noise into Canvas API and WebGL rendering contexts, making your graphical fingerprint unique per session and preventing cross-site tracking.

## 🕵️ User-Agent & Platform Spoofing
Dynamically alters your `navigator.userAgent`, `navigator.platform`, and `navigator.hardwareConcurrency` to blend in with common hardware profiles.

## 🌐 WebRTC Leak Protection
Overrides WebRTC interfaces to prevent your real IP address from leaking via STUN/TURN servers.

## ⏱️ Timing & Font Protection
Adds jitter to `performance.now()` to thwart timing attacks and masks installed system fonts.
