import cv2 as cv
import numpy as np
class ImageCutter:
    def __init__(self):
        self.img_path = None
        self.img_buffer = None
        self.img = None
        self.imgHeight = None
        self.imgWidth = None
        self.imgShape = None
        self.subImages = None
        self.outPath = None
    
    def setImage(self, img_path=None, img_buffer=None, outPath=None):
        if(img_path != None):
            self.img_path = img_path
            self.img = cv.imread(self.img_path)
        elif(img_buffer != None):
            self.img_buffer = np.asarray(bytearray(img_buffer), dtype="uint8")
            self.img = cv.imdecode(self.img_buffer, cv.IMREAD_COLOR)
        self.imgShape = self.img.shape
        self.imgHeight, self.imgWidth = self.imgShape[0], self.imgShape[1]
        self.outPath = outPath
    
    def cutImageToGrid(self, subImageHeight, subImageWidth, gridRows, gridCols, offsetX=0, offsetY=0):
        #TODO:return error code and message
        self.subImages = []
        if subImageHeight*gridRows > self.imgHeight or subImageWidth*gridCols > self.imgWidth:
            return None
        if self.img_path == None and self.img_buffer.any() == None:
            print("Image not set!")
            return None
        if self.outPath == None:
            print("Output folder path not set!")
            return None
        if subImageHeight > self.imgHeight or subImageWidth > self.imgWidth:
            print("Subimage dimensions are larger than the image dimensions!")
            return None
        if gridRows < 1 or gridCols < 1:
            print("Grid dimensions must be greater than 0!")
            return None
        if offsetX < 0 or offsetY < 0:
            print("Offset dimensions must be greater than or equal to 0!")
            return None
        if subImageHeight + offsetY > self.imgHeight or subImageWidth + offsetX > self.imgWidth:
            print("Offset dimensions are larger than the image dimensions!")
            return None
        
        for i in range(1, gridRows+1):
            for j in range(1, gridCols+1):
                roi = self.img[offsetY + i * subImageHeight:offsetY + (i + 1) * subImageHeight, offsetX + j * subImageWidth:offsetX + (j + 1) * subImageWidth]
                self.subImages.append(roi)
                cv.imwrite(self.outPath + "\\" + str(i) + "_" + str(j) + ".jpg", roi)
        return len(self.subImages)
        