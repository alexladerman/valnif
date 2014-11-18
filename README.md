# valnif
Programa de Validación de NIF CIF NIE en Javascript

(basado en la librería Java oficial de la AEAT ValNif-2.01.jar)

## Uso
```html
<script src="valnif.min.js" charset="utf-8"></script>
```

```javascript
if(checkNif(nif) > 0)
```

## Ejemplo
```html

<!DOCTYPE html>
<html>
<head>
  <script src="valnif.min.js" charset="utf-8"></script>
<script>
window.onload = function() { addFormOnSubmitEventListener();};

function addFormOnSubmitEventListener() {
  var form = document.getElementById('form');
  var result = document.getElementById('result');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nif = form.elements['NIF'].value;
    if(checkNif(nif) > 0) {
      result.innerText = 'valid';
    } else {
      result.innerText = 'invalid';
    }
  });
}
</script>
</head>
<body>
  <h2>ValNIF</h2>
  <form id="form">
    <label for="NIF">NIF</label>
    <input id="NIF" name="NIF" type="text">
    <input type="submit">  
  </form>
  <h2 id="result"></h2>
</body>
</html>
```
