def on_button_a_click():
    light.show_ring("red red red red red red red red red red")
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_button_b_click():
    light.show_ring("""blue blue blue blue blue blue blue blue blue blue""")
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

def on_forever():
    print(control.device_serial_number())
forever(on_forever)
