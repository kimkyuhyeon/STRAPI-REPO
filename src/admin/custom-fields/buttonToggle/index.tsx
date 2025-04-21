// /src/admin/custom-fields/buttonToggle/index.tsx
import React, { useState } from 'react';
import { TextInput, Checkbox } from '@strapi/design-system';

const ButtonToggle = ({ name, value = {}, onChange }) => {
  const [showButton, setShowButton] = useState(value?.enabled ?? false);

  return (
      <div>
        <Checkbox
            onValueChange={(checked) => {
              setShowButton(checked);
              onChange({ target: { name, value: { ...value, enabled: checked } } });
            }}
            value={showButton}
        >
          버튼 추가하기
        </Checkbox>

        {showButton && (
            <TextInput
                label="버튼 이름"
                name="label"
                value={value?.label ?? ''}
                onChange={(e) =>
                    onChange({ target: { name, value: { ...value, label: e.target.value } } })
                }
            />
        )}
      </div>
  );
};

export default ButtonToggle;
