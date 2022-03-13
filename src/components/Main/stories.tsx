import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => <Main title={text('Title', 'React Avançadão')} body={text('Body', 'É isso ai')} />
