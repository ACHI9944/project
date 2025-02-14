import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {HiddenItemWithActionsProps} from './types';

export const HiddenItemWithActions = ({
  onClose,
  onDelete,
}: HiddenItemWithActionsProps) => {
  return (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.closeButton]}
        onPress={onClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={onDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
