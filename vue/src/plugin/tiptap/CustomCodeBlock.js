import { Node } from 'tiptap'
import { toggleBlockType, setBlockType, textblockTypeInputRule } from 'tiptap-commands'

export default class CustomCodeBlock extends Node {

  get name() {
    return 'ccb'
  }

  get schema() {
    return {
      attrs: {
        label: {
          default: 'JavaScript'
        },
        value: {
          default: 'javascript'
        }
      },
      content: 'text*',
      marks: '',
      group: 'block',
      code: true,
      defining: true,
      draggable: false,
      parseDOM: [{
        tag: 'pre',
        contentElement: 'code',
        preserveWhitespace: 'full',
        getAttrs: dom => ({
          label: dom.querySelector('span.language-notice') ? dom.querySelector('span.language-notice').innerHTML : 'JavaScript',
          value: dom.querySelector('code').getAttribute('class') ? dom.querySelector('code').getAttribute('class') : 'javascript'
        })
      }],
      toDOM: node => ['pre', ['span', { 'class': 'language-notice' }, node.attrs.label], ['code', { 'class': node.attrs.value }, 0]]
    }
  }

  commands({ type, schema }) {
    return attrs => toggleBlockType(type, schema.nodes.paragraph, attrs)
  }

  keys({ type, schema }) {
    return {
      'Shift-Ctrl-\\': setBlockType(type, schema.nodes.paragraph)
    }
  }

  inputRules({ type }) {
    return [
      textblockTypeInputRule(/^```$/, type)
    ]
  }

}
