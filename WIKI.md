# Gemini-AI Wiki

Welcome to the Gemini-AI Wiki! This is the central repository for detailed documentation regarding the project.

**Latest Update (2026-03-07):** Hardened the native bridge service (`samsungBridge.ts`) to prevent `ReferenceError: window is not defined` in Node.js build environments, ensuring reliable CI/CD builds.

## Table of Contents

1. [Overview](#overview)
2. [PWA Installation](#pwa-installation)
3. [Fingerprint Hardening Techniques](#fingerprint-hardening-techniques)
4. [UI Mockups](#ui-mockups)
5. [ADB Spoofing & Chrome Flag Injection](#adb-spoofing--chrome-flag-injection)
6. [Shizuku & AShell Setup](#shizuku--ashell-setup)
7. [Shizuku Persistence Guide](#shizuku-persistence-guide)
8. [AShell Hardening Scripts](#ashell-hardening-scripts)
9. [Troubleshooting Guide](#troubleshooting-guide)
10. [Native Ecosystem Integration](#native-ecosystem-integration)
11. [Building Chromium for Android](#building-chromium-for-android)
12. [Patching and Re-signing Chrome for Android](#patching-and-re-signing-chrome-for-android)
13. [Using microG for Hardening](#using-microg-for-hardening)
14. [CI/CD Pipeline](#cicd-pipeline)
15. [Extra: Community & Discussions](#extra-community--discussions)
16. [Reference Tools & Downloads](#reference-tools--downloads)
17. [Contributing](#contributing)

---

## Overview

Gemini-AI is a sovereign fingerprint protection tool for Google AI & LLM environments. It uses a Golden Master architecture to ensure zero-blindspot hardening.

## PWA Installation

Gemini-AI is a PWA. You can install it to your device's home screen for a native-like experience.

## Fingerprint Hardening Techniques

- **Hardware Spoofing:** Simulates high-end hardware.
- **Network Stealth:** Spoofs 4G, enforces GPC, locks WebRTC.
- **Masking Engine:** Protects spoofed functions from detection.
- **Jitter Logic:** Injects noise into timing APIs.
- **GNOME Simulation:** Realistic screen geometry for Linux.

## UI Mockups

Below are the mockups for the Advanced Configuration UI on different devices.

### Smartphone View
![Smartphone UI](docs/smartphone_mockup.png)

### Tablet View
![Tablet UI](docs/tablet_mockup.png)

## ADB Spoofing & Chrome Flag Injection

You can now configure advanced Chromium command-line arguments directly within the app.

### How to Run Chrome with Flags via ADB

To apply these flags, you must start Chrome from a terminal using ADB. Ensure Chrome is completely closed first.

**Command Structure:**

```bash
adb shell am start -n <PACKAGE_NAME>/com.google.android.apps.chrome.Main \
  --es "com.google.android.apps.chrome.EXTRA_COMMAND_LINE_FLAGS" \
  "<YOUR_FLAGS_HERE>"
```

**Package Names by Channel:**
- **Stable:** `com.android.chrome`
- **Beta:** `com.chrome.beta`
- **Dev:** `com.chrome.dev`
- **Canary:** `com.google.android.apps.chrome.canary`

**Verification:**
Once running, navigate to `chrome://version` in the browser to verify your flags are active.

**Clearing Flags:**
To stop using the flags, completely close Chrome (swipe away in task switcher or use `adb shell am force-stop <PACKAGE_NAME>`).

### Recommended Flags
The "Load Recommended Flags" feature automatically populates the following configuration:

- `--disable-gpu`: Reduces GPU fingerprinting.
- `--disable-web-rtc`: Prevents WebRTC leaks.
- `--disable-web-security`: Enables advanced proxying/spoofing.
- `--disable-notifications`: Enhances stealth.
- `--disable-background-networking`: Prevents background data leaks.
- `--disable-sync`: Disables Chrome sync.
- `--no-sandbox`: Required for some containerized environments.
- `--disable-infobars`: Provides a cleaner UI.
- `--user-agent="..."`: Forces a spoofed user agent.
- `--proxy-server="socks5://127.0.0.1:9050"`: Routes traffic through a local SOCKS5 proxy.

## Shizuku & AShell Setup

For advanced users, we provide a guide on setting up Shizuku and AShell to execute shell commands on your Android device without root access.

[Read the full Shizuku & AShell Setup Guide](docs/ShizukuAShellSetup.md)

## Shizuku Persistence Guide

Shizuku is designed to run in user space, which means Android's aggressive battery management often kills the service to save power. We provide a guide on how to configure your device for maximum persistence.

[Read the full Shizuku Persistence Guide](docs/ShizukuPersistence.md)

## AShell Hardening Scripts

We provide example scripts that can be run directly in AShell to harden your Android device.

[Read the full AShell Hardening Scripts Guide](docs/AShellHardeningScripts.md)

## Troubleshooting Guide

Having issues? This guide helps you resolve common problems when using Shizuku, AShell, and ADB-based hardening.

[Read the full Troubleshooting Guide](docs/Troubleshooting.md)

## Native Ecosystem Integration

We provide bridges for native-like ecosystem features.

### Samsung Ecosystem Integration
The bridge is located at `src/services/samsungBridge.ts`. It automatically detects if it is running in a native environment (via `window.Capacitor` or `window.Android`).

### Microsoft Ecosystem Integration
The bridge is located at `src/services/microsoftBridge.ts`. It automatically detects if it is running in a native environment (via `window.chrome.webview` or `window.Windows`).

### Native-Side Implementation (Android/Windows)
To enable these features, you must implement a bridge in your native code that exposes the corresponding interface to the WebView.

```kotlin
// Example Android Interface
class SamsungBridgeInterface {
    @JavascriptInterface
    fun isSecureContainer(): Boolean { /* Knox check */ }
    
    @JavascriptInterface
    fun getSecurityStatus(): String { /* Knox status */ }
    
    @JavascriptInterface
    fun isSPenConnected(): Boolean { /* S-Pen check */ }
    
    @JavascriptInterface
    fun getStepCount(): Int { /* Samsung Health API */ }
    
    @JavascriptInterface
    fun saveNote(title: String, content: String) { /* Samsung Notes API */ }
}

// Add to WebView
webView.addJavascriptInterface(SamsungBridgeInterface(), "Android")
```

## Building Chromium for Android

Building Chromium for Android is an extremely resource-intensive task.

**Is it possible on an Android device?**
No. It is not possible to build Chromium directly on an Android device, even high-end ones. The process requires massive amounts of RAM, CPU, and storage that exceed the capabilities of mobile hardware.

**Is building Chromium for Android "lighter" or easier than for Desktop?**
No. Building Chromium for Android is just as resource-intensive as building for Desktop. The Android build process involves compiling the entire Chromium codebase (millions of lines of code) and then cross-compiling it for the Android architecture (ARM/ARM64). This requires the same massive amounts of RAM (32GB+), CPU power, and storage (200GB+) as the desktop build.

**Can it be done on a free platform (e.g., Google Workspace, free cloud tiers)?**
No. 
- **Google Workspace:** This is a productivity suite (Docs, Drive, Gmail) and does not provide compute resources for software development or compilation.
- **Free Cloud Tiers:** While some providers (like Google Cloud, AWS, Azure) offer "free tiers" or initial credits (e.g., $300), these are designed for small-scale testing, not for massive builds like Chromium. A VM powerful enough to build Chromium for Android would exhaust these credits in a matter of hours or days.
- **Conclusion:** There is currently no platform that provides the massive, sustained compute resources (32GB+ RAM, 200GB+ storage) required to build Chromium for Android for free.

## Patching and Re-signing Chrome for Android

It is technically possible to unpack an existing Chrome for Android APK, modify its contents, and re-sign it with a test (debug) signature. However, this is **highly unreliable** for daily use.

**Why it fails:**
- **Integrity Checks:** Chrome for Android has deep integration with Google Play Services and the Play Integrity API. These services constantly verify the APK's signature.
- **Result:** If the signature is modified, the app will likely:
    - Fail to launch entirely.
    - Be blocked by Google servers from syncing data.
    - Crash when attempting to use Google-specific features (e.g., login, search, sync).
- **Security:** Modifying a signed APK breaks the chain of trust, which is a major security risk.

**Conclusion:** Patching and re-signing Chrome is not a viable alternative to building from source for hardening purposes.

## Using microG for Hardening

Using [microG](https://microg.org/) is a powerful alternative to full-stack Chromium building for hardening your Android environment. microG provides a free, open-source implementation of Google Play Services, allowing you to use Google-dependent apps while maintaining greater control over your privacy and data.

**Benefits for Hardening:**
- **Reduced Tracking:** microG does not include the same aggressive tracking and telemetry as the official Google Play Services.
- **Customization:** You can selectively enable or disable components of microG to further minimize your digital footprint.
- **Compatibility:** It allows you to run apps that require Google services without needing to rely on the official, closed-source Google framework.

**Regarding Tools like Universal-ReVanced-Manager:**
If you are using a tool like [Universal-ReVanced-Manager](https://github.com/Jman-Github/Universal-ReVanced-Manager/) to manage your app patches, ensure that you are sourcing it from a trusted, open-source repository on GitHub. Always review the patches and permissions requested by such tools, as they often require elevated access to your device and modify application binaries.

**Conclusion:** Using microG and reputable patching tools is a highly recommended approach for those who want to use Google-dependent services while significantly reducing the tracking surface area of their Android device.

## CI/CD Pipeline

We use GitHub Actions to automate:
- Building the web app.
- Extracting the UserScript.
- Creating GitHub Releases.
- Deploying to GitHub Pages.
- Publishing to GitHub Packages.

## Extra: Community & Discussions

Have questions, ideas, or want to share your experience? Join the conversation in our GitHub Discussions:

- [Gemini-AI Discussions](https://github.com/RE3CON/Gemini-AI/discussions)
- [Gemini-Pro Discussions](https://github.com/RE3CON/Gemini-Pro/discussions)

## Reference Tools & Downloads

### AdGuard Android
- [AdGuard Android (Release)](https://adguard.com/adguard-android/overview.html)
- [AdGuard Android (Beta)](https://adguard.com/adguard-android/overview.html)
- [AdGuard Android (Nightly)](https://adguard.com/adguard-android/overview.html)

### Userscript Managers
- [Tampermonkey](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

### Android Hardening & Shell Tools
- [Shizuku](https://shizuku.rikka.app/)
- [AShell](https://github.com/zacharee/AShell)
- [Termux](https://termux.dev/)
- [Logcat Extreme Pro](https://play.google.com/store/apps/details?id=scd.lcexpro)
- [Chromium for Android (Official)](https://www.chromium.org/getting-involved/download-chromium/)

### Development & CI/CD
- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Packages](https://github.com/features/packages)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Google Services & AI
- [Google Workspace](https://workspace.google.com/)
- [Gemini Business](https://workspace.google.com/solutions/ai/)
- [Google One AI Premium](https://one.google.com/about/plans)
- [Google AI Studio](https://aistudio.google.com/)

### Ecosystem Integrations
- [Samsung Health](https://www.samsung.com/global/galaxy/apps/samsung-health/)
- [Samsung Notes](https://www.samsung.com/global/galaxy/apps/samsung-notes/)
- [Microsoft Office 365](https://www.microsoft.com/en-us/microsoft-365)
- [Microsoft OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)

## Contributing

We welcome contributions! Please fork the repository, open an issue, or submit a pull request.
