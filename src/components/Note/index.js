import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Title, OptionsButton, OptionsIcon, styles} from './styles';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

export const Note = ({data, index, modal}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <Collapse
      style={styles.collapse}
      onToggle={() => setShowOptions(!showOptions)}>
      <CollapseHeader style={styles.collapseHeader}>
        <View>
          <Title border={showOptions === true ? 2 : 0}>{data.title}</Title>
        </View>
        {showOptions && (
          <OptionsButton underlayColor="transparent" onPress={modal}>
            <OptionsIcon source={require('../../assets/option.png')} />
          </OptionsButton>
        )}
      </CollapseHeader>
      <CollapseBody style={styles.collapseBody}>
        <Text style={styles.collapseBodyText}>{data.description}</Text>
      </CollapseBody>
    </Collapse>
  );
};
