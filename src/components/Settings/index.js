import React from 'react';
import { ScaleDictionary } from '@tonaljs/modules';
import { SettingsContainer, Row, Select, Label } from './styles';

const Settings = ({ root, pitch, scale, onRootChange, onPitchChange, onScaleChange }) => {
  const allScales = ScaleDictionary.entries()
    .map(e => e.name)
    .sort();
  const allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const allPitches = ['0', '1', '2', '3', '4'];

  const renderRow = (title, list, value, onChange) => {
    return (
      <Row>
        <Label>{title}</Label>
        <Select onChange={onChange}>
          {list.map(e => {
            const displayName = `${e[0].toUpperCase()}${e.slice(1, e.length)}`;

            return (
              <option value={e} selected={e === value}>
                {displayName}
              </option>
            );
          })}
        </Select>
      </Row>
    );
  };

  return (
    <SettingsContainer>
      {renderRow('Root note:', allNotes, root, onRootChange)}
      {renderRow('Pitch:', allPitches, pitch, onPitchChange)}
      {renderRow('Scale: ', allScales, scale, onScaleChange)}
    </SettingsContainer>
  );
};

export default Settings;
