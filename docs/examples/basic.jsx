/* eslint-disable no-alert, no-console, react/no-find-dom-node */
import React from 'react';
import '../../assets/index.less';
import './basic.less';
import Tree, { TreeNode } from '../../src';

// const treeData = [
//   {
//     key: '0-0',
//     title: 'parent 1',
//     children: [
//       { key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
//       {
//         key: '0-0-1',
//         title: 'parent 1-2',
//         children: [
//           { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
//           { key: '0-0-1-1', title: 'parent 1-2-1' },
//           { key: '0-0-1-2', title: 'parent 1-2-2' },
//           { key: '0-0-1-3', title: 'parent 1-2-3' },
//           { key: 1128, title: 1128 },
//         ],
//       },
//     ],
//   },
// ];

const treeData = [
  {
    title: 'parent-1',
    key: '1',
    children: [
      {
        title: '1-0',
        key: '1-0',
        // row: true,
        children: [
          { title: '1-0-0', key: '1-0-0' },
          { title: '1-0-1', key: '1-0-1' },
          { title: '1-0-2', key: '1-0-2' },
        ],
      },
      {
        title: '1-1',
        key: '1-1',
        row: true,
        children: [
          { title: '1-1-0', key: '1-1-0' },
          { title: '1-1-1', key: '1-1-1' },
          { title: '1-1-2', key: '1-1-2' },
          { title: '1-1-33333333333333333333333333333', key: '1-1-3' },
          { title: '1-1-4444444444444444444444444444', key: '1-1-4' },
          { title: '1-1-55555555555555555555555555', key: '1-1-5' },
          { title: '1-1-666666666666666666666666666', key: '1-1-6' },
        ],
      },
      {
        title: '1-2',
        key: '1-2',
      },
    ],
  },
  {
    title: 'parent-2',
    key: '2',
    // row: true,
    children: [
      { title: '2-0-0', key: '2-0-0' },
      { title: '2-0-1', key: '2-0-1' },
      { title: '2-0-2', key: '2-0-2' },
    ],
  },
  {
    title: 'parent-3',
    key: '3',
    // children: [
    //   { title: '4545', key: '4545' },
    // ],
  },
];

class Demo extends React.Component {
  // static defaultProps = {
  //   keys: ['0-0-0-0'],
  // };

  constructor(props) {
    super(props);
    const { keys } = props;
    this.state = {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };

    this.treeRef = React.createRef();
  }

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
  };

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  onEdit = () => {
    setTimeout(() => {
      console.log('current key: ', this.selKey);
    }, 0);
  };

  onDel = e => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };

  setTreeRef = tree => {
    this.tree = tree;
  };

  render() {
    // const customLabel = (
    //   <span className="cus-label">
    //     <span>operations: </span>
    //     <span style={{ color: 'blue' }} onClick={this.onEdit}>
    //       Edit
    //     </span>
    //     &nbsp;
    //     <label onClick={e => e.stopPropagation()}>
    //       <input type="checkbox" /> checked
    //     </label>
    //     &nbsp;
    //     <span style={{ color: '#EB0000' }} onClick={this.onDel}>
    //       Delete
    //     </span>
    //   </span>
    // );

    return (
      <div style={{ margin: '0 20px' }}>
        {/* <h2>simple</h2>
        <input aria-label="good" />
        <Tree
          ref={this.setTreeRef}
          className="myCls"
          showLine
          checkable
          defaultExpandAll
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          onActiveChange={key => console.log('Active:', key)}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title={customLabel} key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" style={{ background: 'rgba(255, 0, 0, 0.1)' }} />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="parent 1-1-0" key="0-0-1-0" disableCheckbox />
              <TreeNode title="parent 1-1-1" key="0-0-1-1" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2" disabled>
              <TreeNode title="parent 1-2-0" key="0-0-2-0" checkable={false} />
              <TreeNode title="parent 1-2-1" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree> */}

        <h2>Check on Click TreeNode</h2>
        <Tree
          ref={this.treeRef}
          className="myCls"
          showLine
          checkable
          selectable={false}
          defaultExpandAll
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          treeData={treeData}
        />

        {/* <h2>Select</h2>
        <Tree
          ref={this.treeRef}
          className="myCls"
          defaultExpandAll
          treeData={treeData}
          onSelect={this.onSelect}
          height={150}
        /> */}

        {/* <button
          type="button"
          onClick={() => {
            setTimeout(() => {
              console.log('scroll!!!');
              this.treeRef.current.scrollTo({ key: '0-0-1-9' });
            }, 100);
          }}
        >
          Scroll Last
        </button> */}
      </div>
    );
  }
}

export default Demo;
