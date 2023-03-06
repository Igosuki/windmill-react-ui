import React from 'react'

import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from '../Avatar'

import avatarImage from './static/avatar-1.jpg'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args: any) => <Avatar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  size: 'large',
  src: avatarImage,
  alt: 'Profile image',
}
