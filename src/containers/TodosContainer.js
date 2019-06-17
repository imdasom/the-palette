// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
  onInsert = () => {
    const { input, TodoActions } = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput('');
  };
  onToggle = (id) => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  };
  onRemove = (id) => {
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  };
  onChange = (e) => {
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  };
  render() {
    const { onInsert, onToggle, onRemove, onChange } = this;
    const { todos, input } = this.props;
    return (
      <Todos
        todos={todos}
        input={input}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
        onChange={onChange}
      />
    );
  }
}
const mapStateToProps = ({ todo }) => ({
  input: todo.get('input')
  ,todos: todo.get('todos')
});
const mapDispatchToProps = (dispatch) => ({
  TodoActions: bindActionCreators(todoActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);