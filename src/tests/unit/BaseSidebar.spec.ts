import { render, screen } from '@testing-library/vue'
import BaseSidebar from '@core/components/BaseSidebar.vue'
import { NavLink } from '@/core/types/Navigation'
import { defineComponent, markRaw } from 'vue'

const IconStub = markRaw(
  defineComponent({
    name: 'IconStub',
    template: '<svg data-testid="icon-stub"></svg>',
  }),
)

const RouterLinkStub = defineComponent({
  name: 'RouterLinkStub',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },
  template: `<div><slot :isActive="false" /></div>`,
})

const navLinks: NavLink[] = [
  { to: '/dashboard', label: 'Dashboard', icon: IconStub },
  { to: '/users', label: 'Usuarios', icon: IconStub },
]

describe('BaseSidebar', () => {
  it('should be renderer', () => {
    render(BaseSidebar, {
      props: {
        navLinks,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
  })

  it('displays current user when currentUser is send', () => {
    render(BaseSidebar, {
      props: {
        navLinks,
        currentUser: 'Pablo Sirera',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(screen.getByText('Pablo Sirera')).toBeInTheDocument()
  })
})
