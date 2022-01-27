import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface ImageButtonProps {
  onPress: () => void;
  src: ImageSourcePropType;
}

export default function ImageButton(props: ImageButtonProps) {
  const { onPress, src } = props;
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Image style={styles.image} source={src} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 2,
    // elevation: 8,
    // backgroundColor: '#009688',
    // borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
  },
  button: {
    width: '80%',
    height: '80%',
    backgroundColor: '#C8E3D4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //cień
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    // width: '90%',
    // height: '90%',
    // backgroundColor: '#ddd',
    // fontSize: 20,
    // borderColor: 'gray',
    // borderWidth: 1,
    // marginBottom: 10,
    // borderRadius: 5,
  },
  image: {
    width: '90%',
    height: '90%',
  },
});
