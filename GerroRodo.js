class GerroRodo {
    constructor(element, textRodo, options = {}) {
        this.options(options);
        this.plugins = [];
        this.init(element);
    }

    /*
    * parametry GerroRodo
     */
    options(options) {
        console.log(options);
        this.sizeText = options.sizeText === undefined ? '13px' : options.sizeText;
        this.elementTextClass = options.elementTextClass === undefined ? '.gerro-rodo-text' : options.elementTextClass;
        this.nameCookie = options.elementTextClass === undefined ? 'GerroRodoCookie' : options.nameCookie;
        this.description = textRodo;
        this.trigger = typeof options.trigger === 'function' ? options.trigger : '';
    }

    /*
    * zaladowanie pluginu
     */
    init (element) {
        if (!this.checkAccept()) {
            this.loadText(element);
        }else {
            this.loadPlugins();
        }
    }

    /*
    * ustawienie rozmiaru czcionki
     */
    setFontSize () {
        var text = document.querySelectorAll(this.elementTextClass);

        for(var i=0; i<text.length; i++) {
            text[i].style.fontSize = this.sizeText;
        }
    }

    /*
    * zaladowanie tekstu RODO
     */
    loadText (elem) {
        document.querySelector(elem).innerHTML = this.description;
        this.setFontSize();
    }

    /*
    * funkcja onclick w przycisku button, dodaje nowy localstorage nameCookie
     */
    btnAccept () {
        this.addItemToLocal();
        if(typeof this.trigger === 'function') {
            this.trigger();
        }
    }

    /*
    * sprawdzenie czy w przegladarce istnieje juz nameCookie
     */
    checkAccept () {
        return this.loadItemToLocal();
    }

    /*
     *  dodawanie parametru localstorage nameCookie
     */
    addItemToLocal () {
        var plugins = this.plugins;
        /* usuwanie niepotrzebnych pluginow tzn niezaakceptowanych przez uzytkownikow podczas czytania rodo */
        for (var i in plugins) {
            if (plugins[i].idCheckbox) {
                if(!document.querySelector(plugins[i].idCheckbox).checked) {
                    var index = plugins.map(function(item) {
                        return item.name;
                    }).indexOf(plugins[i].name);
                    this.plugins.splice(index, 1);
                }
            }
        }
        localStorage.setItem(this.nameCookie, JSON.stringify({accept: true, plugins: this.plugins}));
        this.loadPlugins();
    }

    /*
     *  zaladowanie localstorage nameCookie
     */
    loadItemToLocal () {
        if (localStorage.getItem(this.nameCookie) === null) {
            return false;
        }
        return true;
    }

    /*
    * dodawanie pluginu
     */
    addPlugin (namePlugin, idCheckbox) {
        this.plugins.push({name: namePlugin, idCheckbox: idCheckbox});
    }

    /*
    * zaladowanie pluginow
     */
    loadPlugins() {
        var items = JSON.parse(localStorage.getItem(this.nameCookie));
        for(var i in items.plugins) {
            window[items.plugins[i].name]();
        }
    }

};
