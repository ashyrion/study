import mss
import cv2
import numpy as np
import pyautogui as pag
import time

life_position = {'left': 10, 'top': 855, 'width': 210, 'height': 210}
potion_one = {'left': 310, 'top': 975, 'width': 38, 'height': 90}
potion_two = {'left': 355, 'top': 975, 'width': 40, 'height': 90}
potion_three = {'left': 400, 'top': 975, 'width': 40, 'height': 90}
potion_four = {'left': 450, 'top': 975, 'width': 40, 'height': 90}
potion_five = {'left': 495, 'top': 975, 'width': 40, 'height': 90}


def compute_icon_type(img):
    mean = np.mean(img, axis=(0, 1))
    print(mean)
    if mean[0] > 43 and mean[1] > 37 and mean[2] > 83:
        result = 'life_is_full'
    else:
        result = 'drink'
    return result


while True:
    # x, y = pag.position()
    # position_str = 'X : ' + str(x) + 'Y : ' + str(y)
    # print(position_str)
    time.sleep(1)
    with mss.mss() as sct:
        life_img = np.array(sct.grab(life_position))[:, :, :3]
        # one_img = np.array(sct.grab(potion_one))[:, :, :3]
        # two_img = np.array(sct.grab(potion_two))[:, :, :3]
        # three_img = np.array(sct.grab(potion_three))[:, :, :3]
        # four_img = np.array(sct.grab(potion_four))[:, :, :3]
        # five_img = np.array(sct.grab(potion_five))[:, :, :3]

        life_icon = compute_icon_type(life_img)
        # one_icon = compute_icon_type(one_img)
        # two_icon = compute_icon_type(two_img)
        # three_icon = compute_icon_type(three_img)
        # four_icon = compute_icon_type(four_img)
        # five_icon = compute_icon_type(five_img)
        # # cv2.imshow('life_img', life_img)
        # cv2.imshow('one_img', one_img)
        # cv2.imshow('two_img', two_img)
        # cv2.imshow('three_img', three_img)
        # cv2.imshow('four_img', four_img)
        # cv2.imshow('five_img', five_img)
        # cv2.waitKey(0)

    print(life_icon)
    if life_icon == 'dirnk':
        print('use life')
    else:
        print('None')
