import React, { useState } from 'react';
import Input from './input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        placeholder="Enter something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
