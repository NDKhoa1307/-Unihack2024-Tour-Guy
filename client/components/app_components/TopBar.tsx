import { SearchBar } from "@rneui/base";
import { StyleSheet, View, Text } from "react-native";

interface TopBarProps {
  updateSearch: (search: string) => void;
  search: string;
}

export default function TopBar({ updateSearch, search }: TopBarProps) {
  return (
    <View style={styles.topBar}>
      <SearchBar
        style={styles.searchBar}
        inputContainerStyle={styles.searchBarInputContainer}
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.searchBarInput}
        placeholder="Search for checkpoints..."
        onChangeText={updateSearch}
        value={search}
      />
      <View style={styles.currentLocationWrapper}>
        <Text>169, Đường, Quận, Huyện, Thành Phố</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    zIndex: 3,
  },
  searchBar: {
    backgroundColor: "white",
    width: "100%",
  },
  searchBarInput: {
    backgroundColor: "white",
    fontSize: 16,
  },
  searchBarInputContainer: {
    backgroundColor: "white",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "black",
  },
  searchBarContainer: {
    width: "80%",
    backgroundColor: "transparent",
    borderColor: "white",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingBottom: 0,
    borderRadius: 24,
  },
  currentLocationWrapper: {
    backgroundColor: "#FCE38A",
    padding: 12,
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 1,
    borderColor: "black",
  },
});
