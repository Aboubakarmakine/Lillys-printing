from PIL import Image

def create_favicon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Get bounding box of non-white pixels
    datas = img.getdata()
    min_x, min_y = img.width, img.height
    max_x, max_y = 0, 0
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = img.getpixel((x, y))
            if r < 240 or g < 240 or b < 240:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
                
    # Crop to the actual content
    if min_x < max_x and min_y < max_y:
        # We assume the "L" logo is at the top, and the text is below it.
        # We want "only the logo" ("fav only"). So maybe crop the top half.
        # Let's crop to a square from the top.
        width = max_x - min_x
        # For the red 'L' mark: it occupies roughly a square at the top of the image
        box = (min_x, min_y, min_x + width, min_y + width)
        icon = img.crop(box)
    else:
        icon = img
        
    icon.thumbnail((256, 256), Image.Resampling.LANCZOS)
    
    # Make white background transparent
    icon = icon.convert("RGBA")
    newdata = []
    for item in icon.getdata():
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            diff = max(255-item[0], 255-item[1], 255-item[2])
            alpha = int(diff * 10)
            alpha = min(255, max(0, alpha))
            newdata.append((item[0], item[1], item[2], alpha))
        else:
            newdata.append(item)
    icon.putdata(newdata)

    icon.save(output_path, format="ICO")

create_favicon("public/lillys_consulting_logo_actual.png", "public/favicon.ico")
