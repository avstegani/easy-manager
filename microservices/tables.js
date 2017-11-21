module.exports = {
    user: [""],
    task: [""],
    add: function (table, newNode) {
        var internalTable = eval('this.' + table);
        internalTable.push(newNode);
        return true;
    },
    save: function (table, id, field, value) {
        var internalTable = eval('this.' + table);
        for(var row in internalTable) {
            if(internalTable[row].id === id || (typeof id === 'string' && id === 'all')) {
                if(typeof field === 'object') {
                    for(var element in field)
                        internalTable[row][field[element].key] = field[element].value;
            } else
                    internalTable[row][field] = value;
                return;
            }
        }
    },
    del: function (table, id) {
        var internalTable = eval('this.' + table);
        var indexesToDelete = [];
        for(var row in internalTable) {
            if(internalTable[row].id === id) {
                indexesToDelete.unshift(row)
            }
        }
        if(indexesToDelete.length > 0) {
            for(var row in indexesToDelete)
                internalTable.splice(indexesToDelete[row], 1);
        }
        return true;
    },
    get: function (table, field, value) {
        var response = [];
        var internalTable = eval('this.' + table);
        
        if(field) {
            for(var row in internalTable) {
                if(internalTable[row][field] === value) {
                    response.push(internalTable[row]);
                }
            }
        } else
            response = internalTable;

        return response;
    },
    getAllReadings: function() {
        var response = [];
        for(var row in this.node) {
            var nodeReadings = this.get('reading', 'id', this.node[row].id);
            if(nodeReadings.length > 0) {
                var entry = {
                    node: this.node[row],
                    readings: this.get('reading', 'id', this.node[row].id)
                }
                response.push(entry);
            }
        }

        return response;
    },
    flushReadings: function() {
        this.reading = [];
    }
}