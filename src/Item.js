import React from 'react';

class Item extends React.Component {
    render() {
        let { item, selected } = this.props;
        item = item || {};
        const { name, age, children } = item;

        let itemClass = ['item'];
        if (selected) {
            itemClass.push('selected');
        }
        if (children && children.length) {
            itemClass.push('has-children');
        }

        return (
            <div className={itemClass.join(' ')} onClick={this.onClick}>
                <div className="item-name">{name}</div>
                <div className="item-age">{age}</div>
            </div>
        )
    }

    onClick = (e) => {
        let { onClick, item } = this.props;
        if (onClick && item.children.length) {
            onClick(item);
        }
    }
}

export default Item;