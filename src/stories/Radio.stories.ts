import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { Radio } from '../components/index';
import { IconNames }  from '../assets/icons';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    categories: { control: 'array'},
  },
  args: {
    onClick: fn(),
    title: 'Button'
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: 'Radio Group',
    categories: ['one', 'two', 'three'],
  },
};
