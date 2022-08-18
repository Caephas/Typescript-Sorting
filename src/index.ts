import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


// let numbersCollection = new NumbersCollection([10, 3, -5, 0])
// let sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()