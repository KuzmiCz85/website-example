# linkButton

## Component level

Atom

## Description

Link with button look and variable content.

## Using in other njk templates

### Import source

```
{% from "atoms/linkButton/linkButton.njk" import linkButton as linkButton %}
```

### Call in place

```
{{ linkButton(
  'Link text', 'link.url'
) }}
```
