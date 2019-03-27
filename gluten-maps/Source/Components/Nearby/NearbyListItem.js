import { View, Text, Image } from "react-native";
import StarRating from "react-native-star-rating";
import GetImage from "../../Fetchers/GetImage";
import s from "../../Styles/NearbyStyles";

var RenderListItem = ({ item }) => {
  if (item.name.length > 31) {
    // adds ... if title is too long
    item.name = item.name.substring(0, 31) + " ...";
  }
  return (
    <TouchableOpacity
      style={[u.row, s.itemContainer, u.fullW, u.shadow, u.white]}
    >
      <View style={[s.shadowCover, u.white, u.fullW, u.abs]} />
      <Image
        source={{ uri: GetImage(item.photos[0].photo_reference) }}
        style={[s.listImage, u.shadow]}
      />
      <View style={u.col}>
        <Text style={[s.itemText]}>{item.name}</Text>
        <View style={{ width: 50, left: 12, bottom: 10 }}>
          <StarRating
            style={s.stars}
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={item.rating}
            fullStarColor={"rgb(168, 214, 194)"}
            halfStarColor={"rgb(168, 214, 194)"}
            emptyStarColor={"rgb(168, 214, 194)"}
            starSize={27}
          />
        </View>
      </View>
      <Text style={[s.distanceText, u.abs]}>{item.dist}</Text>
    </TouchableOpacity>
  );
};

export default RenderListItem;
