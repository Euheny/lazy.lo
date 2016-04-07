# Lazy.lo

This is fork of [Qazy](https://github.com/qnimate/Qazy) with some modifications.

- No SEO Negative Impact.
- No jQuery.

Load the script as soon as possible in the webpage so that it can start tracking the images and load them lazily.

## Instalation

Coming soon

## Usage

```html
<!doctype html>
<html>
    <head>
        <title>Lazy.lo</title>
        <link rel="stylesheet" href="lazy-lo.css">
        <script type="text/javascript" src="lazy-lo.js"></script>
    </head>
    <body>
        <div> <img src="image1.jpg" data-lazylo="true"> </div>
        <div> <img src="image2.jpg" data-lazylo="true"> </div>
        <div> <img src="image3.jpg" data-lazylo="true"> </div>
        <div> <img src="image4.jpg" data-lazylo="true"> </div>
        <div> <img src="image5.jpg" data-lazylo="true"> </div>
    </body>
</html>
```

You can set placeholder image via `data-lazylo-placeholder`

```html
  <div> <img src="image1.jpg" data-lazylo="true" data-lazylo-placeholder="spin.gif"> </div>
```

or via javascript var

```html
<script> var qazy_image = "http://qnimate.com/blank.gif";  </script>
```
