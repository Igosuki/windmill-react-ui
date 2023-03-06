import React from 'react'

import { Story, Meta } from '@storybook/react'

import Pagination, { PaginationProps } from '../Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = (args: any) => <Pagination {...args} />

export const Basic = Template.bind({})
Basic.args = {
  totalResults: 120,
  resultsPerPage: 10,
}
