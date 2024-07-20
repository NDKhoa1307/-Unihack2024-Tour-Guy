import { View, Text, StyleSheet, Image } from "react-native";
import MyButton from "@/components/reusable_component/MyButton";
import SizedBox from "@/components/reusable_component/SizedBox";

export default function InformationScreen() {
  return (
    <View style={styles.informationContainer}>
      <SizedBox width={10} height={12}></SizedBox>
      <View style={styles.mainSection}>
        <Image
          source={require("@/assets/images/tempDest.png")}
          style={{ width: "100%", height: '100%', borderRadius: 12, flex: 1 }}
        />
        <View>
          <Text style={styles.mainTitle}>Da Nang, Viet Nam</Text>
          <Text style={styles.mainSubtitle}>City of dreams</Text>
          <View style={styles.checkoutContainer}>
            <Text>Also: </Text>
            <MyButton width={160} hasBorder={true}>
              <Text style={{ fontWeight: "bold" }}>Checkout VietNam</Text>
            </MyButton>
          </View>
        </View>
      </View>
      <SizedBox height={12} width={12} />
      <View>
        <Text>
          Da Nang is a coastal city in central Vietnam known for its sandy beaches and history as a
          French colonial port. It's a popular base for visiting the inland Bà Nà hills to the west
          of the city. Here the Hải Vân Pass has views of Da Nang Bay and the Marble Mountains, 5
          limestone outcrops that are home to pagodas and caves containing Buddhist shrines.
        </Text>
        <Text style={[styles.mainSubtitle, styles.subText]}>
          Source: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  informationContainer: {
    flex: 1,
    padding: 12,
    // alignItems: "center",
  },
  mainSection: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainSubtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 6,
  },
  checkoutContainer: {
    marginTop: 12,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  subText: {
    fontSize: 14,
  },
});
