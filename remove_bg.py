from PIL import Image

def soften_edges(image):
    # simple alpha matting or color removal
    pass

img = Image.open('public/lillys_consulting_logo_actual.png').convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # distance from white (255, 255, 255)
    r, g, b, a = item
    if r > 230 and g > 230 and b > 230:
        # fade out near white
        diff = max(255-r, 255-g, 255-b)
        alpha = int(diff * 10.2) # scale up
        alpha = min(255, max(0, alpha))
        newData.append((r, g, b, alpha))
    else:
        newData.append(item)

img.putdata(newData)
img.save('public/lillys_logo_transparent.png', "PNG")
