const mutations = {
  getPartMent(state, payload) { // 获得部门
    // console.table(payload[0])
    // console.table(payload[1])
    const newChildren = resetObject(payload)
    console.log(newChildren)
    state.getPartMent = newChildren
  },
  getPartUser(state, payload) { // 获得部门下人员
    console.log(payload)
    state.getPartUser = payload
  }
}

export default mutations

function resetObject(children, parent = '') {
  const newChildren = []
  children.forEach(item => {
    if (item.parent === parent) {
      item.children = resetObject(children, item.id);
      newChildren.push(item);
    }
  })
  return newChildren
}

// {
//     // children: [
//     //   {
//     //     name: 1,
//     //     id: 1,
//     //     open: false,
//     //     children: [
//     //       {
//     //         name: 1.1,
//     //         id: 1.1
//     //       },
//     //       {
//     //         name: 1.2,
//     //         id: 1.2
//     //       },
//     //       {
//     //         name: 1.3,
//     //         id: 1.3
//     //       }
//     //     ]
//     //   },
//     //   {
//     //     name: 2,
//     //     id: 2,
//     //     open: false,
//     //     children: [
//     //       {
//     //         name: 2.1,
//     //         id: 2.1
//     //       },
//     //       {
//     //         name: 2.2,
//     //         id: 2.2
//     //       }
//     //     ]
//     //   },
//     //   {
//     //     name: 3,
//     //     id: 3,
//     //     open: false,
//     //     children: [
//     //       {
//     //         name: 3.1,
//     //         id: 3.1,
//     //         open: false,
//     //         children: [
//     //           {
//     //             name: 3.11,
//     //             id: 3.11
//     //           },
//     //           {
//     //             name: 3.12,
//     //             id: 3.12,
//     //             open: false,
//     //             children: [
//     //               {
//     //                 name: 3.121,
//     //                 id: 3.121
//     //               }
//     //             ]
//     //           }
//     //         ]
//     //       },
//     //       {
//     //         name: 3.2,
//     //         id: 3.2,
//     //         open: false,
//     //         children: [
//     //           {
//     //             name: 3.21,
//     //             id: 3.21
//     //           },
//     //           {
//     //             name: 3.22,
//     //             id: 3.22
//     //           },
//     //           {
//     //             name: 3.23,
//     //             id: 3.23
//     //           }
//     //         ]
//     //       }
//     //     ]
//     //   }
//     // ]
// }
