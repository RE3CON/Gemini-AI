# Troubleshooting Guide

This guide helps you resolve common issues when using Shizuku, AShell, and ADB-based hardening.

## 1. Shizuku Not Starting
*   **Issue:** Shizuku shows "Stopped" or fails to start.
*   **Solution:**
    *   **Wireless Debugging:** Ensure your device is connected to a stable Wi-Fi network. Sometimes toggling Wi-Fi off and on, or disabling/re-enabling Wireless Debugging, fixes the pairing issue.
    *   **ADB:** If using ADB, ensure your computer's USB drivers are up-to-date and the cable is high-quality.
    *   **Battery Optimization:** Ensure Shizuku is set to "Unrestricted" in your Android battery settings.

## 2. AShell Permission Denied
*   **Issue:** AShell cannot execute commands or shows "Permission Denied".
*   **Solution:**
    *   Open the **Shizuku** app and ensure it is currently "Running".
    *   Open **AShell** and check if it is listed under "Authorized apps" in Shizuku. If not, re-grant the permission.

## 3. ADB Command Not Found
*   **Issue:** Your computer says `adb: command not found`.
*   **Solution:**
    *   Ensure the Android Platform Tools are in your system's PATH environment variable.
    *   Alternatively, run the command from the folder where `adb` is located (e.g., `./adb shell ...`).

## 4. Community & Discussions

Have questions, ideas, or want to share your experience? Join the conversation in our GitHub Discussions:

- [Gemini-AI Discussions](https://github.com/RE3CON/Gemini-AI/discussions)
- [Gemini-Pro Discussions](https://github.com/RE3CON/Gemini-Pro/discussions)
