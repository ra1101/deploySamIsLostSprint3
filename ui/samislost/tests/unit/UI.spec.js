import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import AppHeader from './../../components/AppHeader.vue'
import NoSearch from './../../components/NoSearchHeader.vue'
import reportedSighting from './../../components/sighting.vue'

// -------------------------------------------------------
// testing AppHeader.vue component 
// -------------------------------------------------------
describe('AppHeader.vue', () => {
  it('is instantiated', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy();
  })
})

describe('AppHeader.vue', () => {
  it('renders h1 title', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.title').text()).toEqual("Sam is Lost")
  })
})

describe('AppHeader.vue', () => {
  it('contains "Home" and links to /', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(0).text()).toContain('Home')
    expect(links.at(0).props().to).toContain('/')
  })
})

describe('AppHeader.vue', () => {
  it('contains "Create Entry" and links to /createEntry', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(1).text()).toContain('Create Entry')
    expect(links.at(1).props().to).toContain('/createEntry')
  })
})

describe('AppHeader.vue', () => {
  it('contains "About" and links to /about', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(2).text()).toContain('About')
    expect(links.at(2).props().to).toContain('/about')
  })
})

describe('AppHeader.vue', () => {
  it('contains "List View" and links to /list', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(3).text()).toContain('List View')
    expect(links.at(3).props().to).toContain('/list')
  })
})

describe('AppHeader.vue', () => {
  it('contains "Map View" and links to /map', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(4).text()).toContain('Map View')
    expect(links.at(4).props().to).toContain('/map')
  })
})

describe('AppHeader.vue', () => {
  it('contains Search label', () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const search = wrapper.findAll('label')
    expect(search.at(0).text()).toContain('Search')
  })
})
// -------------------------------------------------------
// testing sighting.vue component 
// -------------------------------------------------------
describe('sighting.vue', () => {
  it('is instantiated', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy();
  })
})

describe('sighting.vue', () => {
  it('contains div class sighting', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.sighting').exists()).toBe(true)
  })
})

describe('sighting.vue', () => {
  it('contains div class sightingTitle', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.sightingTitle').exists()).toBe(true)
  })
})

describe('sighting.vue', () => {
  it('shows title text in sightingTitle', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        title: 'a lost dog'
      }
    })
    expect(wrapper.find('.sightingTitle').text()).toContain('a lost dog')
  })
})

describe('sighting.vue', () => {
  it('shows Type on page when given a type', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        type: 'dog'
      }
    })
    expect(wrapper.text()).toContain('Type: dog')
  })
})

describe('sighting.vue', () => {
  it('shows Location on page when given a location', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        location: 'downtown SF'
      }
    })
    expect(wrapper.text()).toContain('Location: downtown SF')
  })
})

describe('sighting.vue', () => {
  it('shows Detail link on page when given an ID', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        id: 'b8422e36-b36d-4664-808c-6e039c7598f3'
      }
    })
    const detail_link = wrapper.findAll('.link')
    expect(detail_link.at(0).text()).toContain('See detail >')
  })
})

describe('sighting.vue', () => {
  it('has a valid link to ID when giving an ID', () => {
    const wrapper = shallowMount(reportedSighting, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        id: 'b8422e36-b36d-4664-808c-6e039c7598f3'
      }
    })
    const detail_link = wrapper.findAll('.link')
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(0).props().to).toContain('list/b8422e36-b36d-4664-808c-6e039c7598f3')
  })
})

// -------------------------------------------------------
// testing NoSearchHeader.vue component 
// -------------------------------------------------------
describe('NoSearchHeader.vue', () => {
  it('is instantiated', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy();
  })
})

describe('NoSearchHeader.vue', () => {
  it('does not contain search', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
    })
    expect(wrapper.text()).not.toContain('Search')
  })
})

describe('NoSearchHeader.vue', () => {
  it('does not contain Map View', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
    })
    expect(wrapper.text()).not.toContain('Map View')
  })
})

describe('NoSearchHeader.vue', () => {
  it('does not contain List View', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
    })
    expect(wrapper.text()).not.toContain('List View')
  })
})

describe('NoSearchHeader.vue', () => {
  it('contains "Home" and links to /', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(0).text()).toContain('Home')
    expect(links.at(0).props().to).toContain('/')
  })
})

describe('NoSearchHeader.vue', () => {
  it('contains "Create Entry" and links to /createEntry', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(1).text()).toContain('Create Entry')
    expect(links.at(1).props().to).toContain('/createEntry')
  })
})

describe('NoSearchHeader.vue', () => {
  it('contains "About" and links to /about', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links.at(2).text()).toContain('About')
    expect(links.at(2).props().to).toContain('/about')
  })
})