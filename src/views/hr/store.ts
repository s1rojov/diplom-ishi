import { defineStore } from 'pinia'

export const useHrStore = defineStore('hr', {
    state: () => {
        return {
            isCreateModalOpen: false,
            leadershipData: {
                img: '',
                fullname: '',
                position: '',
                phone: '',
                email: '',
                admission: '',
                experience: '',
                obligation: ''
            },
            isDivisionModal: false,
            divisionData: {
                img: '',
                name: '',
                position: '',
                leadership: ''
            },
            isDepartmentModal: false,
            isDirectionModal: false,
            isKafedraModal: false
        }
    },
})
