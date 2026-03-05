---
title: "Built-in Shortcodes"
date: 2017-10-17T15:26:15Z
draft: false
weight: 10
description: "calling built-in Shortcodes into your content files."
TableOfContents: true
params:
  color: red
  size: medium
---

See https://gohugo.io/shortcodes/

## Details

{{< details summary="See the details" >}}
This is a **bold** word.
{{< /details >}}

## Figure

{{< figure src="../../images/pexels-photo-196666.jpeg" title="2 People Sitting With View of Yellow Flowers during Daytime" >}}

## Highlight

{{< highlight go "linenos=inline, hl_lines=3 6-8, style=emacs" >}}
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        fmt.Println("Value of i:", i)
    }
}
{{< /highlight >}}

## Instagram

{{< instagram CxOWiQNP2MO >}}

## Param

We found a {{% param "color" %}} shirt.

## QR

{{< qr text="https://gohugo.io" />}}

## Relref

[Link A]({{% relref "/sample/custom-shortcodes" %}})

[Link B]({{% relref path="/sample/custom-shortcodes" %}})

## Vimeo
{{< vimeo 55073825 >}}

## X

{{< x user="SanDiegoZoo" id="1453110110599868418" >}}

## Youtube

{{< youtube 0RKpf3rK57I >}}
