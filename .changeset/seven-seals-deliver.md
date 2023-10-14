---
"@synulux/prettier-config": minor
---

To prevent authentication issues with GitHub Packages, all workflows that install dependencies should authenticate with GitHub Packages first (therefore, a composite action was created to reuse the authentication process); change the workflows file extension to be `.yml` and not `.yaml` for simplicity; and reduce the waiting time to five seconds for the `lint.yml` workflow to finish in the `publish.yml` workflow.
