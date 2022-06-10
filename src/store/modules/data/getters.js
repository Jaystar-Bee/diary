export default {
    allDiary(state) {
        return state.allDiary
    },
    favouriteDiary(state) {
        const favourite = state.allDiary.filter(diary => diary.isFavourite == true)
        return favourite
    },
    allSearch(state) {
        return state.search
    }
}