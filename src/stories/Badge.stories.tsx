import React from 'react'

import { Story, Meta } from '@storybook/react'

import Badge, { BadgeProps } from '../Badge'

export default {
  title: 'Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args: any) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'badge text',
  type: 'neutral',
}
