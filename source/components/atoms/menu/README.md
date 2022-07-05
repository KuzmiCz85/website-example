# menu

## Component level

Atom

## Description

Navigation menu with variable number of links.

## Using in other njk templates

### Import source

```
{% from "atoms/menu/menu.njk" import menu as menu %}
```

### Call in place

```
{{ menu(
  {
    'Item 1 text' : 'item.url',
    'Item 2 text' : 'item.url',
    'Item 3 text' : 'item.url'
  }
) }}
```

**Note:** when some items need to have same text, use normal array, instead of object/hash
