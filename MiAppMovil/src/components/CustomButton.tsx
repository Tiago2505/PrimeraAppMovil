import { TouchableOpacity, StyleSheet, Text } from "react-native";

type CustomButtonProps = {
  title: string;
  onPressButton: () => void;
};

export default function CustomButton({ title, onPressButton }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: 'navy',
    padding: 12,
    width: 150,
  },
  buttonText: {
    color: '#fff'
  }
});