#GERRO RODO
<br>
`wtyczka do wyświetlenia informacji o rodo`
<br>
`zmienne:`
<br>
`textRodo - info o RODO`
<br>
`var rodo = new GerroRodo('#example', textRodo)`
<br>
`rodo.addPlugin('pluginGoogle', '#check-google') - gdzie check-google to w ustawieniach checkbox - checked` 
<br>
``` 
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