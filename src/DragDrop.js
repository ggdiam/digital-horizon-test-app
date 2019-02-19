import React from 'react';

class DragDrop extends React.Component {
    render() {
        return (
            <div id="drop_zone" onDragOver={this.onDragOver} onDrop={this.onChange}>Drop json file here</div>
        )
    }

    onDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    onChange = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        let files = e.dataTransfer.files || e.target.files;
        let file = files.length ? files[0] : null;
        if (!file) return;

        const { onChange } = this.props;
        if (onChange) {
            let json = await loadJsonFile(file);
            onChange(json);
        }    
    }
}

function loadJsonFile(file) {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => {
            let json = null;

            if (reader.result) {
                try { json = JSON.parse(reader.result); }
                catch (ignore) { }
            }

            resolve(json);
        };
        reader.readAsText(file);
    })
}

export default DragDrop;