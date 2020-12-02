import { mount} from "@vue/test-utils";
import TeamCard from "../../src/components/TeamCard";
import expect from 'expect';
import Vue from 'vue'

// Función auxiliar que monta y devuelve el texto representado.
function getRenderedText (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
}

describe ('TeamCard', () => {
    let wrapper;
    const member = {
        codigo: 1,
        nombre: 'Lucas Mera',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
        rol: 'Desarrollador backend',
        image: 'path/to/image'
    }

    beforeEach(() => {
        wrapper = mount(TeamCard, {
            propsData: {
                member: member
            }
        });
    });

    it ('it shows name in the card component', () => {
        const renderedText = getRenderedText(TeamCard, {
            member: member
        })
        expect(renderedText.includes(member.nombre)).toBe(true)
    });

    it ('it shows code in the card component', () => {
        const renderedText = getRenderedText(TeamCard, {
            member: member
        })
        expect(renderedText.includes(member.codigo)).toBe(true)
    });

    it ('it shows descripcion in the card component', () => {
        const renderedText = getRenderedText(TeamCard, {
            member: member
        })
        expect(renderedText.includes(member.descripcion)).toBe(true)
    });

    it ('it shows rol in the card component', () => {
        const renderedText = getRenderedText(TeamCard, {
            member: member
        })
        expect(renderedText.includes(member.rol)).toBe(true)
    });

    it ('it renders props with data', () => {
        expect(wrapper.props().member.nombre).toBe(member.nombre)
    });

    it ('The object is like expected', () => {
        expect(wrapper.props().member).toBe(member)
    });

    it ('It should render the image of the member', () => {
        expect((wrapper.find('img').html()).includes(member.image)).toBe(true)
    });
})
