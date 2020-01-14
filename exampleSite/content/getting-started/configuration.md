---
title: "Configuration"
date: 2017-10-17T15:26:15Z
lastmod: 2019-10-26T15:26:15Z
draft: false
weight: 20
---

You may specify options in config.toml (or config.yaml/config.json) of your site to make use of this theme’s features.

For an example of `config.toml`, see [config.toml](https://github.com/thingsym/hugo-theme-techdoc/blob/master/exampleSite/config.toml) in exampleSite.

## Params

    # Souce Code repository section
    description = "put your description"
    github_repository = "https://github.com/thingsym/hugo-theme-techdoc"
    version = "0.6.0"

    # Documentation repository section
    # documentation repository (set edit link to documentation repository)
    github_doc_repository = "https://github.com/thingsym/hugo-theme-techdoc"

    # Analytic section
    google_analytics_id = "" # Your Google Analytics tracking id
    tag_manager_container_id = "" # Your Google Tag Manager container id
    google_site_verification = "" # Your Google Site Verification for Search Console

    # Theme settings section
    # Theme color
    custom_font_color = ""
    custom_background_color = ""

    # Documentation Menu section
    # Menu style settings
    menu_style = "open-menu" # "open-menu" or "slide-menu"

    # Date format
    dateformat = "" # default "2 Jan 2006"
    # See the format reference https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference

    # path name excluded from documentation menu
    menu_exclusion = [
        "archives",
        "archive",
        "blog",
        "entry",
        "post",
        "posts"
    ]

#### `description`

The document summary

default: `put your description`

#### `github_repository`

URL of souce code repository

default: `https://github.com/thingsym/hugo-theme-techdoc`

#### `version`

The version of souce code

default: `0.6.0`

#### `github_doc_repository`

URL of documentation repository for editting

default: `https://github.com/thingsym/hugo-theme-techdoc`

#### `google_analytics_id`

ID of Google Analytics

default: `""`

Container ID of Google Tag Manager

#### `tag_manager_container_id`

default: `""`

#### `google_site_verification`

Content value in meta tag `google-site-verification` for Google Search Console

```
<meta name="google-site-verification" content="e7-viorjjfiihHIoowh8KLiowhbs" />
```

default: `""`

#### `custom_font_color`

Header font color

default: `""`

#### `custom_background_color`

Header background color

default: `""`

#### `menu_style`

Documentation Menu style, Open Menu or Slide Menu

default: `open-menu`  
value: `open-menu` | `slide-menu`

#### `dateformat`

default: `""` as `2 Jan 2006`

#### `menu_exclusion`

Path name excluded from documentation menu

By default, we exclude commonly used folder names in blogs.

default: `[
        "archives",
        "archive",
        "blog",
        "entry",
        "post",
        "posts"
    ]`
