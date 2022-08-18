"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// let numbersCollection = new NumbersCollection([10, 3, -5, 0])
// let sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
