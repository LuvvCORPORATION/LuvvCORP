const screen_size = g_render.get_screen_size()
var stored = false;
var x_offs = 0;
var y_offs = 0;
g_menu.add_config_value_int( "script:keybindx", 1 )
g_menu.add_config_value_int( "script:keybindy", 1 )

const keybind = function() {
	var keybinds = [];
	if(g_menu.get_config_value("rage:doubletap")) { keybinds.push("Double Tap")}
	if(g_menu.get_config_value("misc:auto_peek")) { keybinds.push("Auto Peek")}
	if(g_menu.get_config_value("rage:hideshots")) { keybinds.push("Hide Shots")}
	if(g_menu.get_config_value("antiaim:edge_yaw")) { keybinds.push("Edge Yaw")}
	if(g_menu.get_config_value("antiaim:wall_detection")) { keybinds.push("Freestand")}
	if(g_menu.get_config_value("misc:slowwalk")) { keybinds.push("Slow walk")}
	if(g_menu.get_config_value("misc:fd")) { keybinds.push("Fake Duck")}


	const x = g_menu.get_config_value("script:keybindx")
    const y = g_menu.get_config_value("script:keybindy")
    g_render.create_font("Calibri1", "Calibri", 15,600)
    g_render.create_font("Active", "Calibri", 15,200)
    g_render.create_font("IconFont", "untitled-font-1", 18, 100,8)
    g_render.draw_rectangle_filled(x, y, 150, 25,11, 11, 20, 200)
    g_render.draw_string(x + 5, y + 3, "a", "IconFont",0, 130, 255, 255)
    g_render.draw_string(x + 30, y + 4, "Binds","Calibri1", 255, 255, 255, 255)
    g_render.draw_rectangle_filled(x, y + 24, 150, 24 + 19 * (keybinds.length - 1), 200, 200, 200, 15)
    for (i = 0; i < keybinds.length; i++) {
    	g_render.draw_string(x + 3, y + 26 + 20 * i,keybinds[i], "Active", 255,255,255,255)
    	g_render.draw_string(x + 132, y + 26 + 20 * i,"on", "Active", 255,255,255,255)
    }
}

function RenderMenu()
{
     g_menu.add_slider("[NL] Keybind X","script:keybindx",1,screen_size[0]);
     g_menu.add_slider("[NL] Keybind Y","script:keybindy",1,screen_size[1]);
}
add_callback("on_render", "keybind")
add_callback("on_menu", "RenderMenu")
