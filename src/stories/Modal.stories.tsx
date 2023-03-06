import React from 'react'

import { Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '../Modal'

export default {
  title: 'Modal',
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args: any) => <Modal {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic label',
}
