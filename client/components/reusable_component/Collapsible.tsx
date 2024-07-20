import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/reusable_component/ThemedText';
import { ThemedView } from '@/components/reusable_component/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({children, title, style}: PropsWithChildren & { title: string, style?: {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={{width: '100%',}}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <ThemedText style={styles.headingText} type="defaultSemiBold">{title}</ThemedText>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    width: '100%',
    justifyContent: 'space-between',
    // paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    marginTop: 6,
  },
});
