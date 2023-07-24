import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { Searchbar, Button } from "react-native-paper";
import React, { useEffect, useState, useRef } from "react";
import CharactersCard from "./charactersCard";
import { fetchCharacters } from "../../../services/mutations";
import debounce from "lodash.debounce";

export default function SearchBar({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const onQueryChange = (query) => {
    setData([]);
    getData(1, query);
    setPage(1);
  };
  const debouncedFunction = React.useCallback(debounce(onQueryChange, 300), []);
  const onChangeSearch = (query) => {
    debouncedFunction(query);
    setSearchQuery(query);
  };
  const renderLoader = () => {
    return isLoading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const renderListItem = ({ item }) => (
    <CharactersCard data={item} navigation={navigation} />
  );
  const getData = (pageNum, query) => {
    setIsLoading(true);
    fetchCharacters(pageNum, query)
      .then((res) => {
        if (res?.characters?.info.next) {
          setHasNext(true);
        } else {
          setHasNext(false);
        }
        setData((data) =>
          pageNum === 1
            ? res?.characters?.results
            : [...data, ...res?.characters?.results]
        );
      })
      .finally(() => setIsLoading(false));
  };
  const loadMoreItem = () => {
    if (hasNext && !isLoading) {
      setPage((page) => {
        getData(page + 1, searchQuery);
        return page + 1;
      });
    }
  };

  useEffect(() => {
    setPage(1);
    setIsLoading(true);
    getData(1, "");
    if (data.length !== 0) listRef.current.scrollToIndex({ index: 0 });
  }, []);
  const listRef = useRef();
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        ref={listRef}
        data={data}
        renderItem={renderListItem}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.3}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemWrapperStyle: {
    backgroundColor: "#191970",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  container: {
    padding: 30,
    backgroundColor: "#24282f",
  },
});
