import { render } from '@testing-library/vue'
import BaseCard from '@core/components/BaseCard.vue'

describe('BaseCard', () => {
  it('should be rendered', () => {
    render(BaseCard)
  })

  it('check classes on card container', () => {
    const { container } = render(BaseCard, {
      slots: {
        default: '<p>contenido</p>',
      },
    })

    const article = container.querySelector('article')

    expect(article).toHaveClass('rounded-2xl border border-slate-200 bg-white p-6 shadow-sm')
  })
})
