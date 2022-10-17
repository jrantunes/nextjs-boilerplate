import Main from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
  // decorators: [withKnobs]
} as ComponentMeta<typeof Main>

// with knobs
// export const Basic: ComponentStory<typeof Main> = () => (
//   <Main
//     title={text('Title', 'React Avançado')}
//     description={text(
//       'Description',
//       'TypeScript, ReactJS, NextJS e Styled Components'
//     )}
//   />
// )

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
Basic.args = {
  title: 'Title basic',
  description: 'Description basic'
}

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
