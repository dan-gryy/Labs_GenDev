class BidirectionalPriorityQueue {
  constructor() {
    this.items = [];
    this.order = 0;
  }

  enqueue(item, priority) {
    this.items.push({
      item,
      priority,
      order: this.order++
    });
  }

  peek(mode) {
    if (this.items.length === 0) return null;

    let bestIndex = 0;

    for (let i = 1; i < this.items.length; i++) {
      const current = this.items[i];
      const best = this.items[bestIndex];

      if (mode === "highest") {
        if (
          current.priority > best.priority ||
          (current.priority === best.priority && current.order < best.order)
        ) {
          bestIndex = i;
        }
      } else if (mode === "lowest") {
        if (
          current.priority < best.priority ||
          (current.priority === best.priority && current.order < best.order)
        ) {
          bestIndex = i;
        }
      } else {
        throw new Error('Invalid mode. Use "highest" or "lowest".');
      }
    }

    return this.items[bestIndex].item;
  }

  dequeue(mode) {
    if (this.items.length === 0) return null;

    let bestIndex = 0;

    for (let i = 1; i < this.items.length; i++) {
      const current = this.items[i];
      const best = this.items[bestIndex];

      if (mode === "highest") {
        if (
          current.priority > best.priority ||
          (current.priority === best.priority && current.order < best.order)
        ) {
          bestIndex = i;
        }
      } else if (mode === "lowest") {
        if (
          current.priority < best.priority ||
          (current.priority === best.priority && current.order < best.order)
        ) {
          bestIndex = i;
        }
      } else {
        throw new Error('Invalid mode. Use "highest" or "lowest".');
      }
    }

    return this.items.splice(bestIndex, 1)[0].item;
  }
}