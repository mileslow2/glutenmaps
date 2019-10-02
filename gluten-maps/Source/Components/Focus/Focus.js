import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	PanResponder,
	Dimensions
} from "react-native";
import s from "../../Styles/FocusStyles";
import u from "../../Styles/UniversalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store, FocusChange } from "../../Redux";
import { debounce } from "debounce";
import Decide, { nearbyAllowed } from "./Decider";
import Nearby from "../Nearby/Nearby";
import R from "../Universal/Round";
import { HamburgerHandler } from "../../Redux";
const { height } = Dimensions.get("screen");

const nearbyHeight = R(height > 736 ? height * 0.9 : height * 0.95);
const restaurantHeight = R(height > 736 ? height * 0.79 : height * 0.84);

var finishHeight, focusHeight, toggled;

export default class Focus extends Component {
	state = {
		focusToggled: false,
		render: true
	};

	upAnim = new Animated.Value(60);
	height = new Animated.Value(height);

	panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (event, gesture) => {
			toggled = this.state.focusToggled;
			if (gesture.dy > 0 && !toggled) {
				finishHeight = nearbyAllowed() ? nearbyHeight : restaurantHeight;
				focusHeight = toggled ? finishHeight : 60;
				newValue = focusHeight - gesture.dy;
				this.upAnim.setValue(newValue);
			}
		},
		onPanResponderRelease: (event, gesture) => {
			if (gesture.dy > 0 || !this.state.focusToggled)
				if (Math.abs(gesture.dy) > 20) this.renderFocus();
				else this.returnHeight();
		}
	});
	returnHeight() {
		focusHeight = nearbyAllowed() ? nearbyHeight : restaurantHeight;
		this.spring(focusHeight);
	}
	spring(heightTo) {
		Animated.spring(this.upAnim, {
			toValue: heightTo,
			friction: 7,
			useNativeDriver: true
		}).start();
	}
	renderFocus() {
		let focusToggled = this.state.focusToggled;

		if (nearbyAllowed()) {
			let focusHeight = focusToggled ? 60 : nearbyHeight;
			this.spring(focusHeight);
			this.changeToggle();
			Store.dispatch({ type: "update", payload: this.state.focusToggled });
		} else if (!focusToggled) {
			this.spring(restaurantHeight);
			this.changeToggle();
		} else {
			let store = Store.getState();
			let payload = {
				location: store.location,
				key: -1
			};
			Store.dispatch({ type: "update", payload });
			this.changeToggle();
			this.spring(60);
		}
		// var payload = false;
		// if (focusToggled) payload = true;
	}
	changeToggle() {
		var focusToggled = !this.state.focusToggled;
		this.setState({
			focusToggled
		});
		HamburgerHandler.dispatch({
			type: "update",
			payload: !focusToggled
		});
	}
	removeShadow() {
		if (this.state.focusToggled && nearbyAllowed()) return null;
		return <View style={[s.removeShadow, u.abs, u.white, u.z1]} />;
	}
	pagenearbyAllowed() {
		const data = {
			nearbyHeight,
			restaurantHeight,
			restaurants: this.props.restaurants,
			loc: this.props.loc
		};
		const toggled = this.state.focusToggled;
		return (
			<View style={{ zIndex: 2 }}>
				<Decide
					data={data}
					toggled={this.state.focusToggle}
					render={this.state.render}
				/>
			</View>
		);
	}
	checkPage() {
		return this.props.currentMarker == -1;
	}
	componentWillMount() {
		let int = setInterval(() => {
			if (!this.checkPage() && !this.state.focusToggled) {
				this.renderFocus();
			}
		}, 200);
		FocusChange.subscribe(() => {
			if (FocusChange.getState()) {
				this.renderFocus();
				FocusChange.dispatch({ type: "update", payload: false });
			}
		});
	}
	componentWillUnMount() {
		clearInterval(int);
	}
	render() {
		return (
			<View>
				<Animated.View
					style={[
						s.focusContainer,
						u.abs,
						{
							height,
							transform: [
								{
									translateY: Animated.subtract(this.height, this.upAnim)
								}
							]
						}
					]}
				>
					<View
						{...this.panResponder.panHandlers}
						style={[u.fullW, u.white, u.shadow, s.bottomHeaderBody]}
					>
						<View style={[s.swipeUpper, u.centerH]} />
						{this.pagenearbyAllowed()}
						{this.removeShadow()}
					</View>
				</Animated.View>
			</View>
		);
	}
}
