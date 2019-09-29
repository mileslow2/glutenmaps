import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from "./Map";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import GetPlaces from "../../Fetchers/GetPlaces";

export default class Main extends React.Component {
	state = {
		region: null,
		markers: []
	};
	async componentWillMount() {
		await Permissions.askAsync(Permissions.LOCATION);
		const location = await Location.getCurrentPositionAsync({});
		this.setRegion(location.coords);
		this.setMarkers(location.coords);
	}

	setRegion(region) {
		region.latitudeDelta = 0.0154;
		region.longitudeDelta = 0.0069;
		this.setState({
			region
		});
	}
	setMarkers = async loc => {
		var markers = await GetPlaces(loc);
		for (var i = 0; i < markers.length; i++) markers[i].key = i; // they need keys
		this.setState({ markers });
	};

	render() {
		if (this.state.region == null) {
			return <View style={{ backgroundColor: "red", flex: 1 }} />;
		}
		return (
			<SafeAreaView>
				<Map region={this.state.region} markers={this.state.markers} />
			</SafeAreaView>
		);
	}
}
