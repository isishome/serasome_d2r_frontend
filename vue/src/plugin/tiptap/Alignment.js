import { Mark } from 'tiptap'
import { toggleMark, markInputRule } from 'tiptap-commands';

export default class Alignment extends Mark {

  get name() {
    return 'alignment';
  }

  get defaultOptions() {
    return {
      levels: ["left", "center", "right", "justify"]
    };
  }

  get schema() {
    return {
      attrs: {
        align: {
          default: 'right',
        },
      },
      parseDOM: [{
        style: 'text-align',
        getAttrs: value => ({
          align: value
        }),
      },],
      toDOM: mark => {
        return ["span", {
          style: `display:block;text-align:${mark.attrs.align}`
        }, 0];
      }
    };
  }

  commands({ type }) {
    return attrs => toggleMark(type, attrs);
  }

  inputRules({ type }) {
    return [
      markInputRule(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, type),
    ];
  }
}