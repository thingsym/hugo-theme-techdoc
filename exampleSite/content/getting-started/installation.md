---
title: "Installation"
date: 2017-10-17T15:26:15Z
draft: false
weight: 10
---

## Install Hugo theme on your project

If you have git installed, you can include hugo-theme-techdoc repository into your core repository as submodule using `git submodule` within your project directory.

```
cd your_project
git submodule add https://github.com/thingsym/hugo-theme-techdoc.git themes/hugo-theme-techdoc
```

For more information read [the Hugo documentation](https://gohugo.io/getting-started/quick-start/).

## Or download Hugo theme on your project

If you have git installed, you can do the following at the command-line-interface within your project directory.

```
cd your_project/themes
git clone https://github.com/thingsym/hugo-theme-techdoc.git
```

## Configure

You may specify options in hugo.toml (or hugo.yaml/hugo.json) of your site to make use of this theme's features.

For an example of `hugo.toml`, see [hugo.toml](https://github.com/thingsym/hugo-theme-techdoc/blob/master/exampleSite/hugo.toml) in exampleSite.

See [the Configuration documentation](../configuration/).

## Preview site

To preview your site, run Hugo's built-in local server.

```
hugo server -t hugo-theme-techdoc
```

Browse site on http://localhost:1313
