class BidirectionalPriorityQueue {
  constructor() {
    this.items = [];
    this.order = 0;
  }

  enqueue(item, priority) {
    this.items.push({
      item,
      priority,
      order: this.order++,
    });
  }

  peek(mode) {
    const index = this.findIndex(mode);
    return index === -1 ? null : this.items[index].item;
  }

  dequeue(mode) {
    const index = this.findIndex(mode);
    if (index === -1) return null;

    return this.items.splice(index, 1)[0].item;
  }

  findIndex(mode) {
    if (this.items.length === 0) return -1;

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
      } else if (mode === "oldest") {
        if (current.order < best.order) {
          bestIndex = i;
        }
      } else if (mode === "newest") {
        if (current.order > best.order) {
          bestIndex = i;
        }
      } else {
        throw new Error(
          'Invalid mode. Use "highest", "lowest", "oldest", or "newest".',
        );
      }
    }

    return bestIndex;
  }
}