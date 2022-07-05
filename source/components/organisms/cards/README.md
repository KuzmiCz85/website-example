# cards

## Component level

Organism

## Description

Group of multiple article preview cards.

## Using in other njk templates

### Import source

```
{% from "organisms/cards/cards.njk" import cards as cards %}
```

### Call in place

```
{{ cards(
    [
      {
        image: {
          source: 'card/image/source.img',
          alt: 'card 1 image'
        },
        heading: 'Card 1 Heading',
        text: 'Card with image, heading & text'
      },
      {
        heading: 'Card 2 Heading',
        text: 'Card only with heading & text'
      },
      {
        image: {
          source: 'card/image/source.img',
          alt: 'card 3 image'
        },
        text: 'Card only with image & text'
      },
      {
        image: {
          source: 'card/image/source.img',
          alt: 'card 4 image'
        },
        heading: 'Card only with image & heading'
      }
    ]
  ) }}
```
