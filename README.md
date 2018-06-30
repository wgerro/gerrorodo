# GERRO RODO


`Wtyczka do wyświetlenia informacji o rodo`

***


```javascript
    var textRodo = 'info o RODO';
    
    function pluginGoogle() {
        console.log('zaladowano plugin google')
    }

    function pluginTawks() {
        console.log('zaladowano plugin tawks');
    }

    var rodo = new GerroRodo('#modal-rodo', textRodo);
    rodo.addPlugin('pluginGoogle', '#check-google');
    rodo.addPlugin('pluginTawks', '#check-tawk');

    window.onload = function() {
        if (!rodo.checkAccept()) {
            $('#modal-id').modal('show');
        }
    };
```