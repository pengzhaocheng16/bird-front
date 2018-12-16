import React from 'react';
import { BirdGrid } from 'components/Grid';

class BirdGridDemoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    let gridOption = {
      title: "表格示例",
      url: {
        read: "/api/v1/table",
        add: "/test/add",
        edit: "/test/edit",
        delete: "/test/delete"
      },
      checkable: true,
      actions: [{ name: '外部按钮', color: 'error', onClick: function () { } }],
      columns: [
        { title: "编号", data: "id", type: "number" },
        { title: "文本", data: "field-text", type: "text", editor: {isRequired:true}, query: true },
        { title: "数字", data: "field-number", type: "number", editor: {}, colSpan: 2,sum:true, query: true },
        { title: "小数", data: "field-float", type: "number", editor: { innerProps: { step: 0.1, precision: 2 } }, colSpan: 0,sum:true, query: true },
        { title: "布尔值", data: "field-switch", type: "switch", editor: {}, query: true },
        { title: "单选", data: "field-dropdown", type: "dropdown", editor: {}, source: { url: '/api/v1/getOptions' }, query: true },
        { title: "多选", data: "field-multi", type: "multi", editor: {}, source: { key: 'xx' } },
        { title: "级联选择", data: "field-cascader", type: "cascader", editor: {}, source: { url: '/api/v1/tree' }, query: true },
        { title: "图片", data: "field-img", type: "img", editor: { ap: 'hide', ep: 'hide' }, hide: true },
        { title: "多图片", data: "field-imgs", type: "imgs", editor: { ap: 'hide', ep: 'hide' }, hide: true },
        { title: "文件", data: "field-file", type: "file", editor: {} },
        { title: "多文件", data: "field-files", type: "files", editor: { ap: 'hide', ep: 'hide' }, hide: true },
        { title: "时间", data: "field-datetime", type: "datetime", editor: {}, query: true },
        // { title: "富文本", data: "field-richtext", type: "richtext", editor: {}, query: true },
        {
          title: "操作选项", type: "command", actions: [{
            name: '行内按钮',
            color: '#67c23a',
            onClick: (data) => {
              console.log(data);
            }
          }]
        }
      ]
    };
    return <BirdGrid gridOption={gridOption} />
  }
}

export default BirdGridDemoPage
