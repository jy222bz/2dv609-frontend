import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface Model {
  id: number;
}

export abstract class ItemsComponent<T extends Model> {
  dataSource: MatTableDataSource<T> = null;
  selection = new SelectionModel<T>(true, []);
  search = false;
  expandedElement = null;

  total = 0;
  pageSize = 50;
  pageIndex = 0;
  filterValue = '';
  sortOrder = 'asc';
  sortBy = 'id';

  protected constructor() {

  }


  // ---------------------
  onSearch(value) {
    this.filterValue = value;
    this.get();
  }

  onSearchClose() {
    this.search = false;
    if (this.filterValue !== '') {
      this.filterValue = '';
      this.get();
    }
  }

  onSort(active, direction) {
    this.sortBy = active;
    this.sortOrder = direction;
    this.pageIndex = 0;
    this.get();
  }

  onPageChange(pageEvent) {
    this.selection.clear();
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.get();
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  moveItem(item, currentIndex) {
    const prevIndex = this.dataSource.data.findIndex((d) => d === item);
    if ((prevIndex === -1)) {
      return;
    }
    this.dataSource.data.splice(prevIndex, 1);
    this.dataSource.data.splice(currentIndex, 0, item);
    this.dataSource.filter = '';
  }

  // ---------------------
  updateItem(item) {
    if (item === null || item === undefined) {
      return;
    }
    const i = this.dataSource.data.map(x => x.id).indexOf(item.id);
    if (i >= 0) {
      this.selection.clear();
      this.dataSource.data.splice(i, 1, item);
      this.dataSource.filter = '';
    }
  }

  update(result) {
    if (result === undefined) {
      return;
    }
    if (result instanceof Array) {
      result.forEach(this.updateItem);
    } else {
      this.updateItem(result);
    }
  }

  findById(id) {
    return this.dataSource.data.find(x => x.id === id);
  }

  set(data) {
    this.total = data.totalElements;
    this.dataSource = new MatTableDataSource(data.content);
  }

  add(result) {
    if (result instanceof Array) {
      this.dataSource.data.push(...result);
      this.total += result.length;
    } else {
      this.dataSource.data.push(result);
      this.total += 1;
    }
    this.dataSource.filter = '';
  }

  clear() {
    this.selection.clear();
    this.dataSource = new MatTableDataSource([]);
  }

  delete(items) {
    this.selection.clear();
    this.dataSource.data = this.dataSource.data.filter((elem) => {
      return items.indexOf(elem.id) === -1;
    });
    this.total -= items.length;
  }

  abstract get();
}


