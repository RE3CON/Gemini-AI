# Shizuku Persistence Guide

Shizuku is designed to run in user space, which means Android's aggressive battery management often kills the service to save power. Making Shizuku "persistent" (auto-starting on boot or restarting after termination) requires specific configuration.

> [!IMPORTANT]
> **Shizuku is not a native system service.** Without root access, true persistence is managed by the OS and is subject to background process limitations.

## 1. The Most Effective Non-Root Solution: Battery Optimization
The primary reason Shizuku terminates is Android's battery optimization.

1.  Open **Settings** on your Android device.
2.  Search for **Battery Optimization** or **App Battery Usage**.
3.  Find **Shizuku** in the list.
4.  Set it to **"Don't optimize"** or **"Unrestricted"**.
5.  *Optional:* Enable **"Allow background activity"** if your specific Android skin (e.g., Samsung OneUI, MIUI) has this option.

## 2. Automation Workaround (Tasker / MacroDroid)
If your device still kills Shizuku, you can use an automation app to monitor and restart it.

### Using MacroDroid (Example)
1.  **Trigger:** Device Boot Completed.
2.  **Action:** Launch Shizuku app.
3.  **Trigger (Alternative):** Notification Received (Shizuku service stopped).
4.  **Action:** Execute shell script (requires root or ADB over network).

> [!NOTE]
> This workaround is complex because starting Shizuku usually requires ADB. If you have root, this is trivial. If you do not have root, you can use **ADB over Network** and an app like **"Shizuku Auto-Start"** (available on some app stores) which uses the local ADB socket to restart the service.

## 3. The Root Solution (True Persistence)
If your device is rooted, Shizuku can be set to start as a system service, which is the only way to achieve true persistence.

1.  Open the **Shizuku** app.
2.  In the **"Start via Root"** section, tap **Start**.
3.  Grant root permission when prompted.
4.  Shizuku will now automatically start on boot and remain persistent.

## 4. Community & Discussions

Have questions, ideas, or want to share your experience? Join the conversation in our GitHub Discussions:

- [Gemini-AI Discussions](https://github.com/RE3CON/Gemini-AI/discussions)
- [Gemini-Pro Discussions](https://github.com/RE3CON/Gemini-Pro/discussions)
