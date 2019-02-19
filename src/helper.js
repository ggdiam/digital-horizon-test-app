const hlp = {
    listToTree(list) {
        let items = list.filter(it => it.parentId === null);

        let sortIx = 0;
        //fill children
        for (const it of items) {
            //set root level
            it.level = 0;
            //default sort ix
            it.sortIx = sortIx;
            sortIx++;
            hlp.fillChildren(list, it);
        }

        return items;
    },

    fillChildren(list, it) {
        it.children = list.filter(ch => ch.parentId === it.id);
        let sortIx = 0;
        for (const ch of it.children) {
            //set children level
            ch.level = it.level + 1;
            //default sort ix
            ch.sortIx = sortIx;
            sortIx++;
            hlp.fillChildren(list, ch);
        }
    },

    getColumns(tree, selectedIds) {
        let columns = [];

        //copy root
        columns.push({
            name: 'Root',
            items: tree
        });

        let selectedItem = tree.find(it => selectedIds.some(si => si.id === it.id));

        //if selected - go next
        while (selectedItem) {
            let items = selectedItem.children;
            columns.push({
                name: selectedItem.name,
                items: items
            });

            //next
            selectedItem = items.find(it => selectedIds.some(si => si.id === it.id));
        }

        return columns;
    },

    sortTree(field, item) {
        item.children.sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        for (const ch of item.children) {
            hlp.sortTree(field, ch);
        }
    },

    saveUrlState(state) {
        let json = JSON.stringify(state);
        window.location.hash = json;
    },

    getUrlState() {
        let state;
        try {
            let hash = decodeURIComponent(window.location.hash);
            hash = hash.substring(1);//remove #
            state = JSON.parse(hash);
        }
        catch (ignore) { }
        return state;
    }
}

export default hlp;