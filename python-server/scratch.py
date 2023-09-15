import numpy as np
import cv2 as cv
from imagecutter import ImageCutter
# img = cv.imread('itachi_wallpaper.jpg')

# print("img shape -> ", img.shape)
# px = img.item(100, 100, 0)
# print("px -> ", px)

# roi = img[0:120, 0:120]
# print("roi shape -> ", roi.shape)

# cv.imwrite('roi\\roi.jpg', roi)

cutter = ImageCutter()
cutter.setImage('itachi_wallpaper.jpg', 'roi')
subImages = cutter.cutImageToGrid(120, 120, 4, 7, 0, 0)