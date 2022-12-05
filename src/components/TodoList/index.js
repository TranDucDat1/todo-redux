import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'; // useSelector: lay du lieu tu kho chung
import { addTodo } from "../../redux/actions";
// id tu tang
import { v4 as uuidv4 }from "uuid";
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';


export default function TodoList() {
  // Tao useState nay de lay du lieu tu the input
  const [todoName, setTodoName] = useState('');

  // Tao useState nay se lay du lieu tu the select: high, medium, low
  const [priority, setPriority] = useState('Medium');

  // useSelector la mot function se lay ra du lieu( tung phan ) tu kho chung
  // Trong truong hop nay la lay du lieu cua phan todo trong file reducer
  const todoList = useSelector(todosRemainingSelector);

  // Trong truong hop nay la lay du lieu cua phan filter.search trong file reducer,
  // Sau khi su dung thu vien reselector trong file selector thi khong can su dung ham nay
  // nua, vi khi nhap input search thi trong file selector.js da filter va mapping 
  // const searchText = useSelector(searchTextSelector);

  // Su dung dispatch de ban di mot action
  // sau khi dispatch thi function rootReduce se duoc goi
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(), //tu dong tao ra id
      name: todoName, // get name of input tag
      priority: priority,
      completed: false
    }));

    // Sau khi nhan add, can reset the input ve string '', va priority = 'Medium'
    setTodoName('');
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' /> */}

        {/* get state from store and print to screen*/}
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick} >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
