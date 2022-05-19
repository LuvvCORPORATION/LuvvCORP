function HSVtoRGB(h,s,v){
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        255
    ]
}

function colortest() {
    color = HSVtoRGB(g_menu.get_config_value("script:color") / 350, 1, 1); //for get color
    g_render.draw_rectangle_filled(300, 300, 30, 30, color[0], color[1], color[2], 255)
}

g_menu.add_config_value_int( "script:color", 30 )
function RenderMenu()
{
     g_menu.add_slider("Color Picker","script:color",1,360);
}
add_callback("on_menu", "RenderMenu")
add_callback("on_render", "colortest")
