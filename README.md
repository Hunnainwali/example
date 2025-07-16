<div>

  <h1>IMG.LY PhotoEditor SDK Sample</h1>

  <h2>Overview</h2>

  <p align="left">
    This is a minimal sample project demonstrating integration of the IMG.LY PhotoEditor SDK editor. It shows how to pick or capture an image, launch the editor, and display the edited result on iOS, iPad, and macOS.
  </p>
</div>

## Purpose

This example project is a minimal reproduction to demonstrate a crash in the IMG.LY PhotoEditor SDK when using a two-finger pinch gesture to resize **stickers** or **text** in the editor. The crash occurs only when running the iOS build on macOS (not via Mac Catalyst), and does not occur in transform mode for images or on physical iPad/iPhone devices. Please use this project to reproduce and report the issue to the PESDK team for debugging.

## Get started
