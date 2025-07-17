<div>

  <h1>IMG.LY PhotoEditor SDK Sample</h1>

  <h2>Overview</h2>

  <p align="left">
    This is a minimal sample project demonstrating integration of the IMG.LY PhotoEditor SDK editor. It shows how to pick an image, launch the editor, and display the edited result on iOS, iPad, and macOS.
  </p>
</div>

---

## Getting Started

**Recommended (open the Xcode Workspace)**  
Opening the CocoaPods workspace ensures all native dependencies (PhotoEditorSDK, etc.) load correctly.

```bash
git clone <repo-url>
cd example-main
npm install
cd ios
pod install
open ExampleProject.xcworkspace
```

**Note:** Always open the workspace (`.xcworkspace`) instead of the project file (`.xcodeproj`) so CocoaPods dependencies load.

**Alternative (CLI):**
```bash
npm run ios
```
On a fresh clone *run Pods first*:
```bash
cd ios
pod install
cd ..
```

## macOS Gatekeeper / Quarantine Workarounds

When you download a project from the internet, macOS may quarantine native binaries and scripts, blocking them until you explicitly trust them. Two common cases in this sample:

### A. `fsevents.node` blocked

Symptoms: Metro/Node errors about loading **fsevents** (common on macOS). Clear the quarantine flag:

```bash
cd /path/to/example-main
find . -name fsevents.node
# For each path returned, run:
xattr -d com.apple.quarantine path/to/fsevents.node
```
Repeat for each result if multiple are printed.

### B. `launchPackager.command` blocked

If you see *"Apple could not verify 'launchPackager.command'..."* when building:

1. Double‑click the script once (or build in Xcode to trigger the warning).
2.  → **System Settings** → **Privacy & Security**.
3. In **Security**, locate **launchPackager.command** under “Allow apps downloaded…”.
4. Click **Open Anyway**, then confirm.

*Terminal alternative:*
```bash
xattr -d com.apple.quarantine node_modules/react-native/scripts/launchPackager.command
```

## Purpose

This project reproduces a crash in the IMG.LY PhotoEditor SDK when using a two‑finger pinch to resize **stickers** or **text** in the editor. The crash happens only when running the iOS build on macOS (Designed for iPad/iPhone, *not* Mac Catalyst). Pinch‑resize for the base image in Transform mode works as expected. Please use this sample to investigate.

## Troubleshooting

### "No bundle URL present"
Metro not running. In repo root:
```bash
npm start
```
Re‑run from Xcode.

### Reset Metro cache
```bash
npm start -- --reset-cache
```

### Reinstall Pods
```bash
cd ios
pod install
cd ..
```
