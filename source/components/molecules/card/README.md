# card

## Component level

Molecule

## Description

Articles preview card with variable content, that can contain image, heading and text. Unset parts are not rendered, so the card can have only image & text, heading & text etc.

## Using in other njk templates

### Import source

```
{% from "molecules/card/card.njk" import card as card %}
```

### Call in place

```
{{ card(
  {
    image: {
      size: {
        width: '123',
        height: '123'
      },
      source: 'card/image/source.img',
      alt: 'Card image 123 x 123 pixels'
    },
    heading: 'Card Heading',
    text: 'Card text'
  }
) }}
```

**Note:** image size is only optional. Useful when need to reserve specific area in general template without specification of content.
