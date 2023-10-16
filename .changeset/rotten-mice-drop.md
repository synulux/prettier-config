---
"@synulux/prettier-config": minor
---

Add back duplicate dependencies (related to peer dependencies) in `package.json` to avoid confusion (this will not affect how these duplicated dependencies were installed); and change the peer dependencies version to be exactly as their equivalent dependency (development or production) to avoid issues that may arise in the future.
