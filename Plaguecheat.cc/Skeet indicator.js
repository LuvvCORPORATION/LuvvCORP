var add_y = 0
function skeet() {
    if(g_entity.is_valid(g_entity.get_local_player()))
    fonts = g_render.create_font("MainFont", "Calibri", 18, 900)
    velocity = Math.round(getVelocity(g_entity.get_local_player())).toString();
    screen_size = g_render.get_screen_size()
    x = screen_size[0];
    y = screen_size[1];
    add_y = 0
    g_render.indicator = function(text, col) {
        x = screen_size[0] / 100
        y = screen_size[1] / 1.33
        fonts = g_render.create_font("MainFont", "Calibri", 18, 900)
        add_y = add_y + 20

        g_render.draw_string(x, y + 1 - add_y, text, "MainFont",255,255,255,255)
        g_render.draw_string(x,y - add_y, text, "MainFont", col)
    }
    if(velocity > 255 && InAir()) {
        g_render.indicator("LC", velocity > 275 ? [255, 0, 0, 255] : [132, 195, 16, 255])
    }
    if(g_menu.get_config_value( "rage:doubletap" )) {
        g_render.indicator("DT", [255,255,255,255])
    }
    if(g_menu.get_config_value( "misc:auto_peek" )) {
        g_render.indicator("PEEK", [255,255,255,255])
    }
    if(g_menu.get_config_value( "rage:hideshots" )) {
        g_render.indicator("ONSHOT" , [0,255,0,255])
    }
    if(g_menu.get_config_value( "misc:fd" )) {
        g_render.indicator("DUCK" , [255,255,255,255])
    }//antiaim:edge_yaw
    if(g_menu.get_config_value( "antiaim:edge_yaw" )) {
        g_render.indicator("EDGE" , [255,255,255,255])
    }
}
add_callback("on_render", "skeet")
