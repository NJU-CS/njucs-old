Styled hint blocks in your docs
==============

This plugins requires gitbook `>=2.0.0`.

### Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["hints"]
}
```

### Usage

You can now provide hints in various ways using the `hint` tag.

```markdown
{% hint style='info' %}
Important info: this note needs to be highlighted
{% endhint %}
```
The above example will produce a `div` with the appropriate style:

``` html
<div class="alert alert-info">
Important info: this note needs to be highlighted
</div>
```

Available styles are:

- `info` (default)
- `tip`
- `danger`
- `working`
