# font-size-adapter - jQuery plugin
[font-size-adapter](https://github.com/matijamrkaic/font-size-adapter) resizes text to fit in the available space and **synchronizes the font-sizes** of all elements within the selection.



## Basic usage
Load `jQuery`, load `font-size-adapter`, and run the adapter for desired elements.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.fontSizeAdapter.js"></script>

<script>
  $('.title').fontSizeAdapter();
</script>
```

## How it works
The script checks the width of your targeted elements and the available space (parent width). Depending on the width's ratio, it alters the original font-size to equalize the elements.

Note that it synchronizes all elements within the jQuery selection.
<br>If you would wish to synchronize font-size for all `.title` elements, you would do this:

```javascript
$('.title').fontSizeAdapter();
```

However, if you would like to adapt each `.title` element independently, use `$.each()`:
```javascript
$('.title').each(function(){
  $(this).fontSizeAdapter();
})
```

Use `enlarge: false` option to enable only the shrinking of the elements if needed. The original font-size set through your `CSS` will never be increased.

```javascript
$('.title').fontSizeAdapter({
  enlarge: false
});
```

The `enlarge: false` option acts as a dynamic max-size limit and in most cases will be more handy, but if you need to specify the minimum and/or maximum font-size values:

```javascript
$('.title').fontSizeAdapter({
  fontMax: 42,
  fontMin: 12
});
```

## Settings

<table>
<thead>
  <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>fontMax</td>
    <td>integer</td>
    <td>0</td>
    <td>Sets maximum font-size limit.</td>
  </tr>
  <tr>
    <td>fontMin</td>
    <td>integer</td>
    <td>0</td>
    <td>Sets minimum font-size limit.</td>
  </tr>
  <tr>
    <td>enlarge</td>
    <td>boolean</td>
    <td>true</td>
    <td>Enables font-size to be increased from it's original size. Use `false` to make elements only to shrink.</td>
  </tr>
  <tr>
    <td>onResize</td>
    <td>boolean</td>
    <td>true</td>
    <td>Enables automatic recalculation on `$(window).resize()`.</td>
  </tr>
</tbody>
</table>


## Examples

`example.html` contains basic examples.

**TODO**: Codepen demo

## License

MIT License (MIT)

[http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
