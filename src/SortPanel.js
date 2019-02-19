import React from 'react';

const sortFields = [
    { field: 'name', title: 'By name' },
    { field: 'age', title: 'By age' },
]

class SortPanel extends React.Component {
    renderItem = (s, ix) => {
        let { selectedSort } = this.props;

        let cls = ['sort-btn'];
        if (selectedSort && selectedSort.field === s.field) {
            cls.push('selected');
        }

        return (
            <div
                key={ix}
                className={cls.join(' ')}
                onClick={this.onClick.bind(this, s)}
            >{s.title}</div>
        )
    }

    render() {
        return (
            <div className="sort-panel">
                <div className="lbl sort-lbl">Sort</div>
                {sortFields.map(this.renderItem)}
            </div>
        )
    }

    onClick = (sortItem) => {
        let { onChange } = this.props;
        if (onChange) { onChange(sortItem); }
    }
}

export default SortPanel;