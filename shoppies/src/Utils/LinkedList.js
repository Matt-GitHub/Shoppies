class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertHead(value) {
    let newValue = new Node(value);
    if (this.size === 0) {
      this.head = newValue;
      this.tail = newValue;
      this.size++;
    } else {
      if (this.size < 5) {
        let temp = this.head;
        this.head = newValue;
        this.head.next = temp;
        this.size++;
      } else {
        console.log('size exceeded');
      }
    }
  }
}
export default LinkedList;
// let test = new LinkedList();

// test.insertHead(1);
// test.insertHead(2);
// test.insertHead(3);
// test.insertHead(4);
// test.insertHead('head');
// test.insertHead('dont add');

// console.log('test', test);
