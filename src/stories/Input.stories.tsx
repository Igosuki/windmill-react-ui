import React from 'react'

import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '../Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args: any) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {}

export const Checkbox = Template.bind({})
Checkbox.args = {
  type: 'checkbox',
}

export const Radio = Template.bind({})
Radio.args = {
  type: 'radio',
}
