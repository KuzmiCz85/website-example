# image

## Component level

Atom

## Description

Image with variable source, description and eventualy proportions (set to pixels).

## Using in other njk templates

### Import source

```
{% from "atoms/image/image.njk" import image as image %}
```

### Call in place


```
{{ image(
  {
    size: {
      width: '123',
      height: '123'
    },
    source: 'source/of/image.img',
    alt: 'This is image with size 123 x 123 px.'
  }
) }}
```

**Note:** size is only optional. Useful when need to reserve specific area in general template without specification of content.

