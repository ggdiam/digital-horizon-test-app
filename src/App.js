import React, { Component } from 'react';
import './App.css';
import DragDrop from './DragDrop';
import SortPanel from './SortPanel';
import Item from './Item';

import file from './data/sample.json';
import hlp from './helper';

class App extends Component {
    constructor(props) {
        super(props);

        const list = file || [];
        const tree = hlp.listToTree(list);

        this.state = {
            tree: tree,
            list: list,
            columns: hlp.getColumns(tree, []),
            selectedIds: [],
            selectedSort: null
        }
    }

    renderColumn = (column, ix) => {
        let { selectedIds } = this.state;
        let { name, items } = column;

        return (
            <div key={ix} className="tree-column">
                <div className="lbl column-lbl">
                    {name}
                </div>

                {items.map(it => <Item
                    key={it.id}
                    item={it}
                    selected={selectedIds.some(si => si.id === it.id)}
                    onClick={this.itemClick}
                />)}
            </div>
        )
    }

    itemClick = (item) => {
        let { selectedIds, tree } = this.state;

        //toggle
        let ix = selectedIds.findIndex(it => it.id === item.id);
        if (ix !== -1) {
            selectedIds.splice(ix, 1);
        } else {
            selectedIds.push({ id: item.id, level: item.level });

            //leave selected current item and his parents
            selectedIds = selectedIds.filter(si => si.id === item.id || (si.id !== item.id && si.level < item.level));
        }

        let columns = hlp.getColumns(tree, selectedIds);
        this.setState({ selectedIds: selectedIds, columns: columns });
    }

    render() {
        let { columns, selectedSort } = this.state;

        return (
            <div className="App">
                <DragDrop onChange={this.onChangeData} />
                <SortPanel selectedSort={selectedSort} onChange={this.onSortChange} />

                <div className="tree-container">
                    {columns.map(this.renderColumn)}
                </div>
            </div>
        );
    }

    onSortChange = (sortItem) => {
        let { selectedSort, tree } = this.state;

        //toggle
        if (selectedSort && selectedSort.field === sortItem.field) {
            sortItem = null;
        }

        if (sortItem) {
            for (const it of tree) {
                hlp.sortTree(sortItem.field, it);
            }
        } else {
            //default sort
            for (const it of tree) {
                hlp.sortTree('sortIx', it);
            }
        }

        this.setState({ selectedSort: sortItem, tree: [...tree] });
    }

    onChangeData = (list) => {
        let { selectedSort } = this.state;
        
        if (list) {
            //reset
            const tree = hlp.listToTree(list);
            const selectedIds = [];
            let columns = hlp.getColumns(tree, selectedIds);
            
            //if sort set - sort
            if (selectedSort) {
                for (const it of tree) {
                    hlp.sortTree(selectedSort.field, it);
                }
            }
            this.setState({ list: list, tree: tree, selectedIds: selectedIds, columns: columns });
        }
    }
}

export default App;
