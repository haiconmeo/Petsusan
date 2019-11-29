"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("@angular/cdk/collections");
var tree_1 = require("@angular/cdk/tree");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var treeWithDynamicData = {
    beforeCodeTitle: 'Tree with dynamic data',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n      [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n      mode=\"indeterminate\"\n      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {CollectionViewer, SelectionChange} from '@angular/cdk/collections';\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {BehaviorSubject, merge, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n/** Flat node with expandable and level information */\nexport class DynamicFlatNode {\n  constructor(public item: string, public level = 1, public expandable = false,\n    public isLoading = false) {}\n  }\n\n  /**\n  * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch\n  * the descendants data from the database.\n  */\n  export class DynamicDatabase {\n    dataMap = new Map<string, string[]>([\n      ['Vegetables', ['Tomato', 'Potato', 'Onion']],\n      ['Apple', ['Fuji', 'Macintosh']],\n      ['Onion', ['Yellow', 'White', 'Purple']]\n    ]);\n\n    rootLevelNodes: string[] = ['Fruits', 'Vegetables'];\n    /** Initial data from database */\n    initialData(): DynamicFlatNode[] {\n    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));\n  }\n\n  getChildren(node: string): string[] | undefined {\n    return this.dataMap.get(node);\n  }\n\n  isExpandable(node: string): boolean {\n    return this.dataMap.has(node);\n  }\n}\n\n/**\n* File database, it can build a tree structured Json object from string.\n* Each node in Json object represents a file or a directory. For a file, it has filename and type.\n* For a directory, it has filename and children (a list of files or directories).\n* The input will be a json object string, and the output is a list of `FileNode` with nested\n* structure.\n*/\n@Injectable()\nexport class DynamicDataSource {\n\n  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);\n\n  get data(): DynamicFlatNode[] { return this.dataChange.value; }\n  set data(value: DynamicFlatNode[]) {\n    this.treeControl.dataNodes = value;\n    this.dataChange.next(value);\n  }\n\n  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,\n    private database: DynamicDatabase) {}\n\n  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {\n    this.treeControl.expansionModel.onChange!.subscribe(change => {\n    if ((change as SelectionChange<DynamicFlatNode>).added ||\n      (change as SelectionChange<DynamicFlatNode>).removed) {\n        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);\n      }\n    });\n\n    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));\n  }\n\n\n  /** Handle expand/collapse behaviors */\n  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {\n    if (change.added) {\n      change.added.forEach(node => this.toggleNode(node, true));\n    }\n    if (change.removed) {\n      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));\n    }\n  }\n\n\n  /**\n  * Toggle the node, remove from display list\n  */\n  toggleNode(node: DynamicFlatNode, expand: boolean) {\n    const children = this.database.getChildren(node.item);\n    const index = this.data.indexOf(node);\n    if (!children || index < 0) { // If no children, or cannot find the node, no op\n      return;\n    }\n\n\n    node.isLoading = true;\n\n    setTimeout(() => {\n      if (expand) {\n        const nodes = children.map(name =>\n          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));\n          this.data.splice(index + 1, 0, ...nodes);\n      } else {\n        let count = 0;\n        for (let i = index + 1; i < this.data.length\n          && this.data[i].level > node.level; i++, count++) {}\n          this.data.splice(index + 1, count);\n        }\n\n\n        // notify the change\n        this.dataChange.next(this.data);\n        node.isLoading = false;\n    }, 1000);\n  }\n}\n\n\n/**\n* @title Tree with dynamic data\n*/\n@Component({\n  selector: 'tree-dynamic-example',\n  templateUrl: 'tree-dynamic-example.html',\n  styleUrls: ['tree-dynamic-example.css'],\n  providers: [DynamicDatabase]\n})\nexport class TreeDynamicExample {\n  constructor(database: DynamicDatabase) {\n    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);\n    this.dataSource = new DynamicDataSource(this.treeControl, database);\n\n    this.dataSource.data = database.initialData();\n  }\n\n  treeControl: FlatTreeControl<DynamicFlatNode>;\n\n  dataSource: DynamicDataSource;\n\n  getLevel = (node: DynamicFlatNode) => node.level;\n\n  isExpandable = (node: DynamicFlatNode) => node.expandable;\n\n  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithFlatNodes = {
    beforeCodeTitle: 'Tree with flat nodes',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject, Observable, of as observableOf} from 'rxjs';\n\n/**\n* File node data with nested structure.\n* Each node has a filename, and a type or a list of children.\n*/\nexport class FileNode {\n  children: FileNode[];\n  filename: string;\n  type: any;\n}\n\n/** Flat node with expandable and level information */\n  export class FileFlatNode {\n  constructor(\n  public expandable: boolean, public filename: string, public level: number, public type: any) {}\n\n}\n\n/**\n* The file structure tree data in string. The data could be parsed into a Json object\n*/\nconst TREE_DATA = JSON.stringify({\n  Applications: {\n    Calendar: 'app',\n    Chrome: 'app',\n    Webstorm: 'app'\n  },\n  Documents: {\n    angular: {\n      src: {\n        compiler: 'ts',\n        core: 'ts'\n      }\n    },\n    material2: {\n      src: {\n        button: 'ts',\n        checkbox: 'ts',\n        input: 'ts'\n      }\n    }\n  },\n  Downloads: {\n    October: 'pdf',\n    November: 'pdf',\n    Tutorial: 'html'\n  },\n  Pictures: {\n    'Photo Booth Library': {\n      Contents: 'dir',\n      Pictures: 'dir'\n    },\n    Sun: 'png',\n    Woods: 'jpg'\n   }\n});\n\n/**\n* File database, it can build a tree structured Json object from string.\n* Each node in Json object represents a file or a directory. For a file, it has filename and type.\n* For a directory, it has filename and children (a list of files or directories).\n* The input will be a json object string, and the output is a list of `FileNode` with nested\n* structure.\n*/\n@Injectable()\n  export class FileDatabase {\n  dataChange = new BehaviorSubject<FileNode[]>([]);\n\n  get data(): FileNode[] { return this.dataChange.value; }\n\n  constructor() {\n    this.initialize();\n  }\n\n  initialize() {\n    // Parse the string to json object.\n    const dataObject = JSON.parse(TREE_DATA);\n\n    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested\n    //     file node as children.\n    const data = this.buildFileTree(dataObject, 0);\n\n    // Notify the change.\n    this.dataChange.next(data);\n  }\n\n  /**\n  * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.\n  * The return value is the list of `FileNode`.\n  */\n  buildFileTree(obj: object, level: number): FileNode[] {\n    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {\n    const value = obj[key];\n    const node = new FileNode();\n    node.filename = key;\n\n     if (value != null) {\n       if (typeof value === 'object') {\n         node.children = this.buildFileTree(value, level + 1);\n       } else {\n         node.type = value;\n       }\n      }\n\n      return accumulator.concat(node);\n    }, []);\n  }\n}\n\n\n/**\n* @title Tree with flat nodes\n*/\n@Component({\n  selector: 'tree-flat-overview-example',\n  templateUrl: 'tree-flat-overview-example.html',\n  styleUrls: ['tree-flat-overview-example.css'],\n  providers: [FileDatabase]\n})\nexport class TreeFlatOverviewExample {\n  treeControl: FlatTreeControl<FileFlatNode>;\n  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;\n  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;\n\n  constructor(database: FileDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,\n    this._isExpandable, this._getChildren);\n    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => this.dataSource.data = data);\n  }\n\n  transformer = (node: FileNode, level: number) => {\n    return new FileFlatNode(!!node.children, node.filename, level, node.type);\n  }\n\n  private _getLevel = (node: FileFlatNode) => node.level;\n  private _isExpandable = (node: FileFlatNode) => node.expandable;\n  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);\n  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithCheckboxes = {
    beforeCodeTitle: 'Tree with checkboxes',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n      [checked]=\"checklistSelection.isSelected(node)\"\n      (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n     <button mat-icon-button disabled></button>\n     <mat-form-field>\n       <input matInput #itemValue placeholder=\"New item...\">\n     </mat-form-field>\n     <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n      [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n      [indeterminate]=\"descendantsPartiallySelected(node)\"\n      (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\nimport {SelectionModel} from '@angular/cdk/collections';\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject} from 'rxjs';\n\n/**\n* Node for to-do item\n*/\nexport class TodoItemNode {\n  children: TodoItemNode[];\n  item: string;\n}\n\n/** Flat to-do item node with expandable and level information */\nexport class TodoItemFlatNode {\n  item: string;\n  level: number;\n  expandable: boolean;\n}\n\n/**\n* The Json object for to-do list data.\n*/\nconst TREE_DATA = {\n  Groceries: {\n    'Almond Meal flour': null,\n    'Organic eggs': null,\n    'Protein Powder': null,\n    Fruits: {\n      Apple: null,\n      Berries: ['Blueberry', 'Raspberry'],\n      Orange: null\n    }\n  },\n  Reminders: [\n    'Cook dinner',\n    'Read the Material Design spec',\n    'Upgrade Application to Angular'\n  ]\n};\n\n/**\n* Checklist database, it can build a tree structured Json object.\n* Each node in Json object represents a to-do item or a category.\n* If a node is a category, it has children items and new items can be added under the category.\n*/\n@Injectable()\nexport class ChecklistDatabase {\n  dataChange = new BehaviorSubject<TodoItemNode[]>([]);\n\n  get data(): TodoItemNode[] { return this.dataChange.value; }\n\n  constructor() {\n    this.initialize();\n  }\n\n  initialize() {\n    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested\n    //     file node as children.\n    const data = this.buildFileTree(TREE_DATA, 0);\n\n    // Notify the change.\n    this.dataChange.next(data);\n  }\n\n  /**\n  * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.\n  * The return value is the list of `TodoItemNode`.\n  */\n  buildFileTree(obj: object, level: number): TodoItemNode[] {\n    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {\n      const value = obj[key];\n      const node = new TodoItemNode();\n      node.item = key;\n\n      if (value != null) {\n        if (typeof value === 'object') {\n          node.children = this.buildFileTree(value, level + 1);\n        } else {\n          node.item = value;\n        }\n      }\n\n      return accumulator.concat(node);\n    }, []);\n  }\n\n/** Add an item to to-do list */\n  insertItem(parent: TodoItemNode, name: string) {\n    if (parent.children) {\n      parent.children.push({item: name} as TodoItemNode);\n      this.dataChange.next(this.data);\n    }\n  }\n\n  updateItem(node: TodoItemNode, name: string) {\n    node.item = name;\n\tthis.dataChange.next(this.data);\n  }\n}\n\n/**\n* @title Tree with checkboxes\n*/\n@Component({\n  selector: 'tree-checklist-example',\n  templateUrl: 'tree-checklist-example.html',\n  styleUrls: ['tree-checklist-example.css'],\n  providers: [ChecklistDatabase]\n)\nexport class TreeChecklistExample {\n  /** Map from flat node to nested node. This helps us finding the nested node to be modified */\n  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();\n\n  /** Map from nested node to flattened node. This helps us to keep the same object for selection */\n  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();\n\n  /** A selected parent node to be inserted */\n  selectedParent: TodoItemFlatNode | null = null;\n\n  /** The new item's name */\n  newItemName = '';\n\n  treeControl: FlatTreeControl<TodoItemFlatNode>;\n\n  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;\n\n  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;\n\n  /** The selection for checklist */\n  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);\n\n  constructor(private database: ChecklistDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,\n    this.isExpandable, this.getChildren);\n    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => {\n      this.dataSource.data = data;\n    });\n  }\n\n  getLevel = (node: TodoItemFlatNode) => node.level;\n\n  isExpandable = (node: TodoItemFlatNode) => node.expandable;\n\n  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;\n\n  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;\n\n  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';\n\n  /**\n  * Transformer to convert nested node to flat node. Record the nodes in maps for later use.\n  */\n  transformer = (node: TodoItemNode, level: number) => {\n    const existingNode = this.nestedNodeMap.get(node);\n    const flatNode = existingNode && existingNode.item === node.item\n      ? existingNode\n      : new TodoItemFlatNode();\n    flatNode.item = node.item;\n    flatNode.level = level;\n    flatNode.expandable = !!node.children;\n    this.flatNodeMap.set(flatNode, node);\n    this.nestedNodeMap.set(node, flatNode);\n    return flatNode;\n  }\n\n  /** Whether all the descendants of the node are selected */\n  descendantsAllSelected(node: TodoItemFlatNode): boolean {\n  const descendants = this.treeControl.getDescendants(node);\n     return descendants.every(child => this.checklistSelection.isSelected(child));\n  }\n\n  /** Whether part of the descendants are selected */\n  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {\n  const descendants = this.treeControl.getDescendants(node);\n  const result = descendants.some(child => this.checklistSelection.isSelected(child));\n    return result && !this.descendantsAllSelected(node);\n  }\n\n  /** Toggle the to-do item selection. Select/deselect all the descendants node */\n  todoItemSelectionToggle(node: TodoItemFlatNode): void {\n    this.checklistSelection.toggle(node);\n    const descendants = this.treeControl.getDescendants(node);\n    this.checklistSelection.isSelected(node) ? this.checklistSelection.select(...descendants)\n      : this.checklistSelection.deselect(...descendants);\n  }\n\n  /** Select the category so we can insert the new item. */\n  addNewItem(node: TodoItemFlatNode) {\n    const parentNode = this.flatNodeMap.get(node);\n    this.database.insertItem(parentNode!, '');\n    this.treeControl.expand(node);\n  }\n\n  /** Save the node to database */\n  saveNode(node: TodoItemFlatNode, itemValue: string) {\n    const nestedNode = this.flatNodeMap.get(node);\n    this.database.updateItem(nestedNode!, itemValue);\n  }\n}\n",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var treeWithPartiallyLoadedData = {
    beforeCodeTitle: 'Tree with partially loaded data',
    htmlCode: "\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n      {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n      [attr.aria-label]=\"'toggle ' + node.filename\"\n      (click)=\"loadChildren(node)\"\n      matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n   </button>\n   {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>",
    tsCode: "\n/**\n* @license\n* Copyright Google LLC All Rights Reserved.\n*\n* Use of this source code is governed by an MIT-style license that can be\n* found in the LICENSE file at https://angular.io/license\n*/\nimport {FlatTreeControl} from '@angular/cdk/tree';\nimport {Component, Injectable} from '@angular/core';\nimport {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';\nimport {BehaviorSubject, Observable} from 'rxjs';\n\nconst LOAD_MORE = 'LOAD_MORE';\n/** Nested node */\nexport class LoadmoreNode {\n  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);\n\n  get children(): LoadmoreNode[] {\n    return this.childrenChange.value;\n  }\n\n  constructor(public item: string,\n  public hasChildren = false,\n  public loadMoreParentItem: string | null = null) {}\n}\n\n/** Flat node with expandable and level information */\nexport class LoadmoreFlatNode {\n  constructor(public item: string,\n  public level = 1,\n  public expandable = false,\n  public loadMoreParentItem: string | null = null) {}\n}\n\n/**\n* A database that only load part of the data initially. After user clicks on the `Load more`\n* button, more data will be loaded.\n*/\n@Injectable()\nexport class LoadmoreDatabase {\n  batchNumber = 5;\n  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);\n  nodeMap = new Map<string, LoadmoreNode>();\n\n  /** The data */\n  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];\n  dataMap = new Map<string, string[]>([\n    ['Fruits', ['Apple', 'Orange', 'Banana']],\n    ['Vegetables', ['Tomato', 'Potato', 'Onion']],\n    ['Apple', ['Fuji', 'Macintosh']],\n    ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],\n  ]);\n\n  initialize() {\n    const data = this.rootLevelNodes.map(name => this._generateNode(name));\n    this.dataChange.next(data);\n  }\n\n  /** Expand a node whose children are not loaded */\n  loadMore(item: string, onlyFirstTime = false) {\n    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {\n      return;\n    }\n    const parent = this.nodeMap.get(item)!;\n    const children = this.dataMap.get(item)!;\n    if (onlyFirstTime && parent.children!.length > 0) {\n      return;\n    }\n    const newChildrenNumber = parent.children!.length + this.batchNumber;\n    const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));\n    if (newChildrenNumber < children.length) {\n    // Need a new load more node\n      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));\n    }\n\n    parent.childrenChange.next(nodes);\n    this.dataChange.next(this.dataChange.value);\n  }\n\n  private _generateNode(item: string): LoadmoreNode {\n    if (this.nodeMap.has(item)) {\n      return this.nodeMap.get(item)!;\n    }\n    const result = new LoadmoreNode(item, this.dataMap.has(item));\n    this.nodeMap.set(item, result);\n    return result;\n  }\n}\n\n/**\n* @title Tree with partially loaded data\n*/\nComponent({\n  selector: 'tree-loadmore-example',\n  templateUrl: 'tree-loadmore-example.html',\n  styleUrls: ['tree-loadmore-example.css'],\n  providers: [LoadmoreDatabase]\n})\nexport class TreeLoadmoreExample {\n  nodeMap = new Map<string, LoadmoreFlatNode>();\n  treeControl: FlatTreeControl<LoadmoreFlatNode>;\n  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;\n  // Flat tree data source\n  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;\n\n  constructor(private database: LoadmoreDatabase) {\n    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,\n    this.isExpandable, this.getChildren);\n\n    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);\n\n    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);\n\n    database.dataChange.subscribe(data => {\n      this.dataSource.data = data;\n    });\n\n    database.initialize();\n  }\n\n  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;\n\n  transformer = (node: LoadmoreNode, level: number) => {\n    const existingNode = this.nodeMap.get(node.item);\n\n    if (existingNode) {\n      return existingNode;\n    }\n\n    const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);\n    this.nodeMap.set(node.item, newNode);\n    return newNode;\n  }\n\n  getLevel = (node: LoadmoreFlatNode) => node.level;\n\n  isExpandable = (node: LoadmoreFlatNode) => node.expandable;\n\n  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;\n\n  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;\n\n  /** Load more nodes from data source */\n  loadMore(item: string) {\n    this.database.loadMore(item);\n  }\n\n  loadChildren(node: LoadmoreFlatNode) {\n    this.database.loadMore(node.item, true);\n  }\n}",
    cssCode: "",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());
exports.FileNode = FileNode;
/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
    return FileFlatNode;
}());
exports.FileFlatNode = FileFlatNode;
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs_1.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () {
            if (this.dataChange) {
                return this.dataChange.value;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    FileDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());
exports.FileDatabase = FileDatabase;
/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());
exports.DynamicFlatNode = DynamicFlatNode;
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());
exports.DynamicDatabase = DynamicDatabase;
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database, cdr) {
        this.treeControl = treeControl;
        this.database = database;
        this.cdr = cdr;
        this.dataChange = new rxjs_1.BehaviorSubject([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        // tslint:disable-next-line:no-non-null-assertion
        this.treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return rxjs_1.merge(collectionViewer.viewChange, this.dataChange).pipe(operators_1.map(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this.database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
            _this.cdr.markForCheck();
        }, 500);
    };
    DynamicDataSource = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [tree_1.FlatTreeControl,
            DynamicDatabase,
            core_1.ChangeDetectorRef])
    ], DynamicDataSource);
    return DynamicDataSource;
}());
exports.DynamicDataSource = DynamicDataSource;
/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
exports.TodoItemNode = TodoItemNode;
/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
exports.TodoItemFlatNode = TodoItemFlatNode;
/**
 * The Json object for to-do list data.
 */
var TREE_DATA_3 = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs_1.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () {
            if (this.dataChange) {
                return this.dataChange.value;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA_3, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());
exports.ChecklistDatabase = ChecklistDatabase;
var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs_1.BehaviorSubject([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());
exports.LoadmoreNode = LoadmoreNode;
/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());
exports.LoadmoreFlatNode = LoadmoreFlatNode;
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new rxjs_1.BehaviorSubject([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        var parent = this.nodeMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        var children = this.dataMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            // tslint:disable-next-line:no-non-null-assertion
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase = __decorate([
        core_1.Injectable()
    ], LoadmoreDatabase);
    return LoadmoreDatabase;
}());
exports.LoadmoreDatabase = LoadmoreDatabase;
/**
 * @title Tree with dynamic data
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent(database, database2, database3, database4, cdr) {
        var _this = this;
        this.database3 = database3;
        this.database4 = database4;
        this.cdr = cdr;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap3 = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap3 = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent3 = null;
        /** The new item's name */
        this.newItemName3 = '';
        /** The selection for checklist */
        this.checklistSelection3 = new collections_1.SelectionModel(true /* multiple */);
        this.nodeMap4 = new Map();
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.transformer2 = function (node, level) {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel2 = function (node) { return node.level; };
        this._isExpandable2 = function (node) { return node.expandable; };
        this._getChildren2 = function (node) { return rxjs_1.of(node.children); };
        this.hasChild2 = function (_, _nodeData) { return _nodeData.expandable; };
        this.getLevel3 = function (node) { return node.level; };
        this.isExpandable3 = function (node) { return node.expandable; };
        this.getChildren3 = function (node) { return node.children; };
        this.hasChild3 = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent3 = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer3 = function (node, level) {
            var existingNode = _this.nestedNodeMap3.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap3.set(flatNode, node);
            _this.nestedNodeMap3.set(node, flatNode);
            return flatNode;
        };
        this.getChildren4 = function (node) { return node.childrenChange; };
        this.transformer4 = function (node, level) {
            var existingNode = _this.nodeMap4.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap4.set(node.item, newNode);
            return newNode;
        };
        this.getLevel4 = function (node) { return node.level; };
        this.isExpandable4 = function (node) { return node.expandable; };
        this.hasChild4 = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore4 = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeControl = new tree_1.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database, this.cdr);
        this.dataSource.data = database.initialData();
        this.treeFlattener2 = new material_1.MatTreeFlattener(this.transformer2, this._getLevel2, this._isExpandable2, this._getChildren2);
        this.treeControl2 = new tree_1.FlatTreeControl(this._getLevel2, this._isExpandable2);
        this.dataSource2 = new material_1.MatTreeFlatDataSource(this.treeControl2, this.treeFlattener2);
        database2.dataChange.subscribe(function (data) { return _this.dataSource2.data = data; });
        this.treeFlattener3 = new material_1.MatTreeFlattener(this.transformer3, this.getLevel3, this.isExpandable3, this.getChildren3);
        this.treeControl3 = new tree_1.FlatTreeControl(this.getLevel3, this.isExpandable3);
        this.dataSource3 = new material_1.MatTreeFlatDataSource(this.treeControl3, this.treeFlattener3);
        database3.dataChange.subscribe(function (data) {
            _this.dataSource3.data = data;
        });
        this.treeFlattener4 = new material_1.MatTreeFlattener(this.transformer4, this.getLevel4, this.isExpandable4, this.getChildren4);
        this.treeControl4 = new tree_1.FlatTreeControl(this.getLevel4, this.isExpandable4);
        this.dataSource4 = new material_1.MatTreeFlatDataSource(this.treeControl4, this.treeFlattener4);
        database4.dataChange.subscribe(function (data) {
            _this.dataSource4.data = data;
        });
        database4.initialize();
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.exampleTreeWithDynamicData = treeWithDynamicData;
        this.exampleTreeWithFlatNodes = treeWithFlatNodes;
        this.exampleTreeWithCheckboxes = treeWithCheckboxes;
        this.exampleTreeWithPartiallyLoadedData = treeWithPartiallyLoadedData;
    };
    /** Whether all the descendants of the node are selected */
    TreeComponent.prototype.descendantsAllSelected3 = function (node) {
        var _this = this;
        var descendants = this.treeControl3.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection3.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    TreeComponent.prototype.descendantsPartiallySelected3 = function (node) {
        var _this = this;
        var descendants = this.treeControl3.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection3.isSelected(child); });
        return result && !this.descendantsAllSelected3(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeComponent.prototype.todoItemSelectionToggle3 = function (node) {
        var _a, _b;
        this.checklistSelection3.toggle(node);
        var descendants = this.treeControl3.getDescendants(node);
        this.checklistSelection3.isSelected(node)
            ? (_a = this.checklistSelection3).select.apply(_a, descendants) : (_b = this.checklistSelection3).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    TreeComponent.prototype.addNewItem3 = function (node) {
        var parentNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.insertItem(parentNode, '');
        this.treeControl3.expand(node);
    };
    /** Save the node to database */
    TreeComponent.prototype.saveNode3 = function (node, itemValue) {
        var nestedNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.updateItem(nestedNode, itemValue);
    };
    /** Load more nodes from data source */
    TreeComponent.prototype.loadMore4 = function (item) {
        this.database4.loadMore(item);
    };
    TreeComponent.prototype.loadChildren4 = function (node) {
        this.database4.loadMore(node.item, true);
    };
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'kt-tree',
            templateUrl: './tree.component.html',
            styles: ["\n\t.example-tree-progress-bar {\n\t\tmargin-left: 30px;\n\t  }\n\t"],
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            providers: [DynamicDatabase, FileDatabase, ChecklistDatabase, LoadmoreDatabase]
        }),
        __metadata("design:paramtypes", [DynamicDatabase,
            FileDatabase,
            ChecklistDatabase,
            LoadmoreDatabase,
            core_1.ChangeDetectorRef])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map