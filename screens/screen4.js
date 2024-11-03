
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { FlatList } from 'react-native-web';




export default function App({ navigator }) {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/categories');
      const data1 = await response.json();
      setCategories(data1);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/locations');
      const data2 = await response.json();
      setLocations(data2);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  }

  useEffect(() => {
    fetchLocations();
  }, []);
  // const category = [
  //   {
  //     name: "Resort",
  //     image: require("../assets/img/resort.png")
  //   },
  //   {
  //     name: "Homestay",
  //     image: require("../assets/img/homestay.png")
  //   },
  //   {
  //     name: "Hotel",
  //     image: require("../assets/img/hotel.png")
  //   },
  //   {
  //     name: "Lodge",
  //     image: require("../assets/img/lodge.png")
  //   },
  //   {
  //     name: "Villa",
  //     image: require("../assets/img/villa.png")
  //   },
  //   {
  //     name: "Apartement",
  //     image: require("../assets/img/apartment.png")
  //   },
  //   {
  //     name: "Hostel",
  //     image: require("../assets/img/hostel.png")
  //   },
  //   {
  //     name: "See all",
  //     image: require("../assets/img/seeall.png")
  //   }
  // ]

  const renderCategory = ({ item }) => {
    return (
      <View style={styles.categoryItem} >
        <Image source={item.image} style={styles.imgItem} />
        <Text style={styles.txtCategory}>{item.name}</Text>
      </View>
    );
  };
  // const location = [
  //   {
  //     image: require("../assets/img/photo1.png")
  //   },
  //   {
  //     image: require("../assets/img/photo2.png")
  //   },
  //   {
  //     image: require("../assets/img/photo3.png")
  //   },
  //   {
  //     image: require("../assets/img/photo4.png")
  //   },
  //   {
  //     image: require("../assets/img/photo5.png")
  //   }
  // ]
  const renderLocation = ({ item }) => {
    return (
      <Image source={item.image} style={styles.imgPopu} />

    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.headerItem}>
          <Image source={require("../assets/img/logoicon.png")} style={styles.logo} />
          <View style={styles.search}>
            <TextInput
              style={styles.txtSearch}
              placeholder='Search here ...'
              placeholderTextColor={"#817E79"}
            />
            <Image source={require("../assets/img/findicon.png")} style={styles.iconS} />
          </View>
        </View>
        <View style={styles.headerItem}>
          <Image source={require("../assets/img/personicon.png")} style={styles.logo} />
          <View style={styles.row2Right}>
            <View style={styles.headerTitle}>
              <Text style={styles.txt1}>Welcome!</Text>
              <Text style={styles.txt2}>Donna Stroype</Text>
            </View>
            <Image source={require("../assets/img/ringicon.png")} style={styles.iconS} />
          </View>
        </View>

      </View>

      <View style={styles.content}>
        <View style={styles.itemContent}>
          <View style={styles.titleBox}>
            <Text style={styles.titleItem}>Category</Text>
            <Image source={require("../assets/img/3gach.png")} style={styles.baGach} />
          </View>

          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            contentContainerStyle={styles.listCategory}
          />



        </View>

        <View style={styles.itemContent}>
          <View style={styles.titleBox}>
            <Text style={styles.titleItem}>Popular Destination</Text>
            <Image source={require("../assets/img/3gach.png")} style={styles.baGach} />
          </View>
          <FlatList
            data={locations.slice(0, 3)}
            renderItem={renderLocation}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            contentContainerStyle={styles.listPopu}
          />


        </View>

        <View style={styles.itemContent}>
          <View style={styles.titleBox}>
            <Text style={styles.titleItem}>Recommended</Text>
            <Image source={require("../assets/img/3gach.png")} style={styles.baGach} />
          </View>
          <FlatList
            data={locations.slice(3, 5)}
            renderItem={renderLocation}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={styles.listPopu}
          />


        </View>

      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require("../assets/img/homeicon.png")} style={styles.iconFooter} />
          <Text style={styles.txtFooter}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require("../assets/img/exploreicon.png")} style={styles.iconFooter} />
          <Text style={styles.txtFooter}>Explore</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require("../assets/img/searchicon.png")} style={styles.iconFooter} />
          <Text style={styles.txtFooter}>Search</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require("../assets/img/profileicon.png")} style={styles.iconFooter} />
          <Text style={styles.txtFooter}>Profile</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: "scroll",
  },
  header: {
    backgroundColor: "#575BAC",
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center"
  },
  headerItem: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between"
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  iconS: {
    width: 35,
    height: 35,

  },
  search: {
    backgroundColor: "#fff",
    width: "80%",
    height: 45,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
  row2Right: {
    width: "80%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txt1: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff"
  },
  txt2: {
    fontSize: 14,
    color: "#fff"
  },

  content: {

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",

  },
  itemContent: {
    width: "80%",
    marginVertical: 20
  },

  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleItem: {
    fontSize: 20,
    fontWeight: "600"
  },
  baGach: {
    width: 30,
    height: 30
  },
  txtCategory: {
    fontSize: 14
  },
  categoryItem: {
   margin:8,
   justifyContent: "center",
   alignItems: "center"

  },
  imgItem: {
    width: 60,
    height: 60,
    

  },
  listCategory: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  imgPopu: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginLeft: 10
  },
  listPopu:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },





  footer: {
    backgroundColor: "#575BAC",
    width: "100%",
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  footerItem:{
   justifyContent: "center",
   alignItems: "center"
  },
  txtFooter: {
    color: "#fff",
    marginTop: 5
  },
  iconFooter: {
    width: 50,
    height: 50
  }
});
