import React from 'react'

import { Story, Meta } from '@storybook/react'

import Label, { LabelProps } from '../Label'

export default {
  title: 'Label',
  component: Label,
} as Meta

const Template: Story<LabelProps> = (args: any) => <Label {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic label',
}
