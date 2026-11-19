import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SegmentedControl from '../SegmentedControl.vue'

const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
]

describe('SegmentedControl', () => {
  it('renders one button per option and marks the selected one', () => {
    const wrapper = mount(SegmentedControl, { props: { options, value: 2 } })
    const buttons = wrapper.findAll('button')
    expect(buttons.map((b) => b.text())).toEqual(['One', 'Two'])
    expect(buttons[1]?.attributes('aria-pressed')).toBe('true')
  })

  it('emits update:value with the clicked option', async () => {
    const wrapper = mount(SegmentedControl, { props: { options, value: 2 } })
    await wrapper.findAll('button')[0]?.trigger('click')
    expect(wrapper.emitted('update:value')).toEqual([[1]])
  })
})
