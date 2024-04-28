"use strict";

const { log } = require("console");

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    enqueueAtEnd(value) {
        let obj = {
            value: value,
            next: null
        }
        let current = this;
        while (current.next !== null) {
            current = current.next
        }
        current.next = obj;
        obj.next = null;
    }

    dequeueFromStart() {
        if (this === null) {
            // list is empty
            return null;
        }
        const value = list.value;
        list = list.next;
        return value;
    }

    enqueueAtStart(value) {
        let obj = {
            value: value,
            next: list
        }
        list = obj;
    }

    dequeueFromEnd() {
        if (this === null) { // list is empty
            return null;
        }
        if (this.next === null) { // only one element in the list
            const value = this.value;
            return value;
        }
        let prev = this;
        let current = prev.next;
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        const value = current.value;
        prev.next = null;
        return value;
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: null,
                    }
                }
            }
        }
    }
}

log(JSON.stringify(list, null, 4));


let ll = new LinkedList(12);

ll.enqueueAtEnd(12)

ll.dequeueFromEnd();

log(ll);

