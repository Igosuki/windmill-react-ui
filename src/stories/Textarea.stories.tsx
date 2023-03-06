import React from 'react'

import { Story, Meta } from '@storybook/react'

import Textarea, { TextareaProps } from '../Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta

const Template: Story<TextareaProps> = (args: any) => <Textarea {...args} />

export const Basic = Template.bind({})
