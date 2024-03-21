import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { UiButton } from '../components/index';
import { IconNames }  from '../assets/icons';

const meta = {
  title: 'Basics/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    isFull: { control: 'boolean'},
    iconNameLeft: { control: 'select', options: IconNames },
    iconNameRight: { control: 'select', options: IconNames },
  },
  args: {
    onClick: fn(),
    title: 'Button'
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    isFull: true,
  },
};
