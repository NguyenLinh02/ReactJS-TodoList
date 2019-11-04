import React, {Component} from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    render(){
        let className = 'TodoItem';
        const {onClick} = this.props;
        let url = checkImg;

        if (this.props.item.isComplete){
            className += ' TodoItem-complete'
            url = checkCompleteImg;
        }
        
        return (
            <div className={className}>
                <img onClick={onClick} src={url} width={32} height={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
TodoItem.propTypes={
    onClick: PropTypes.func,
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string.isRequired
    }),
}
export default TodoItem;