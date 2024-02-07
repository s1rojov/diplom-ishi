const hr = [
    {
        path: '',
        name: 'HR',
        component: () => import('src/views/hr/index.vue'),
        children: [
            {
                path: '',
                name: 'Leadership',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/leadership/index.vue')
            },
            {
                path: 'department',
                name: 'Department',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/department/index.vue')
            },
            {
                path: 'direction',
                name: 'Direction',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/direction/index.vue')
            },
            {
                path: 'division',
                name: 'Division',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/division/index.vue')
            },
            {
                path: 'kafedra',
                name: 'Kafedra',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/kafedra/index.vue')
            },
            {
                path: 'position',
                name: 'Position hr',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/position/index.vue')
            },
            {
                path: 'shtat',
                name: 'Shtat',
                params: {
                    parentName: 'HR'
                },
                component: () => import('src/views/hr/childrens/shtat/index.vue')
            }
        ]
    }
]
export default hr