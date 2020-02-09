import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteIngredient } from '../redux/actions';

const List = props => {
  const ingredients = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  return (
    <View>
      {ingredients.map((el, i) => {
        return ( 
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            key={i}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <Text>{el}</Text>
            </View>
            <Icon
                name={'delete-outline'}
                size={22}
                color='#002A5A'
                onPress={()=>{
                    dispatch(deleteIngredient(i))
                }
            }
            />
          </View>
        );
      })}
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#F88A25',
    marginTop: '10%',
    marginRight: '8%',
  },
});