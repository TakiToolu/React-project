import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Select,
  Button,
  Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

/*
添加分类的form组件
 */
class AddForm extends Component {

  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
    categorys: PropTypes.array.isRequired, // 一级分类的数组
    parentId: PropTypes.string.isRequired, // 父分类的ID
  }

  componentWillMount () {
    console.log('guazai',this);
    this.props.setForm(this.props.form)
  }

  render() {
    console.log('jj',this.props);
    const {categorys, parentId,setForm} = this.props
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      setForm(values)
    };
    const onReset = () => {
      this.resetFields();
    };

    return (
      <Form >
        <Item
            name='parentId'
            initialValues={parentId}
        >
              <Select>
                <Option value='0'>一级分类</Option>
                {
                  categorys.map(c => <Option value={c._id}>{c.name}</Option>)
                }
              </Select>
        </Item >

        <Item
            name='categoryName'
            // initialValues={''}
            rules={[
              {required: true, message: '分类名称必须输入'}
            ]}
        >
              <Input placeholder='请输入分类名称'/>
        </Item>
        {/*<Item >*/}
        {/*  <Button type="primary" htmlType="submit">*/}
        {/*    Submit*/}
        {/*  </Button>*/}
        {/*  <Button htmlType="button" onClick={onReset}>*/}
        {/*    Reset*/}
        {/*  </Button>*/}

        {/*</Item>*/}
      </Form>
    )
  }
}

// export default Form.create()(AddForm)
export default AddForm