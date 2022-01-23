import { Node } from 'tiptap'
import { toggleBlockType } from 'tiptap-commands'

export default class Alignment extends Node {

  get name() {
    return 'alignment'
  }

  get defaultOptions() {
    return {
      levels: ['left', 'center', 'right', 'justify']
    };
  }

  get schema() {
    return {
      attrs: {
        align: {
          default: 'justify',
        },
      },
      content: 'inline*',
      group: 'block',
      defining: true,
      draggable: false,
      parseDOM: [{
        tag: 'div',
        getAttrs: dom => {
          return {
            align: dom.style.textAlign
          }
        },
      }],
      toDOM: node => {
        return ['div', {
          style: `display:block;text-align:${node.attrs.align}`
        }, 0];
      }
    }
  }

  commands({ type, schema }) {
    return attrs => toggleBlockType(type, schema.nodes.paragraph, attrs)
  }
}