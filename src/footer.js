// File: footer.js

(function StylizeFooter() {
    function StylizeSections(colors) {
        var color_pallete = [].concat.apply([], colors);
        var els = document.getElementsByClassName('colored-sin-item');
        if (!els.length) {
            return;
        }
        for (var i = 0, L = els.length; i < L; i++) {
            els[i].style.borderColor = color_pallete[i];
            //console.log(els[i], color_pallete[i]);
        }
        return true;
    }
    COLORS = [
        ['#FF9800','#A52A2A','#5F9EA0','#FF7F50'],
        ['#EF5350','#7E57C2','#2196F3','#00BCD4','#009688','#CDDC39','#808080','#FFC0CB'],
        ['#9acd32','#ee82ee','#ff6347','#008080','#009688','#6a5acd','#4169e1' ]
    ]

    return StylizeSections(COLORS);
    
})()