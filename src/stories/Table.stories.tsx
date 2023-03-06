import React from 'react'

import { Story, Meta } from '@storybook/react'

import Table, { TableProps } from '../Table'

export default {
  title: 'Table',
  component: Table,
} as Meta

const Template: Story<TableProps> = (args: any) => <Table {...args} />

export const Basic = Template.bind({})
