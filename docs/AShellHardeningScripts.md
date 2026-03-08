# AShell Hardening Scripts

This guide provides example scripts that can be run directly in **AShell** to harden your Android device.

> [!WARNING]
> **Advanced Users Only.** These commands modify system settings. Always know what a command does before running it.

## 1. Disable Bloatware (System-Level)
You can disable pre-installed apps that track you or consume resources.

```bash
# Example: Disable a specific package
pm disable-user --user 0 com.example.bloatware
```

## 2. Network Hardening
Enforce stricter network settings.

```bash
# Set a custom DNS (e.g., Cloudflare)
settings put global private_dns_mode hostname
settings put global private_dns_specifier 1dot1dot1dot1.cloudflare-dns.com
```

## 3. Privacy & Tracking
Limit background activity and tracking.

```bash
# Disable location reporting
settings put secure location_mode 0

# Limit background data (requires specific app package)
cmd appops set <PACKAGE_NAME> RUN_IN_BACKGROUND deny
```

## 4. Community & Discussions

Have questions, ideas, or want to share your experience? Join the conversation in our GitHub Discussions:

- [Gemini-AI Discussions](https://github.com/RE3CON/Gemini-AI/discussions)
- [Gemini-Pro Discussions](https://github.com/RE3CON/Gemini-Pro/discussions)
