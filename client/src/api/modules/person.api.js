import publicAxios from "../../axios/publicAxios"

const PersonEndpoints = {
    personDetail: ({ personId }) => `/person/${personId}`,
    personMedia:({personId})=>`/person/${personId}/medias`
}

const PersonApi = {
    getDetail: async ({ personId }) => {
        try {
            const data = await publicAxios.get(PersonEndpoints.personDetail({ personId }))
            return data
        } catch (error) {
            return error
        }
    },
    getMedias: async ({ personId }) => {
        try {
            const data = await publicAxios.get(PersonEndpoints.personMedia({ personId }))
            return data
        } catch (error) {
            return error
        }
    }

}

export default PersonApi