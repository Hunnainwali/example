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

**Note:** Always open the workspace (`.xcworkspace`) instead of the project file (`.xcodeproj`), otherwise CocoaPods dependencies may not load.

**Alternative (CLI):**  
```bash
npm run ios
```
On a fresh clone, ensure pods are installed first:
```bash
cd ios
pod install
cd ..
```

## macOS Gatekeeper / Quarantine Workarounds

When you download a project from the internet, macOS may quarantine native binaries and scripts, blocking them until you explicitly trust them. Two common cases in this sample:

A. fsevents.node blocked

Symptoms: Metro or Node throws errors about loading fsevents (common on macOS). Clear the quarantine flag:

cd /path/to/example-main
find . -name fsevents.node
# For each path returned, run:
xattr -d com.apple.quarantine path/to/fsevents.node

Repeat for every fsevents.node path if multiple are printed.

B. launchPackager.command blocked

Xcode’s attempt to auto-start Metro (or you double-clicking the script) may trigger:

“Apple could not verify ‘launchPackager.command’ is free of malware …”

Allow it via System Settings:
	1.	Double-click the script once to surface the warning (or just try building in Xcode to trigger it).
	2.	Go to  → System Settings → Privacy & Security.
	3.	Scroll to the Security section — you should see launchPackager.command listed as blocked.
	4.	Click Open Anyway, then confirm in the prompt.
