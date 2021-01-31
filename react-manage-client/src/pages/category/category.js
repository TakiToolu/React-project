import React,{Component}from 'react'
import {
  Card,
  Table,
  Button,
  message,
  Modal
} from 'antd'
import LinkButton from '../../component/link_button'
import {reqCategorys,reqAddCategory,reqUpdateCategory} from '../../api';
import AddForm from './add-form'
import UpdateForm from './update-form'
import {createFromIconfontCN} from '@ant-design/icons';


const IconFont=createFromIconfontCN({ scriptUrl: [
    '//at.alicdn.com/t/font_2029705_tvs2qwzww1.js',
  ]})

export default class Category extends Component{
  state={
    loading:false,
    categorys:[],
    subCategorys:[],
    parentId:'0',
    parentName: '', // 当前需要显示的分类列表的父分类名称
    showStatus: 0,
  }
  /*
初始化Table所有列的数组
 */
  initColumns=()=>{
    this.columns=[
      {
        title:'分类的名称',
        dataIndex:'name',
      },
      {
        title:'操作',
        width:300,
        render:(category)=>{
          <span>
            <LinkButton onClick={() => this.showUpdate(category)}>修改分类</LinkButton>
            {/*如何向事件回调函数传递参数: 先定义一个匿名函数, 在函数调用处理的函数并传入数据*/}
            {this.state.parentId==='0' ? <LinkButton onClick={() => this.showSubCategorys(category)}>查看子分类</LinkButton> : null}
          </span>
        }
      }
    ]

  }
  /*
响应点击取消: 隐藏确定框
 */
  handleCancel = () => {
    // 清除输入数据
    this.form.resetFields()
    // 隐藏确认框
    this.setState({
      showStatus: 0
    })
  }
  /*
    添加分类
     */
  addCategory = () => {
    this.form.validateFields().then(async (values) => {

        // 隐藏确认框
        this.setState({
          showStatus: 0
        })

        // 收集数据, 并提交添加分类的请求
        const {parentId, categoryName} = values
        // 清除输入数据
        this.form.resetFields()
        const result = await reqAddCategory(categoryName, parentId)
        if(result.status===0) {

          // 添加的分类就是当前分类列表下的分类
          if(parentId===this.state.parentId) {
            // 重新获取当前分类列表显示
            this.getCategory()
          } else if (parentId==='0'){ // 在二级分类列表下添加一级分类, 重新获取一级分类列表, 但不需要显示一级列表
           this.getCategory('0')
          }
        }

    }).catch((err)=>{
      console.log('验证有误',err);
    })
  }
  /*
  显示添加的确认框
   */
  showAdd = () => {
    this.setState({
      showStatus: 1
    })
  }

  showUpdate=(category)=>{
    this.category=category;
    // 更新状态
    this.setState({
      showStatus: 2
    })
  }
  /*
   更新分类
    */
  updateCategory = () => {
    console.log('updateCategory()')
    // 进行表单验证, 只有通过了才处理
    this.form.validateFields(async (err, values) => {
      if(!err) {
        // 1. 隐藏确定框
        this.setState({
          showStatus: 0
        })

        // 准备数据
        const categoryId = this.category._id
        const {categoryName} = values
        // 清除输入数据
        this.form.resetFields()

        // 2. 发请求更新分类
        const result = await reqUpdateCategory({categoryId, categoryName})
        if (result.status===0) {
          // 3. 重新显示列表
          this.getCategory()
        }
      }
    })


  }

  showSubCategorys=(category)=>{
    this.setState({
      parentId:category._id,
      parentName:category.name,
    },()=>{
      //获取二级列表
      this.getCategory()
    })
  }
  showCategory=()=>{
    // 更新为显示一列表的状态
    this.setState({
      parentId: '0',
      parentName: '',
      subCategorys: []
    })
  }

  /*
异步获取一级/二级分类列表显示
parentId: 如果没有指定根据状态中的parentId请求, 如果指定了根据指定的请求
 */
  getCategory=async (parentId)=>{
    this.setState({loading:true});
    parentId=parentId||this.state.parentId;
    const result=await reqCategorys(parentId);
    this.setState({loading:false});
    if(result.status===0){
      const categorys=result.data;
      if(parentId==='0'){
        this.setState({categorys});
      }else{
        this.setState({subCategory:categorys});
      }
    }else{
      message.error('获取分类列表失败')
    }

  }
  componentWillMount() {
    this.initColumns();
  }
  componentDidMount() {
    this.getCategory();
    console.log('hello',this.state.categorys);
  }

  render() {
    const {categorys, subCategorys, parentId, parentName, loading, showStatus } =this.state;
    const category = this.category || {} // 如果还没有指定一个空对象
    const title=parentId==='0'?'一级分类列表':(
        <span>
          <LinkButton onClick={this.showCategory }>一级分类列表</LinkButton>
          <IconFont type='icon-jiaose1' style={{marginRight: 5}}/>
          <span>{parentName}</span>
        </span>
    );
    const extra=(
        <Button onClick={this.showAdd}>
          +添加
        </Button>
    );
    return (
        <Card title={title} extra={extra}>
          <Table
              bordered
              rowKey='_id'
              loading={loading}
              dataSource={parentId==='0' ? categorys : subCategorys}
              columns={this.columns}
              pagination={{defaultPageSize: 5, showQuickJumper: true}}
          />

              <Modal
                  title="添加分类"
                  visible={showStatus===1}
                  onOk={this.addCategory}
                  onCancel={this.handleCancel}
              >
                <AddForm
                    categorys={categorys}
                    parentId={parentId}
                    setForm={(form) => {this.form = form}}
                />
              </Modal>

              <Modal
                  title="更新分类"
                  visible={showStatus===2}
                  onOk={this.updateCategory}
                  onCancel={this.handleCancel}
              >
                <UpdateForm
                    categoryName={category.name}
                    setForm={(form) => {this.form = form}}
                />
              </Modal>
        </Card>
    )
  }
}