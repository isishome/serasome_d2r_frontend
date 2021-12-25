import { Image } from 'tiptap-extensions'
import { nodeInputRule } from 'tiptap-commands'

const IMAGE_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/

export default class CustomImage extends Image {

  get schema() {
    return {
      inline: true,
      attrs: {
        src: {},
        alt: {
          default: null,
        },
        title: {
          default: null,
        },
        name: {
          default: null,
        }
      },
      group: 'inline',
      draggable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: dom => ({
            src: dom.getAttribute('src'),
            title: dom.getAttribute('title'),
            alt: dom.getAttribute('alt'),
            name: dom.getAttribute('name'),
          }),
        },
      ],
      toDOM: node => ['img', node.attrs],
    }
  }

  inputRules({ type }) {
    return [
      nodeInputRule(IMAGE_INPUT_REGEX, type, match => {
        const [, alt, src, title, name] = match
        return {
          src,
          alt,
          title,
          name,
        }
      }),
    ]
  }
}
