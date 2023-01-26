import { CATEGORIES_ACTION_TYPES } from "./category.type"
import { createAction } from "../../utils/reducer.utils"

 export const setCategoriesMap= (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesArray)

