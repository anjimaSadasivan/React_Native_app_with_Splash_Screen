import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Store from './Store';
import {fetchData} from './actions/actions';

const GENERES = [
  {
    id: '1',
    title: 'AutoBiography',
  },
  {
    id: '2',
    title: 'Sci-fi',
  },
  {
    id: '3',
    title: 'Horror',
  },
  {
    id: '4',
    title: 'Fiction',
  },
];

const MenuList = () => {
  const selectedGenre = useSelector(state => state.selectedGenre);
  const data = useSelector(state => state.data);

  const dispatch = useDispatch();

  const handleUserProfile = genreTitle => {
    if (selectedGenre === genreTitle) {
      // If the same genre is clicked again, set the selected genre to null
      dispatch({type: 'SET_SELECTED_GENRE', genre: null});
      dispatch({type: 'HIDE_AUTOBIOGRAPHY_BOOKS'});
      dispatch({type: 'HIDE_SCIFI_BOOKS'});
    } else {
      dispatch({type: 'SET_SELECTED_GENRE', genre: genreTitle});
      if (genreTitle === 'AutoBiography') {
        dispatch({type: 'SHOW_AUTOBIOGRAPHY_BOOKS'});
      }
      if (genreTitle === 'Sci-fi') {
        dispatch({type: 'SHOW_SCIFI_BOOKS'});
      }
      if (genreTitle === 'Sci-fi') {
        dispatch({type: 'SHOW_SCIFI_BOOKS'});
        dispatch(fetchData());
      }
    }
  };

  const Display = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title} onPress={() => handleUserProfile(title)}>
        {title}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={GENERES}
        renderItem={({item}) => <Display title={item.title} />}
        keyExtractor={item => item.id}
      />
      {selectedGenre === 'AutoBiography' && (
        <View>
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            Book AB 1
          </Text>
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            Book AB 2
          </Text>
          <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
            Book AB 3
          </Text>
        </View>
      )}
      {/* {selectedGenre === 'Sci-fi' && (
        <View>
          <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>
            Book SF 1
          </Text>
          <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>
            Book SF 2
          </Text>
          <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>
            Book SF 3
          </Text>
        </View>
      )} */}
      {selectedGenre === 'Sci-fi' && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Text style={{fontSize: 40, color: 'Black', fontWeight: 'bold'}}>
              {item.name}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MenuList;
