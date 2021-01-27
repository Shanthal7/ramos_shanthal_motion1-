while (true) {
    if (input.rotation(Rotation.Pitch) > 2) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
