# QC-Site

This is the repo for the quasicraft site, which can be modified to edit the statusses of projects or just add images to the gallery or something.

## Update projects

To update projects, go to the [projects](https://github.com/quasicraft/qc-site/tree/main/projects) directory and edit the markdown file with the most recent update of your project. You also should edit the date in the frontmatter, which is the topmost piece in the file. You can change this by editing the `date: ` value to the date of the change with the YYYY-MM-DD notation.

## Adding new projects

To add a new project there is some boilerplate, it uses some frontmatter to display an image and have a title, which looks the same as the following template:

```md
---
title: "<Project Title>"
status: "<Status>"
date: "YYYY-MM-DD"
image: "<image slug>"
---

## DD-MM-YYYY
- List
- Of
- Updates
```

Replace all the values with the relevant ones. The status can be one of four values: `Not started`, `Needs deco`, `Ongoing` or `Done`. Legoraft knows the image slugs and the date is the date of the most recent updates. For an entry of an update, the most recent update goes on top and has a list of changes that were made to the project.
