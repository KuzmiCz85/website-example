# cards

## Component level

Organism

## Description

Section with main heading (optional) and group of multiple article preview cards.

## Using in other njk templates

### Import source

```
{% from "organisms/cards/cards.njk" import cards as cards %}
```

### Call in place

```
{{ cards(
  {
    heading: 'Cards section heading',
    cards: [
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
  }
) }}
```
