import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
