import React from 'react';
import { ScrollView } from 'react-native';

import { ItemFunction } from './components/item-function';

import { navigate } from '../../navigation/navigation-service';
import { APP_SCREEN } from '../../navigation/screen-type';

export const Home = () => {
  // func
  const handleCardRotatePress = () => {
    navigate(APP_SCREEN.CARD_ROTATE);
  };

  const handleSpaceButtonPress = () => {
    navigate(APP_SCREEN.SPACE_BUTTON);
  };

  const handleCardGradientPress = () => {
    navigate(APP_SCREEN.CARD_GRADIENT);
  };

  const handleMountedElementPress = () => {
    navigate(APP_SCREEN.MOUNTED_ELEMENT);
  };

  const handleSensorWallpaperPress = () => {
    navigate(APP_SCREEN.SENSOR_WALLPAPER);
  };
  const handleSwipeSortPress = () => {
    navigate(APP_SCREEN.SWIPE_SORT);
  };

  // render
  return (
    <ScrollView>
      <ItemFunction text="Card Rotate" onPress={handleCardRotatePress} />
      <ItemFunction text="Space Button" onPress={handleSpaceButtonPress} />
      <ItemFunction text="Card Gradient" onPress={handleCardGradientPress} />
      <ItemFunction
        text="Mounted Element"
        onPress={handleMountedElementPress}
      />
      <ItemFunction
        text="Sensor Wallpaper"
        onPress={handleSensorWallpaperPress}
      />
      <ItemFunction text="Swipe Sort" onPress={handleSwipeSortPress} />
    </ScrollView>
  );
};
