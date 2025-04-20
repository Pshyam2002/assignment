
import React from 'react';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    primary: false,
  },
};
