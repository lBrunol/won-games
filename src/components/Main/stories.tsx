import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => <Main title={text('Title', 'React Avançadão')} body={text('Body', 'É isso ai')} />
