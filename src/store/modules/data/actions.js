import axios from 'axios';

export default {
    searchOutput(context, payload) {
        const diaries = context.getters.allDiary
        const searchDiaries = diaries.filter(diary => diary.date == payload.date)
        context.commit('setSearch', searchDiaries)
    },
    async getDiaries(context) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        console.log(token)

        const diaries = []
        try {
            const response = await axios.get(`https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}.json?auth=${token}`)

            for (const key in response.data) {
                const diary = {
                    id: key,
                    title: response.data[key].title,
                    description: response.data[key].description,
                    date: response.data[key].date,
                    isFavourite: response.data[key].isFavourite
                }
                diaries.push(diary)
            }
            context.commit('setDiaries', diaries)

        } catch (error) {
            console.log(error)
        }
    },
    async postDiary(context, payload) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const newDiary = {
            title: payload.title,
            description: payload.description,
            date: payload.date,
            isFavourite: false,
        }
        try {

            await axios.post(`https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}.json?auth=${token}`, { ...newDiary })
        } catch (error) {
            console.log(error)
        }

    },
    async toggleFavourite(context, payload) {
        const favStatus = payload.favStatus
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const id = payload.id

        await axios.patch(`https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}/${id}.json?auth=${token}`, { isFavourite: favStatus })
    },
    async deleteDetail(context, payload) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const id = payload.id

        await axios.delete(`https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}/${id}.json?auth=${token}`)
    },
    async editDetail(context, payload) {
        const userId = context.rootGetters.userId
        const token = context.rootGetters.token
        const id = payload.id

        await axios.patch(`https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}/${id}.json?auth=${token}`, { title: payload.title, description: payload.description })
    }
}